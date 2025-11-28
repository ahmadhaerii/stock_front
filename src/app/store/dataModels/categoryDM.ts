import { JsonObject, JsonProperty } from 'json2typescript';
import Datamodel from './base/datamodel';

@JsonObject('CategoryDM')
export default class CategoryDM extends Datamodel {
  @JsonProperty('id', Number, true) override id = 0;
  @JsonProperty('name', String, true) name = '';
  @JsonProperty('description', String, true) description = '';
 
}
 