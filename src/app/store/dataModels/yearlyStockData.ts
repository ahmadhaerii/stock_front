import { JsonObject, JsonProperty } from 'json2typescript';
import Datamodel from './base/datamodel';
import DollarPriceDM from './dollarPriceDM';

@JsonObject('YearlyStockDataDM')
export default class YearlyStockDataDM extends Datamodel {
  @JsonProperty('id', Number, true) override id = 0;
  @JsonProperty('stock_id', Number, true) stockId = 0;
  @JsonProperty('year', String, true) year = '';
  @JsonProperty('operating-income', Number, true) operatingIncome = 0;
  @JsonProperty('net-profit-and-loss', Number, true) netProfitAndLoss =  0;
  @JsonProperty('cost-of-production-to-sales', Number, true) costOfProductionToSales = 0;
  @JsonProperty('dollar_price', DollarPriceDM, true) dollarPrice :DollarPriceDM | undefined = undefined;
}
  