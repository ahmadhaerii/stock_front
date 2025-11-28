import { Component, Input, OnInit } from '@angular/core';
import { IModal, NiraModalConfig } from 'nira-modal';
import { Subject } from 'rxjs';
import { LabelManagerService } from 'src/app/services/label-manager.service';
import {
  IFareStructureLabel,
  Labels,
} from '../fare-structure/fare-structure.label';
import { ConfirmDialog } from 'src/app/utils/types';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FareStructureItemList } from 'src/app/utils/constants';

@Component({
  selector: 'app-fare-structure-form',
  templateUrl: './fare-structure-form.component.html',
  styleUrls: ['./fare-structure-form.component.scss'],
})
export class FareStructureFormComponent implements IModal {
  @Input() closeSubject!: Subject<any>;
  @Input() config!: NiraModalConfig;
  labels = this.labelManagerService.getLabels<IFareStructureLabel>(Labels);
  loading = false;
  loadingDelete = false;
  confirmDelete: ConfirmDialog = {
    cancelBtn: this.labels.close,
    confirmBtn: this.labels.delete,
    text: this.labels.confirmDeleteText,
    title: this.labels.confirmDeleteTitle,
  };
  get fareStructureItemList() {
    return FareStructureItemList;
  }
  myForm: FormGroup = new FormGroup({
    formControlTitle: new FormControl('', Validators.required),
    formControlPrice: new FormControl('', Validators.required),
  });

  constructor(private labelManagerService: LabelManagerService) {}

  async delete() {}

  async submitBtn() {}

  close() {
    this.closeSubject.next('');
  }
}
