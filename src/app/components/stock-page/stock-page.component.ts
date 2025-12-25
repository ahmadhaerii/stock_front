import { Component } from '@angular/core';
import moment from 'jalali-moment';
import { cloneDeep } from 'lodash';
import { COLUMNS_TYPES } from 'nira-falcon';
import { ColumnsSchema } from 'nira-falcon/lib/core-table/core-table/core-table.type';
import { BehaviorSubject } from 'rxjs';
import { ApplicationDS } from 'src/app/store/applicationDS.service';
import { StockCS } from 'src/app/store/componentStore/stockCS';
import MonthlyStockDataDM from 'src/app/store/dataModels/monthlyStockData';
import StockDM from 'src/app/store/dataModels/stockDM';

@Component({
  selector: 'app-stock-page',
  templateUrl: './stock-page.component.html',
  styleUrls: ['./stock-page.component.scss'],
})
export class StockPageComponent {
  loading = false;
  stockData: StockDM = new StockDM();
  currentYear = moment().format('jYYYY');

  forwardMessage = 'موارد آبی رنگ ، به صورت forward  است ';
  constructor(private stockCS: StockCS, private applicationDS: ApplicationDS) {}

  async ngOnInit() {
    this.loading = true;
    const data = await this.stockCS.getStockData(1);
    this.stockData = data;
    const monthlyStockData = this.stockData.monthlyStockData?.find((monthlyStockData)=> monthlyStockData.year === this.currentYear);
    
    this.loading = false;
  } 
}
