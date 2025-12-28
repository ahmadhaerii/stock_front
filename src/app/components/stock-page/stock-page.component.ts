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
type Schema = {
  label: string;
  type: string;
  key: string;
  pipe?: string;
  leverage?: number;
  column?: number;
  color?: string;
  keys?: string[];
  data?: {
    key: string;
  };
};
export enum RequestStatus {
  Idle,
  Loading,
  Success,
  Error,
}
@Component({
  selector: 'app-stock-page',
  templateUrl: './stock-page.component.html',
  styleUrls: ['./stock-page.component.scss'],
})
export class StockPageComponent {
  proses: RequestStatus = RequestStatus.Idle;
  RequestStatus = RequestStatus;
  loading = false;
  stockData: any;
  currentYear = moment().format('jYYYY');
  columnsSchema: Schema[] = [
    {
      label: 'س م',
      type: COLUMNS_TYPES.NUMBER,
      key: 'year',
      color: 'gray',
    },
    {
      label: 'ف ',
      type: COLUMNS_TYPES.TEXT,
      key: 'operatingIncome',
      color: 'blue',
    },
    {
      label: 'ه.ت',
      type: COLUMNS_TYPES.TEXT,
      key: 'productionCost',
      color: 'blue',
    },
    {
      label: 'س(ز)خ',
      type: COLUMNS_TYPES.TEXT,
      key: 'netProfitAndLoss',
      color: 'blue',
    },
    {
      label: '$',
      type: COLUMNS_TYPES.SELECTOR,
      key: 'dollarPrice',
      data: {
        key: 'price',
      },
      color: 'gray',
    },
    {
      label: 'ف $',
      type: COLUMNS_TYPES.TEXT,
      key: 'operatingIncomeInDollars',
      pipe: '1.2-2',
      color: 'orange',
    },
    {
      label: 'ه ت $',
      type: COLUMNS_TYPES.TEXT,
      key: 'productionCostInDollars',
      pipe: '1.2-2',
      color: 'orange',
    },
    {
      label: 'س(ز)خ $',
      type: COLUMNS_TYPES.TEXT,
      key: 'netProfitAndLossInDollars',
      pipe: '1.2-2',
      color: 'orange',
    },
    {
      label: 'ه ت به ف',
      type: COLUMNS_TYPES.TEXT,
      key: 'costOfProductionToSales',
      pipe: '1.2-2',
      leverage: 100,
      color: 'blue',
    },
    {
      label: 'ح س خ',
      type: COLUMNS_TYPES.TEXT,
      key: 'netProfitMargin',
      pipe: '1.2-2',
      leverage: 100,
      color: 'blue',
    },
    {
      label: 'ت $',
      type: COLUMNS_TYPES.TEXT,
      key: 'dollarChanges',
      pipe: '1.2-2',
      leverage: 100,
      color: 'gray',
    },
    {
      label: 'ت ف $',
      type: COLUMNS_TYPES.TEXT,
      key: 'operatingIncomeInDollarsChanges',
      pipe: '1.2-2',
      leverage: 100,
      color: 'orange',
    },
    {
      label: 'ت ه ت $',
      type: COLUMNS_TYPES.TEXT,
      key: 'productionCostInDollarsChanges',
      pipe: '1.2-2',
      leverage: 100,
      color: 'orange',
    },
    {
      label: 'ت س(ز)خ $',
      type: COLUMNS_TYPES.TEXT,
      key: 'netProfitAndLossInDollarsChanges',
      pipe: '1.2-2',
      leverage: 100,
      color: 'orange',
    },
    {
      label: 'اهرم',
      type: COLUMNS_TYPES.TEXT,
      key: 'leverage',
      pipe: '1.2-2',
      leverage: 100,
      color: 'gray',
    },
  ];
  columnsSchema1: Schema[] = [
    {
      label: 'سال',
      type: COLUMNS_TYPES.NUMBER,
      key: 'year',
      color: 'gray',
      column: 1,
    },
    {
      label: 'فصل ',
      type: COLUMNS_TYPES.TEXT,
      key: 'operatingIncome',
      keys: ['springName', 'summerName', 'autumnName', 'winterName'],
      color: 'blue',
      column: 4,
    },
    {
      label: 'فروش فصلی',
      type: COLUMNS_TYPES.NUMBER,
      key: '',
      keys: [
        'springSeasonalSales',
        'summerSeasonalSales',
        'autumnSeasonalSales',
        'winterSeasonalSales',
      ],
      color: 'blue',
      column: 4,
    },
    {
      label: 'فروش',
      type: COLUMNS_TYPES.NUMBER,
      key: '',
      color: 'blue',
      keys: ['springSales', 'summerSales', 'autumnSales', 'winterSales'],
      column: 4,
    },
    {
      label: 'هزینه تولید ',
      type: COLUMNS_TYPES.NUMBER,
      key: '',
      color: 'gray',
      keys: [
        'springProductionCost',
        'summerProductionCost',
        'autumnProductionCost',
        'winterProductionCost',
      ],
      column: 4,
    },
    {
      label: ' سود خالص',
      type: COLUMNS_TYPES.TEXT,
      key: '',
      keys: [
        'springNetProfit',
        'summerNetProfit',
        'autumnNetProfit',
        'winterNetProfit',
      ],
      color: 'orange',
      column: 4,
    },
    {
      label: 'فروش فصل',
      type: COLUMNS_TYPES.TEXT,
      key: '',
      keys: [
        'springSeasonSale',
        'summerSeasonSale',
        'autumnSeasonSale',
        'winterSeasonSale',
      ],
      color: 'orange',
      column: 4,
    },
    {
      label: 'هزینه تولید فصل',
      type: COLUMNS_TYPES.TEXT,
      key: '',
      keys: [
        'springSeasonalProductionCost',
        'summerSeasonalProductionCost',
        'autumnSeasonalProductionCost',
        'winterSeasonalProductionCost',
      ],
      color: 'orange',
      column: 4,
    },
    {
      label: 'سود و زیان خالص فصل',
      type: COLUMNS_TYPES.TEXT,
      key: '',
      keys: [
        'springNetProfitAndLossForSeason',
        'summerNetProfitAndLossForSeason',
        'autumnNetProfitAndLossForSeason',
        'winterNetProfitAndLossForSeason',
      ],
      color: 'blue',
      column: 4,
    },
    {
      label: 'تولید فصل',
      type: COLUMNS_TYPES.TEXT,
      key: '',
      keys: [
        'springSeasonalProduction',
        'summerSeasonalProduction',
        'autumnSeasonalProduction',
        'winterSeasonalProduction',
      ],
      color: 'blue',
      column: 4,
    },
    {
      label: 'ت ه ت',
      type: COLUMNS_TYPES.TEXT,
      key: '',
      keys: [
        'springSeasonalProduction',
        'summerSeasonalProduction',
        'autumnSeasonalProduction',
        'winterSeasonalProduction',
      ],
      color: 'gray',
      column: 4,
    },
    {
      label: 'هزینه تولید به فروش',
      type: COLUMNS_TYPES.TEXT,
      key: '',
      keys: [
        'springCostOfProductionSales',
        'summerCostOfProductionSales',
        'autumnCostOfProductionSales',
        'winterCostOfProductionSales',
      ],
      color: 'orange',
      column: 4,
    },
    {
      label: 'حاشیه سود خالص',
      type: COLUMNS_TYPES.TEXT,
      key: '',
      color: 'orange',
      keys: [
        'springNetProfitMargin',
        'summerNetProfitMargin',
        'autumnNetProfitMargin',
        'winterNetProfitMargin',
      ],
      pipe: '1.2-2',
      column: 4,
    },
    {
      label: 'م ح س',
      type: COLUMNS_TYPES.TEXT,
      key: 'netProfitMargin',
      color: 'orange',
      pipe: '1.2-2',
      column: 1,
    },
  ];
  forwardMessage = 'موارد آبی رنگ ، به صورت forward  است ';
  constructor(private stockCS: StockCS, private applicationDS: ApplicationDS) {}

