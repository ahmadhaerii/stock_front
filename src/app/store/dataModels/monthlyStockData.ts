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
  @JsonProperty('seals-3-monthly', Number, true) seals3Monthly = 0;
  @JsonProperty('seals-6-monthly', Number, true) seals6Monthly = 0;
  @JsonProperty('seals-9-monthly', Number, true) seals9Monthly = 0;
  @JsonProperty('seals-12-monthly', Number, true) seals12Monthly = 0;
  @JsonProperty('net-profit-3-monthly', Number, true) netProfit3Monthly = 0;
  @JsonProperty('net-profit-6-monthly', Number, true) netProfit6Monthly = 0;
  @JsonProperty('net-profit-9-monthly', Number, true) netProfit9Monthly = 0;
  @JsonProperty('net-profit-12-monthly', Number, true) netProfit12Monthly = 0;
}