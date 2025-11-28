import { Injectable } from '@angular/core';
import BaseItemDS from './base/baseItemDS';
import { isEmpty } from '../../utils/object';
import CityDM from '../dataModels/cityDM';
import { CityApiService } from 'src/app/api/city-api.service';
import cityDM from '../dataModels/cityDM';

@Injectable({
  providedIn: 'root',
})
export class CityDS extends BaseItemDS<CityDM> {
  constructor(private cityApi: CityApiService) {
    super();
    this.onInitialization();
  }

  async onInitialization() {
    this.itemsWatch.subscribe((items) => {
      //
    });
  }

  async add(city: cityDM) {
    const data = await this.cityApi.add(city);
    this.addOrReplaceItem(data);
    return data;
  }

  async edit(city: cityDM) {
    const data = await this.cityApi.edit(city);
    this.addOrReplaceItem(data);
    return data;
  }

  async delete(city: cityDM) {
    await this.cityApi.delete(city);
    this.removeItem(city.cityId);
    return 'done';
  }

  async doLoad(force: boolean) {
    if (force || isEmpty(this.items)) {
      const cities = await this.cityApi.CityList();
      await this.addOrReplaceItems(cities);
      return cities;
    } else {
      return this.items;
    }
  }
}