  async ngOnInit() {
    this.loading = true;
    this.proses = RequestStatus.Loading;
    const data = await this.stockCS.getStockData(1);
    await this.customizeData(data);
    this.proses = RequestStatus.Success;
    this.stockData = data;
    const monthlyStockData = this.stockData.monthlyStockData?.find(
      (monthlyStockData: any) => monthlyStockData.year === this.currentYear
    );

    this.loading = false;
  }

  customizeData(stockData: StockDM) {
    stockData.monthlyStockData?.forEach((monthly: MonthlyStockDataDM) => {
      if (monthly.lastReportMonth <= 3 && stockData.forecastMonthlyStockData) {
        monthly.springSeasonalSales =
          stockData.forecastMonthlyStockData.m1 +
          stockData.forecastMonthlyStockData.m2 +
          stockData.forecastMonthlyStockData.m3;
      } else {
        monthly.springSeasonalSales = monthly.m1 + monthly.m2 + monthly.m3;
      }
      if (monthly.lastReportMonth <= 6 && stockData.forecastMonthlyStockData) {
        monthly.summerSeasonalSales =
          stockData.forecastMonthlyStockData.m4 +
          stockData.forecastMonthlyStockData.m5 +
          stockData.forecastMonthlyStockData.m6;
      } else {
        monthly.summerSeasonalSales = monthly.m4 + monthly.m5 + monthly.m6;
      }
      if (monthly.lastReportMonth <= 9 && stockData.forecastMonthlyStockData) {
        monthly.autumnSeasonalSales =
          stockData.forecastMonthlyStockData.m7 +
          stockData.forecastMonthlyStockData.m8 +
          stockData.forecastMonthlyStockData.m9;
      } else {
        monthly.autumnSeasonalSales = monthly.m7 + monthly.m8 + monthly.m9;
      }
      if (monthly.lastReportMonth <= 12 && stockData.forecastMonthlyStockData) {
        monthly.winterSeasonalSales =
          stockData.forecastMonthlyStockData.m10 +
          stockData.forecastMonthlyStockData.m11 +
          stockData.forecastMonthlyStockData.m12;
      } else {
        monthly.winterSeasonalSales = monthly.m10 + monthly.m11 + monthly.m12;
      }

      if (monthly.lastReportMonth <= 3 && stockData.forecastMonthlyStockData) {
        monthly.springSales =
          stockData.forecastMonthlyStockData.operatingIncome3Monthly;
      } else {
        monthly.springSales = monthly.operatingIncome3Monthly;
      }
      if (monthly.lastReportMonth <= 6 && stockData.forecastMonthlyStockData) {
        monthly.summerSales =
          stockData.forecastMonthlyStockData.operatingIncome6Monthly;
      } else {
        monthly.summerSales = monthly.operatingIncome6Monthly;
      }
      if (monthly.lastReportMonth <= 9 && stockData.forecastMonthlyStockData) {
        monthly.autumnSales =
          stockData.forecastMonthlyStockData.operatingIncome9Monthly;
      } else {
        monthly.autumnSales = monthly.operatingIncome9Monthly;
      }
      if (monthly.lastReportMonth <= 12 && stockData.forecastMonthlyStockData) {
        monthly.winterSales =
          stockData.forecastMonthlyStockData.operatingIncome12Monthly;
      } else {
        monthly.winterSales = monthly.operatingIncome12Monthly;
      }

      if (monthly.lastReportMonth <= 3 && stockData.forecastMonthlyStockData) {
        monthly.springProductionCost =
          stockData.forecastMonthlyStockData.productionCost3Monthly;
      } else {
        monthly.springProductionCost = monthly.productionCost3Monthly;
      }
      if (monthly.lastReportMonth <= 6 && stockData.forecastMonthlyStockData) {
        monthly.summerProductionCost =
          stockData.forecastMonthlyStockData.productionCost6Monthly;
      } else {
        monthly.summerProductionCost = monthly.productionCost6Monthly;
      }
      if (monthly.lastReportMonth <= 9 && stockData.forecastMonthlyStockData) {
        monthly.autumnProductionCost =
          stockData.forecastMonthlyStockData.productionCost9Monthly;
      } else {
        monthly.autumnProductionCost = monthly.productionCost9Monthly;
      }
      if (monthly.lastReportMonth <= 12 && stockData.forecastMonthlyStockData) {
        monthly.winterProductionCost =
          stockData.forecastMonthlyStockData.productionCost12Monthly;
      } else {
        monthly.winterProductionCost = monthly.productionCost12Monthly;
      }

      if (monthly.lastReportMonth <= 3 && stockData.forecastMonthlyStockData) {
        monthly.springNetProfit =
          stockData.forecastMonthlyStockData.netProfitAndLoss3Monthly;
      } else {
        monthly.springNetProfit = monthly.netProfitAndLoss3Monthly;
      }
      if (monthly.lastReportMonth <= 6 && stockData.forecastMonthlyStockData) {
        monthly.summerNetProfit =
          stockData.forecastMonthlyStockData.netProfitAndLoss6Monthly;
      } else {
        monthly.summerNetProfit = monthly.netProfitAndLoss6Monthly;
      }
      if (monthly.lastReportMonth <= 9 && stockData.forecastMonthlyStockData) {
        monthly.autumnNetProfit =
          stockData.forecastMonthlyStockData.netProfitAndLoss9Monthly;
      } else {
        monthly.autumnNetProfit = monthly.netProfitAndLoss9Monthly;
      }
      if (monthly.lastReportMonth <= 12 && stockData.forecastMonthlyStockData) {
        monthly.winterNetProfit =
          stockData.forecastMonthlyStockData.netProfitAndLoss12Monthly;
      } else {
        monthly.winterNetProfit = monthly.netProfitAndLoss12Monthly;
      }

      if (monthly.lastReportMonth <= 3 && stockData.forecastMonthlyStockData) {
        monthly.springSeasonSale =
          stockData.forecastMonthlyStockData.operatingIncomeFirstSeason;
      } else {
        monthly.springSeasonSale = monthly.operatingIncomeFirstSeason;
      }
      if (monthly.lastReportMonth <= 6 && stockData.forecastMonthlyStockData) {
        monthly.summerSeasonSale =
          stockData.forecastMonthlyStockData.operatingIncomeSecondSeason;
      } else {
        monthly.summerSeasonSale = monthly.operatingIncomeSecondSeason;
      }
      if (monthly.lastReportMonth <= 9 && stockData.forecastMonthlyStockData) {
        monthly.autumnSeasonSale =
          stockData.forecastMonthlyStockData.operatingIncomeThirdSeason;
      } else {
        monthly.autumnSeasonSale = monthly.operatingIncomeThirdSeason;
      }
      if (monthly.lastReportMonth <= 12 && stockData.forecastMonthlyStockData) {
        monthly.winterSeasonSale =
          stockData.forecastMonthlyStockData.operatingIncomeFourthSeason;
      } else {
        monthly.winterSeasonSale = monthly.operatingIncomeFourthSeason;
      }

      if (monthly.lastReportMonth <= 3) {
        monthly.springSeasonalProductionCost = 0;
      } else {
        monthly.springSeasonalProductionCost =
          monthly.productionCostFirstSeason;
      }
      if (monthly.lastReportMonth <= 6) {
        monthly.summerSeasonalProductionCost = 0;
      } else {
        monthly.summerSeasonalProductionCost =
          monthly.productionCostSecondSeason;
      }
      if (monthly.lastReportMonth <= 9) {
        monthly.autumnSeasonalProductionCost = 0;
      } else {
        monthly.autumnSeasonalProductionCost =
          monthly.productionCostThirdSeason;
      }
      if (monthly.lastReportMonth <= 12) {
        monthly.winterSeasonalProductionCost = 0;
      } else {
        monthly.winterSeasonalProductionCost =
          monthly.productionCostFourthSeason;
      }

      if (monthly.lastReportMonth <= 3 && stockData.forecastMonthlyStockData) {
        monthly.springNetProfitAndLossForSeason =
          stockData.forecastMonthlyStockData.netProfitAndLossFirstSeason;
      } else {
        monthly.springNetProfitAndLossForSeason =
          monthly.netProfitAndLossFirstSeason;
      }
      if (monthly.lastReportMonth <= 6 && stockData.forecastMonthlyStockData) {
        monthly.summerNetProfitAndLossForSeason =
          stockData.forecastMonthlyStockData.netProfitAndLossSecondSeason;
      } else {
        monthly.summerNetProfitAndLossForSeason =
          monthly.netProfitAndLossSecondSeason;
      }
      if (monthly.lastReportMonth <= 9 && stockData.forecastMonthlyStockData) {
        monthly.autumnNetProfitAndLossForSeason =
          stockData.forecastMonthlyStockData.netProfitAndLossThirdSeason;
      } else {
        monthly.autumnNetProfitAndLossForSeason =
          monthly.netProfitAndLossThirdSeason;
      }
      if (monthly.lastReportMonth <= 12 && stockData.forecastMonthlyStockData) {
        monthly.winterNetProfitAndLossForSeason =
          stockData.forecastMonthlyStockData.netProfitAndLossFourthSeason;
      } else {
        monthly.winterNetProfitAndLossForSeason =
          monthly.netProfitAndLossFourthSeason;
      }

      monthly.springSeasonalProduction = 1234;
      monthly.springCostOfProductionSales = 1234;
      if (monthly.lastReportMonth <= 12 && stockData.forecastMonthlyStockData) {
        monthly.springNetProfitMargin =
          stockData.forecastMonthlyStockData.netProfitMarginFirstSeason * 100;
      } else {
        monthly.springNetProfitMargin =
          monthly.netProfitMarginFirstSeason * 100;
      }
      if (monthly.lastReportMonth <= 12 && stockData.forecastMonthlyStockData) {
        monthly.summerNetProfitMargin =
          stockData.forecastMonthlyStockData.netProfitMarginSecondSeason * 100;
      } else {
        monthly.summerNetProfitMargin =
          monthly.netProfitMarginSecondSeason * 100;
      }
      if (monthly.lastReportMonth <= 12 && stockData.forecastMonthlyStockData) {
        monthly.autumnNetProfitMargin =
          stockData.forecastMonthlyStockData.netProfitMarginThirdSeason * 100;
      } else {
        monthly.autumnNetProfitMargin =
          monthly.netProfitMarginThirdSeason * 100;
      }
      if (monthly.lastReportMonth <= 12 && stockData.forecastMonthlyStockData) {
        monthly.winterNetProfitMargin =
          stockData.forecastMonthlyStockData.netProfitMarginFourthSeason * 100;
      } else {
        monthly.winterNetProfitMargin =
          monthly.netProfitMarginFourthSeason * 100;
      }

      if (
        this.currentYear === monthly.year &&
        stockData.forecastMonthlyStockData
      ) {
        monthly.netProfitMargin =
          stockData.forecastMonthlyStockData.yearlyNetProfitMargin * 100;
      } else {
        monthly.netProfitMargin = monthly.yearlyNetProfitMargin * 100;
      }
    });
  }
}
