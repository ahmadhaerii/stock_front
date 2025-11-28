import { JsonObject, JsonProperty } from 'json2typescript';
import Datamodel from './base/datamodel';

@JsonObject('DollarPriceDM')
export default class DollarPriceDM extends Datamodel {
  @JsonProperty('id', Number, true) override id = 0;
  @JsonProperty('year', String, true) year = '';
  @JsonProperty('price', Number, true) price =  0;
 
}
 