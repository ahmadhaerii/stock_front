import { JsonObject, JsonProperty } from 'json2typescript';
import Datamodel from './base/datamodel';
import DollarPriceDM from './dollarPriceDM';

@JsonObject('YearlyStockDataDM')
export default class YearlyStockDataDM extends Datamodel {
  @JsonProperty('id', Number, true) override id = 0;
  @JsonProperty('stock_id', Number, true) stockId = 0;
  @JsonProperty('year', String, true) year = '';
  @JsonProperty('operating_income', Number, true) operatingIncome = 0;
  @JsonProperty('net_profit_and_loss', Number, true) netProfitAndLoss =  0;
  @JsonProperty('cost_of_production_to_sales', Number, true) costOfProductionToSales = 0;
  @JsonProperty('dollar_price_id', Number, true) dollarPriceId = 0;
  @JsonProperty('operating_income_in_dollars', Number, true) operatingIncomeInDollars = 0;
  @JsonProperty('production_cost_in_dollars', Number, true) productionCostInDollars = 0;
  @JsonProperty('net_profit_and_loss_in_dollars', Number, true) netProfitAndLossInDollars = 0;
  @JsonProperty('production_cost', Number, true) productionCost = 0;
  @JsonProperty('net_profit_margin', Number, true) netProfitMargin = 0;
  @JsonProperty('dollar_changes', Number, true) dollarChanges = 0;
  @JsonProperty('operating_income_in_dollars_changes', Number, true) operatingIncomeInDollarsChanges = 0;
  @JsonProperty('production_cost_in_dollars_changes', Number, true) productionCostInDollarsChanges = 0;
  @JsonProperty('net_profit_and_loss_in_dollars_changes', Number, true) netProfitAndLossInDollarsChanges = 0;
  @JsonProperty('leverage', Number, true) leverage = 0;
  @JsonProperty('dollar_price', DollarPriceDM, true) dollarPrice :DollarPriceDM | undefined = undefined;
} 