import { Injectable } from '@angular/core';
import { HttpRequestService } from '../services/http-request.service';
import { JsonParser } from '../utils/jsonparser';
import CustomReportParameterDM from '../store/dataModels/customReportParameterDM';

@Injectable({
  providedIn: 'root',
})
export class ReportApiService {
  constructor(private httpRequest: HttpRequestService) {}

  public async getReportItem(id: number) {
    const params = {
      CustomReportID: id,
    };
    const data: any = await this.httpRequest.POST(
      '/CustomReport/GetCustomReport',
      params
    );
    return data;
  }
  public async customReportParametersList(id: number) {
    const params = {
      CustomReportID: id,
    };
    const data: any = await this.httpRequest.POST(
      '/CustomReport/CustomReportParametersList',
      params
    );
    return JsonParser.deserializeArray(data, CustomReportParameterDM);
  }
  public async getCustomReportParameter(
    customReportId: number,
    parameters: CustomReportParameterDM[]
  ) {
    const params = {
      CustomReportID: customReportId,
      Parameters: parameters.map((parameter: CustomReportParameterDM) => {
        return {
          CustomReportParameterID: parameter.customReportParameterId,
          Value: parameter.defaultValue,
        };
      }),
    };
    const data: any = await this.httpRequest.POST(
      '/CustomReport/GetCustomReportParameter',
      params
    );
    return data;
  }
}
