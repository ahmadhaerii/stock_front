import { JsonObject, JsonProperty } from 'json2typescript';
import Datamodel from './base/datamodel';

@JsonObject('ForecastPriceDM')
export default class ForecastPriceDM extends Datamodel {
  @JsonProperty('id', Number, true) override id = 0;
  @JsonProperty('eps_forward', Number, true) epsForward = 0;
  @JsonProperty('number_of_shares', Number, true) numberOfShares = 0;
  @JsonProperty('p_e_forward', Number, true) PEForward = 0;
  @JsonProperty('price', Number, true) price = 0;
  @JsonProperty('profit_forward', Number, true) profitForward = 0;
  @JsonProperty('stock_id', Number, true) stockId = 0;
  @JsonProperty('year', Number, true) year = 0;
  
}