import { Component } from '@angular/core';
import { COLUMNS_TYPES } from 'nira-falcon';
import { ColumnsSchema } from 'nira-falcon/lib/core-table/core-table/core-table.type';
import { BehaviorSubject } from 'rxjs';
import { StockCS } from 'src/app/store/componentStore/stockCS';
import StockDM from 'src/app/store/dataModels/stockDM';

@Component({
  selector: 'app-stock-page',
  templateUrl: './stock-page.component.html',
  styleUrls: ['./stock-page.component.scss']
})
export class StockPageComponent {
  loading = false ;
  stockData : StockDM = new StockDM();

  constructor(
    private stockCS: StockCS
  ) {}

    async ngOnInit() {
      this.loading = true
      const data = await this.stockCS.getStockData(1);
      console.log(data);
       this.stockData = data ;
      this.loading = false
  }
}
