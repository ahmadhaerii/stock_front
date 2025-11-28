import { Injectable } from '@angular/core';
import { isEmpty } from '../../utils/object';
import { StockDS } from '../dataStore/stockDS';



@Injectable({
  providedIn: 'root',
})
export class StockCS {
  get itemsWatch() {
    return this.stockDS.itemsWatch;
  }

  get items() {
    return this.stockDS.items;
  }

  constructor(private stockDS: StockDS) {
    this.onInitialization();
  }

  async onInitialization() {
    this.stockDS.itemsWatch.subscribe((items) => {
      //
    });
  }

  async getStock(id: number) {
    return await this.stockDS.getStock(id);
  }

  // async edit(office: OfficeDM) {
  //   return await this.officeDS.edit(office);
  // }

  // async delete(office: OfficeDM) {
  //   return await this.officeDS.delete(office);
  // }

  async doLoad(force: boolean = false) {
    if (force || isEmpty(this.items)) {
      return await this.stockDS.doLoad(true);
    } else {
      return this.items;
    }
  }
}
