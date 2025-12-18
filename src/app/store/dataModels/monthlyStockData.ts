import { JsonObject, JsonProperty } from 'json2typescript';
import Datamodel from './base/datamodel';

@JsonObject('MonthlyStockDataDM')
export default class MonthlyStockDataDM extends Datamodel {
  @JsonProperty('id', Number, true) override id = 0;
  @JsonProperty('stock_id', Number, true) stockId = 0;
  @JsonProperty('year', String, true) year = '';
  @JsonProperty('m1', Number, true) m1 = 0;
  @JsonProperty('m2', Number, true) m2 = 0;
  @JsonProperty('m3', Number, true) m3 = 0;
  @JsonProperty('m4', Number, true) m4 = 0;
  @JsonProperty('m5', Number, true) m5 = 0;
  @JsonProperty('m6', Number, true) m6 = 0;
  @JsonProperty('m7', Number, true) m7 = 0;
  @JsonProperty('m8', Number, true) m8 = 0;
  @JsonProperty('m9', Number, true) m9 = 0;
  @JsonProperty('m10', Number, true) m10 = 0;
  @JsonProperty('m11', Number, true) m11 = 0;
  @JsonProperty('m12', Number, true) m12 = 0;

  @JsonProperty('operating_income_3_monthly', Number, true) operatingIncome3Monthly = 0;
  @JsonProperty('operating_income_6_monthly', Number, true) operatingIncome6Monthly = 0;
  @JsonProperty('operating_income_9_monthly', Number, true) operatingIncome9Monthly = 0;
  @JsonProperty('operating_income_12_monthly', Number, true) operatingIncome12Monthly = 0;

  @JsonProperty('net_profit_and_loss_3_monthly', Number, true) netProfitAndLoss3Monthly = 0;
  @JsonProperty('net_profit_and_loss_6_monthly', Number, true) netProfitAndLoss6Monthly = 0;
  @JsonProperty('net_profit_and_loss_9_monthly', Number, true) netProfitAndLoss9Monthly = 0;
  @JsonProperty('net_profit_and_loss_12_monthly', Number, true) netProfitAndLoss12Monthly = 0;

  @JsonProperty('production_cost_3_monthly', Number, true) productionCost3Monthly = 0;
  @JsonProperty('production_cost_6_monthly', Number, true) productionCost6Monthly = 0;
  @JsonProperty('production_cost_9_monthly', Number, true) productionCost9Monthly = 0;
  @JsonProperty('production_cost_12_monthly', Number, true) productionCost12Monthly = 0;

  

  get lastReportMonth(){
    // todo if year is current year and this if's
    if (this.m1 === 0) {
      return 1 ;
    }else if (this.m2 === 0) {
      return 2 ;
    }else if (this.m3 === 0) {
      return 3 ;
    }else if (this.m4 === 0) {
      return 4 ;
    }else if (this.m5 === 0) {
      return 5 ;
    }else if (this.m6 === 0) {
      return 6 ;
    }else if (this.m7 === 0) {
      return 7 ;
    }else if (this.m8 === 0) {
      return 8 ;
    }else if (this.m9 === 0) {
      return 9 ;
    }else if (this.m10 === 0) {
      return 10 ;
    }else if (this.m11 === 0) {
      return 11 ;
    }else if (this.m12 === 0) {
      return 12 ;
    } else{
      return 13 ;
    }
  }


  get operatingIncomeFirstSeason(){
    return this.operatingIncome3Monthly ;
  }
  get netProfitAndLossFirstSeason(){
    return this.netProfitAndLoss3Monthly ;
  }
  get productionCostFirstSeason(){
    return this.productionCost3Monthly ;
  }
 

  get operatingIncomeSecondSeason(){
    return this.operatingIncome6Monthly  - this.operatingIncome3Monthly ;
  }
  get netProfitAndLossSecondSeason(){
    return   this.netProfitAndLoss6Monthly  - this.netProfitAndLoss3Monthly ;
  }
  get productionCostSecondSeason(){
    return this.productionCost6Monthly - this.productionCost3Monthly ;
  }
  
  get operatingIncomeThirdSeason(){
    return this.operatingIncome9Monthly - this.operatingIncome6Monthly ;
  }
  get netProfitAndLossThirdSeason(){
    return  this.netProfitAndLoss9Monthly  - this.netProfitAndLoss6Monthly ; 
  }
  get productionCostThirdSeason(){
    return this.productionCost9Monthly - this.productionCost6Monthly ;
  }
  
  get operatingIncomeFourthSeason(){
    return this.operatingIncome12Monthly - this.operatingIncome9Monthly ;
  }
  get netProfitAndLossFourthSeason(){
    return this.netProfitAndLoss12Monthly  - this.netProfitAndLoss9Monthly ; 
  }
  get productionCostFourthSeason(){
    return this.productionCost12Monthly - this.productionCost9Monthly ; 
  }
 
  
}