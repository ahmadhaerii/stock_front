import { JsonObject, JsonProperty } from 'json2typescript';
import Datamodel from './base/datamodel';

@JsonObject('FareStructureItemDM')
export default class FareStructureItemDM extends Datamodel {
  @JsonProperty('FareStructureItemId', Number, true) override id: number = 0;
  @JsonProperty('FareStructureItemId', Number, true)
  fareStructureItemId: number = 0;
  @JsonProperty('Title', String, true) title: string = '';
}
