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
  forwardMonthlyStockData : MonthlyStockDataDM = new MonthlyStockDataDM();
  constructor(private stockCS: StockCS, private applicationDS: ApplicationDS) {}

  async ngOnInit() {
    this.loading = true;
    const data = await this.stockCS.getStockData(1);
    this.stockData = data;
    const monthlyStockData = this.stockData.monthlyStockData?.find((monthlyStockData)=> monthlyStockData.year === this.currentYear);
    if (monthlyStockData) {
      this.calculateForwardValues(monthlyStockData);
    } 
    this.loading = false;
  }
  calculateForwardValues( mainMonthlyStockData : MonthlyStockDataDM) {
      const monthlyStockData : MonthlyStockDataDM  = cloneDeep(mainMonthlyStockData)
      let inflation = ((this.applicationDS.inflationRate / 12 ) / 100 ) + 1 ;

      if (
        mainMonthlyStockData.lastReportMonth >= 1 &&
        mainMonthlyStockData.lastReportMonth <= 5
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
        mainMonthlyStockData.lastReportMonth >= 6 &&
        mainMonthlyStockData.lastReportMonth <= 12
      ) {
        inflation =   1 ;

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
      if(  mainMonthlyStockData.lastReportMonth <=3){
        // monthlyStockData.operatingIncome3Monthly = get from before year
      }
      if(  mainMonthlyStockData.lastReportMonth >3 &&   mainMonthlyStockData.lastReportMonth <= 6  ){
        monthlyStockData.operatingIncome6Monthly = monthlyStockData.operatingIncome3Monthly + ( monthlyStockData.m4 +  monthlyStockData.m5 +  monthlyStockData.m6) ;
        monthlyStockData.operatingIncome9Monthly = monthlyStockData.operatingIncome6Monthly + (monthlyStockData.m7 +  monthlyStockData.m8 +  monthlyStockData.m9) ;
        monthlyStockData.operatingIncome12Monthly = monthlyStockData.operatingIncome9Monthly + (monthlyStockData.m10 +  monthlyStockData.m11 +  monthlyStockData.m12) ;


        monthlyStockData.netProfitAndLoss6Monthly = monthlyStockData.operatingIncome6Monthly * monthlyStockData.netProfitMarginFirstSeason ;
        monthlyStockData.netProfitAndLoss9Monthly = monthlyStockData.operatingIncome9Monthly * monthlyStockData.netProfitMarginFirstSeason ;
        monthlyStockData.netProfitAndLoss12Monthly = monthlyStockData.operatingIncome12Monthly * monthlyStockData.netProfitMarginFirstSeason ;

      } 

 
      if(  mainMonthlyStockData.lastReportMonth > 6 &&   mainMonthlyStockData.lastReportMonth <= 9  ){ 
        monthlyStockData.operatingIncome9Monthly = monthlyStockData.operatingIncome6Monthly + (monthlyStockData.m7 +  monthlyStockData.m8 +  monthlyStockData.m9) ;
        monthlyStockData.operatingIncome12Monthly = monthlyStockData.operatingIncome9Monthly + (monthlyStockData.m10 +  monthlyStockData.m11 +  monthlyStockData.m12) ;

        const netProfitMarginFirstSeason = (monthlyStockData.netProfitMarginFirstSeason + monthlyStockData.netProfitMarginSecondSeason ) / 2 ;
        monthlyStockData.netProfitAndLoss9Monthly = monthlyStockData.operatingIncome9Monthly * netProfitMarginFirstSeason ;
        monthlyStockData.netProfitAndLoss12Monthly = monthlyStockData.operatingIncome12Monthly * netProfitMarginFirstSeason ;
      } 

      if(  mainMonthlyStockData.lastReportMonth >9 &&   mainMonthlyStockData.lastReportMonth <= 12  ){
        monthlyStockData.operatingIncome12Monthly = monthlyStockData.operatingIncome6Monthly + (monthlyStockData.m10 +  monthlyStockData.m11 +  monthlyStockData.m12) ;
        const netProfitMarginFirstSeason = (monthlyStockData.netProfitMarginFirstSeason + monthlyStockData.netProfitMarginSecondSeason + monthlyStockData.netProfitMarginThirdSeason  ) / 3 ;
        monthlyStockData.netProfitAndLoss12Monthly = monthlyStockData.operatingIncome12Monthly * netProfitMarginFirstSeason ;

      } 


      this.forwardMonthlyStockData = monthlyStockData
      console.log(monthlyStockData);
  }
}
