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
  forwardMessage = 'موارد آبی رنگ ، به صورت forward  است ';
  forwardMonthlyStockData : MonthlyStockDataDM = new MonthlyStockDataDM();
  constructor(private stockCS: StockCS, private applicationDS: ApplicationDS) {}

  async ngOnInit() {
    this.loading = true;
    const data = await this.stockCS.getStockData(1);
    this.stockData = data;
    const date = moment();
    const monthlyStockData = this.stockData.monthlyStockData?.find((monthlyStockData)=> monthlyStockData.year === date.format('jYYYY'));
    if (monthlyStockData) {
      this.calculateForwardValues(cloneDeep(monthlyStockData));
    } 
    this.loading = false;
  }
  calculateForwardValues( monthlyStockData : MonthlyStockDataDM) {
    
      const inflation = ((this.applicationDS.inflationRate / 12 ) / 100 ) + 1 ;

      if (
        monthlyStockData.lastReportMonth >= 1 &&
        monthlyStockData.lastReportMonth <= 5
      ) {
        if (monthlyStockData.m1 === 0) {
          return;
        }
        if (monthlyStockData.m2 === 0) {
          monthlyStockData.m2 =Math.round(monthlyStockData.m1 *  inflation)
            ;
        }
        if (monthlyStockData.m3 === 0) {
          monthlyStockData.m3 =Math.round( ((monthlyStockData.m1 + monthlyStockData.m2) / 2 ) *  inflation);
        }
        if (monthlyStockData.m4 === 0) {
          monthlyStockData.m4 =Math.round(
            ((monthlyStockData.m1 + monthlyStockData.m2 + monthlyStockData.m3) / 3)  *  inflation);
        }
        if (monthlyStockData.m5 === 0) {
          monthlyStockData.m5 =Math.round(
           ( (monthlyStockData.m1 +
              monthlyStockData.m2 +
              monthlyStockData.m3 +
              monthlyStockData.m4) /
            4) * inflation);
        }
        const average =  (monthlyStockData.m1 + monthlyStockData.m2 + monthlyStockData.m3 + monthlyStockData.m4  + monthlyStockData.m5) / 5  ;
        monthlyStockData.m6 =Math.round( average *  inflation);
        monthlyStockData.m7 =Math.round( average *  inflation); 
        monthlyStockData.m8 =Math.round( average *  inflation);
        monthlyStockData.m9 =Math.round( average *  inflation);
        monthlyStockData.m10 =Math.round( average *  inflation);
        monthlyStockData.m11 =Math.round( average *  inflation);
        monthlyStockData.m12 =Math.round( average *  inflation);

      } else if (
        monthlyStockData.lastReportMonth >= 6 &&
        monthlyStockData.lastReportMonth <= 12
      ) {

        if (monthlyStockData.m6 === 0) {
            const average =  (monthlyStockData.m1 + monthlyStockData.m2 + monthlyStockData.m3 + monthlyStockData.m4  + monthlyStockData.m5) / 5  ;
            monthlyStockData.m6 = Math.round(average *  inflation);
          
        }
        if (monthlyStockData.m7 === 0) {
           const average =  (monthlyStockData.m1 + monthlyStockData.m2 + monthlyStockData.m3 + monthlyStockData.m4  + monthlyStockData.m5 + monthlyStockData.m6) / 6  ;
            monthlyStockData.m7 = Math.round(average *  inflation); 
          
        }
        if (monthlyStockData.m8 === 0) {
          const average =  (monthlyStockData.m1 + monthlyStockData.m2 + monthlyStockData.m3 + monthlyStockData.m4  + monthlyStockData.m5 + monthlyStockData.m6  + monthlyStockData.m7) / 7  ;
            monthlyStockData.m8 = Math.round(average *  inflation); 
          
        }
        if (monthlyStockData.m9 === 0) {
          const average =  (monthlyStockData.m1 + monthlyStockData.m2 + monthlyStockData.m3 + monthlyStockData.m4  + monthlyStockData.m5 + monthlyStockData.m6 +  monthlyStockData.m7 +  monthlyStockData.m8) / 8  ;
            monthlyStockData.m9 = Math.round(average *  inflation); 
          
        }
        if (monthlyStockData.m10 === 0) {
          const average =  (monthlyStockData.m1 + monthlyStockData.m2 + monthlyStockData.m3 + monthlyStockData.m4  + monthlyStockData.m5 + monthlyStockData.m6 +  monthlyStockData.m7 +  monthlyStockData.m8+  monthlyStockData.m9) / 9  ;
            monthlyStockData.m10 = Math.round(average *  inflation); 
          
        }
        if (monthlyStockData.m11 === 0) {
          const average =  (monthlyStockData.m1 + monthlyStockData.m2 + monthlyStockData.m3 + monthlyStockData.m4  + monthlyStockData.m5 + monthlyStockData.m6 +  monthlyStockData.m7 +  monthlyStockData.m8+  monthlyStockData.m9+  monthlyStockData.m10) / 10  ;
            monthlyStockData.m11 = Math.round(average *  inflation); 
          
        }
        if (monthlyStockData.m12 === 0) {
          const average =  (monthlyStockData.m1 + monthlyStockData.m2 + monthlyStockData.m3 + monthlyStockData.m4  + monthlyStockData.m5 + monthlyStockData.m6 +  monthlyStockData.m7+  monthlyStockData.m8+  monthlyStockData.m9+  monthlyStockData.m10+  monthlyStockData.m11) / 11 ;
            monthlyStockData.m12 = Math.round(average *  inflation); 
          
        }
         
      }
      this.forwardMonthlyStockData = monthlyStockData
      console.log(monthlyStockData);
  }
}
