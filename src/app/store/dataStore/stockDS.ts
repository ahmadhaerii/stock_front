import { isEmpty } from '../../utils/object';
import BaseItemDS from './base/baseItemDS';
import { Injectable } from '@angular/core';
import StockDM from '../dataModels/stockDM';
import { StockApiService } from 'src/app/api/stock-api.service';

@Injectable({
  providedIn: 'root',
})
export class StockDS extends BaseItemDS<StockDM> {
  constructor(private stockApiService: StockApiService) {
    super();
    this.onInitialization();
  }
  async onInitialization() {
    this.itemsWatch.subscribe((items) => {
      //
    });
  }

  // async add(office: OfficeDM) {
  //   const data = await this.officeApiService.add(office);
  //   this.addOrReplaceItem(data);
  //   return data;
  // }

  // async edit(office: OfficeDM) {
  //   const data = await this.officeApiService.edit(office);
  //   this.addOrReplaceItem(data);
  //   return data;
  // }

  // async delete(office: OfficeDM) {
  //   await this.officeApiService.delete(office);
  //   this.removeItem(office.officeId);
  //   return 'done';
  // }
  

  async getStockData(id: number) {
    return await this.stockApiService.getStockData(id);
  }

  async doLoad(force: boolean) {
    if (force || isEmpty(this.items)) {
      // const offices = await this.officeApiService.OfficeList();
      // await this.addOrReplaceItems(offices);
      return [];
    } else {
      return this.items;
    }
  }
}
