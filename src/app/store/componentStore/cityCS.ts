import { Injectable } from '@angular/core';
import { isEmpty } from '../../utils/object';
import CityDM from '../dataModels/cityDM';
import { CityDS } from '../dataStore/cityDS';

@Injectable({
  providedIn: 'root',
})
export class CityCS {
  get itemsWatch() {
    return this.cityDS.itemsWatch;
  }

  get items() {
    return this.cityDS.items;
  }

  constructor(private cityDS: CityDS) {
    this.onInitialization();
  }

  async onInitialization() {
    this.cityDS.itemsWatch.subscribe((items) => {
      //
    });
  }

  async add(city: CityDM) {
    return await this.cityDS.add(city);
  }

  async edit(city: CityDM) {
    return await this.cityDS.edit(city);
  }

  async delete(city: CityDM) {
    return await this.cityDS.delete(city);
  }

  async doLoad(force: boolean = false) {
    if (force || isEmpty(this.items)) {
      return await this.cityDS.doLoad(true);
    } else {
      return this.items;
    }
  }
}
