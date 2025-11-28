import { JsonObject, JsonProperty } from 'json2typescript';
import Datamodel from './base/datamodel';
import FareStructureDetailDM from './fareStructureItemDM';
import FareStructureItemConverter from './convertors/fareStructureItemConverter';
import FareStructureItemDM from './fareStructureItemDM';

@JsonObject('FareStructureDetailsDM')
export class FareStructureDetailsDM {
  @JsonProperty('FareStructureItemId', FareStructureItemConverter, true)
  fareStructureItem: FareStructureItemDM | undefined = undefined;
  @JsonProperty('Price', Number, true) price = 0;
  @JsonProperty('FareStructureItemId', Number, true) fareStructureItemId = 0;
}

@JsonObject('FareStructureDM')
export default class FareStructureDM extends Datamodel {
  @JsonProperty('FareStructureId', Number, true) override id: number = 0;
  @JsonProperty('FareStructureId', Number, true) fareStructureId: number = 0;
  @JsonProperty('Title', String, true) title: string = '';
  @JsonProperty('FareStructureDetails', [FareStructureDetailsDM], true)
  fareStructureDetails: FareStructureDetailsDM[] = [];
}
