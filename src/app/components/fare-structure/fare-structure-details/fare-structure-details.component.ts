import { Component, Input, OnInit } from '@angular/core';
import {
  IFareStructureLabel,
  Labels,
} from '../fare-structure/fare-structure.label';
import { LabelManagerService } from 'src/app/services/label-manager.service';
import { FareStructureFormComponent } from '../fare-structure-form/fare-structure-form.component';
import { BehaviorSubject, of } from 'rxjs';
import FareStructureDM, {
  FareStructureDetailsDM,
} from 'src/app/store/dataModels/fareStructureDM';
import { NiraModalService } from 'nira-modal';
import { ColumnsSchema } from 'nira-falcon/lib/core-table/core-table/core-table.type';
import { COLUMNS_TYPES } from 'nira-falcon';

@Component({
  selector: 'app-fare-structure-details',
  templateUrl: './fare-structure-details.component.html',
  styleUrls: ['./fare-structure-details.component.scss'],
})
export class FareStructureDetailsComponent implements OnInit {
  fareStructureDetails = new BehaviorSubject<FareStructureDetailsDM[]>([]);
  @Input() set selectedFareStructure(
    fareStructure: FareStructureDM | undefined
  ) {
    if (fareStructure) {
      this.fareStructure = fareStructure;
      this.fareStructureDetails.next(this.fareStructure.fareStructureDetails);
    }
  }
  fareStructure?: FareStructureDM;

  labels: IFareStructureLabel =
    this.labelManagerService.getLabels<IFareStructureLabel>(Labels);

  columnsSchema: ColumnsSchema[] = [
    {
      key: 'fareStructureItem',
      type: COLUMNS_TYPES.SELECTOR,
      label: this.labels.fareStructureItemName,
      data: {
        key: 'title',
      },
    },
    {
      key: 'price',
      type: COLUMNS_TYPES.TEXT,
      label: this.labels.fareStructureItemPrice,
    },
    {
      key: 'action',
      type: COLUMNS_TYPES.ACTION_BUTTONS,
      label: this.labels.edit,

      data: [
        {
          key: 'fareStructureItemId',
          component: FareStructureFormComponent,
          title: '',
        },
      ],
    },
  ];

  constructor(
    private labelManagerService: LabelManagerService,
    private niraModalService: NiraModalService
  ) {}
  ngOnInit(): void {}

  openAddFareStructureItemModal() {
    this.niraModalService.open(FareStructureFormComponent);
  }
}
