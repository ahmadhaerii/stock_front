import { Component, Input } from '@angular/core';
import { LabelManagerService } from 'src/app/services/label-manager.service';
import { FareStructureItemList } from 'src/app/utils/constants';
import {
  IFareStructureLabel,
  Labels,
} from '../fare-structure/fare-structure.label';
import { Subject } from 'rxjs';
import { IModal, NiraModalConfig } from 'nira-modal';

@Component({
  selector: 'app-fare-structure-items',
  templateUrl: './fare-structure-items.component.html',
  styleUrls: ['./fare-structure-items.component.scss'],
})
export class FareStructureItemsComponent implements IModal  {
  @Input() closeSubject!: Subject<any>;
  @Input() config!: NiraModalConfig;

  labels = this.labelManagerService.getLabels<IFareStructureLabel>(Labels);

  get fareStructureItemList() {
    return FareStructureItemList;
  }
  constructor(private labelManagerService: LabelManagerService) {}
}
