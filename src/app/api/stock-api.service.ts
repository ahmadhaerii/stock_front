import { Injectable } from '@angular/core';
import UserDM from '../store/dataModels/userDM';
import { HttpRequestService } from '../services/http-request.service';
import { JsonParser } from '../utils/jsonparser';
import StockDM from '../store/dataModels/stockDM';
import { orderBy } from 'lodash';

@Injectable({
  providedIn: 'root',
})
export class StockApiService {
  users: UserDM[] = [];
  constructor(private httpRequest: HttpRequestService) {}


  public async getStock(id: number) {
   const data: any = await this.httpRequest.GET(
        'get_stock/'+id 
      );
      return JsonParser.deserializeObject(data, StockDM);

  }


  public async getStockData(id: number) {
   const data: any = await this.httpRequest.GET(
        'get_stock_data/'+id 
      );
      const stock = JsonParser.deserializeObject(data, StockDM) ;
      stock.yearlyStockData = orderBy(stock.yearlyStockData , ['year' ], ['asc' ]);
      return stock ;

  }


  


}
