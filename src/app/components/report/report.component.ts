import { Component, Input } from '@angular/core';
import { LabelManagerService } from '../../services/label-manager.service';
import { IReportLabel, Labels } from './report.label';
import { BehaviorSubject, Subject } from 'rxjs';
import { ColumnsSchema } from 'nira-falcon/lib/core-table/core-table/core-table.type';
import { IModal, NiraModalConfig } from 'nira-modal';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import CustomReportParameterDM from 'src/app/store/dataModels/customReportParameterDM';
import { STATUS_OPTIONS } from 'src/app/utils/constants';
import { ReportApiService } from 'src/app/api/report-api.service';
import { ActivatedRoute } from '@angular/router';
import { Util } from 'src/app/utils/util';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css'],
})
export class ReportComponent {
  labels = this.labelManagerService.getLabels<IReportLabel>(Labels);
  data: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  parameters: CustomReportParameterDM[] = [];
  columnsSchema: ColumnsSchema[] = [];
  disabledParameters: string[] = [];
  myForm: FormGroup = new FormGroup({});
  statusItems = STATUS_OPTIONS;
  loading = false;
  loadingReportParameters = false;
  titleHeader = '';
  reportId = 0;
  itemId = 0;
  constructor(
    private labelManagerService: LabelManagerService,
    private route: ActivatedRoute,
    private reportApi: ReportApiService
  ) {}

  async ngOnInit() {
    this.route.params.subscribe(async (params) => {
      this.reportId = Number(params['id']);
      this.data.next([]);
      this.columnsSchema = [];

      await this.getReportParameters(this.reportId);
    });
  }

  submit() {
    this.getCustomReportParameter();
  }

  async getReportParameters(reportId: number) {
    this.loadingReportParameters = true;
    try {
      this.parameters = await this.reportApi.customReportParametersList(
        reportId
      );
      this.myForm = new FormGroup({});
      this.parameters.forEach((parameter: CustomReportParameterDM) => {
        if (parameter.parameterType !== 'Boolean') {
          this.myForm.addControl(
            parameter.parameterName,
            new FormControl('', Validators.required)
          );
          this.myForm
            .get(parameter.parameterName)
            ?.setValue(parameter.defaultValue);
        }
      });
    } catch (error) {
      console.error(error);
    }
    this.loadingReportParameters = false;
  }

  async getCustomReportParameter() {
    this.loading = true;

    this.parameters.forEach((parameter: CustomReportParameterDM) => {
      if (parameter.parameterType === 'Date') {
        parameter.defaultValue = Util.shamsiToMiladi(
          this.myForm.get(parameter.parameterName)?.value,
          'YYYY-MM-DD'
        );
      }
    });

    try {
      const report = await this.reportApi.getCustomReportParameter(
        this.reportId,
        this.parameters
      );
      report.Schemas.forEach((schema: any) => {
        if (schema.data.length > 0) {
          const data = schema.data.split(';');
          schema.data = {};
          data.forEach((element: any) => {
            if (element.length > 0) {
              let value = element.split('=')[1];
              value =
                value === 'true' ? true : value === 'false' ? false : value;
              schema.data[element.split('=')[0]] = value;
            }
          });
        } else {
          delete schema.data;
        }
      });
      this.columnsSchema = report.Schemas;
      this.data.next(report.ReportDatas);
    } catch (error) {
      console.error(error);
    }
    this.loading = false;
  }

  close() {}
}
