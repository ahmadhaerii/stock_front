import { Component } from '@angular/core';
import { IFareStructureLabel, Labels } from './fare-structure.label';
import { LabelManagerService } from 'src/app/services/label-manager.service';
import FareStructureDM from 'src/app/store/dataModels/fareStructureDM';
import { JsonParser } from 'src/app/utils/jsonparser';
import { NiraModalService } from 'nira-modal';
import { FareStructureItemsComponent } from '../fare-structure-items/fare-structure-items.component';

@Component({
  selector: 'app-fare-structure',
  templateUrl: './fare-structure.component.html',
  styleUrls: ['./fare-structure.component.scss'],
})
export class FareStructureComponent {
  labels: IFareStructureLabel =
    this.labelManagerService.getLabels<IFareStructureLabel>(Labels);
  selectedFareStructure?: FareStructureDM;
  fareStructures: FareStructureDM[] = [];

  constructor(
    private labelManagerService: LabelManagerService,
    private niraModalService: NiraModalService
  ) {}
  ngOnInit(): void {
    this.setFareStructure();
  }

  calculateTotalPrice(fareStructure: FareStructureDM): number {
    let totalPrice = 0;
    for (let i = 0; i < fareStructure.fareStructureDetails.length; i++) {
      totalPrice = totalPrice + fareStructure.fareStructureDetails[i].price;
    }
    return totalPrice;
  }

  setFareStructure() {
    const fares = [
      {
        FareStructureId: 1,
        Title: 'معمولی',
        FareStructureDetails: [
          { FareStructureItemId: 1, Price: 100000 },
          { FareStructureItemId: 3, Price: 500000 },
        ],
      },
      {
        FareStructureId: 2,
        Title: 'وی آی پی',
        FareStructureDetails: [
          { FareStructureItemId: 1, Price: 500000 },
          { FareStructureItemId: 2, Price: 150000 },
          { FareStructureItemId: 3, Price: 100000 },
        ],
      },
    ];

    this.fareStructures = JsonParser.deserializeArray(fares, FareStructureDM);
  }
  openFareStructureItemsModal() {
    this.niraModalService.open(FareStructureItemsComponent);
  }
}
