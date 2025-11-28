import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-fare-structure-item',
  templateUrl: './fare-structure-item.component.html',
  styleUrls: ['./fare-structure-item.component.scss'],
})
export class FareStructureItemComponent {
  @Input() fareStructureItems?: {
    Id: number;
    FareStructureItemId: number;
    Title: string;
  };
  myForm: FormGroup = new FormGroup({
    formControlTitle: new FormControl('', Validators.required),
    formControlPrice: new FormControl('', Validators.required),
  });
}
