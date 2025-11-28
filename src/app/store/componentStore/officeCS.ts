import { Injectable } from '@angular/core';
import { isEmpty } from '../../utils/object';
import OfficeDM from '../dataModels/officeDM';
import { OfficeDS } from '../dataStore/officeDS';



@Injectable({
  providedIn: 'root',
})
export class OfficeCS {
  get itemsWatch() {
    return this.officeDS.itemsWatch;
  }

  get items() {
    return this.officeDS.items;
  }

  constructor(private officeDS: OfficeDS) {
    this.onInitialization();
  }

  async onInitialization() {
    this.officeDS.itemsWatch.subscribe((items) => {
      //
    });
  }

  async add(office: OfficeDM) {
    return await this.officeDS.add(office);
  }

  async edit(office: OfficeDM) {
    return await this.officeDS.edit(office);
  }

  async delete(office: OfficeDM) {
    return await this.officeDS.delete(office);
  }

  async doLoad(force: boolean = false) {
    if (force || isEmpty(this.items)) {
      return await this.officeDS.doLoad(true);
    } else {
      return this.items;
    }
  }
}
