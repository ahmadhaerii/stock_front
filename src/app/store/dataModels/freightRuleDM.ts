import { JsonObject, JsonProperty } from 'json2typescript';
import Datamodel from './base/datamodel';
import CityDM from './cityDM';
import CityConverter from './convertors/cityConverter';
import VehicleTypeConverter from './convertors/vehicleTypeConverter';
import VehicleTypeDM from './vehicleTypeDM';

@JsonObject('FreightRuleDM')
export default class FreightRuleDM extends Datamodel {
  @JsonProperty('FreightRuleID', Number, true) override id = 0;
  @JsonProperty('FreightRuleID', Number, true) freightRuleID = 0;
  @JsonProperty('Origin', CityConverter, true) origin: CityDM | undefined =
    undefined;
  @JsonProperty('Destination', CityConverter, true) destination:
    | CityDM
    | undefined = undefined;
  @JsonProperty('SalesStartDate', String, true) salesStartDate = '';
  @JsonProperty('VehicleTypeCode', VehicleTypeConverter, true) vehicleType:
    | VehicleTypeDM
    | undefined = undefined;
  @JsonProperty('SalesFinishDate', String, true) salesFinishDate = '';
  @JsonProperty('WeightFrom', Number, true) weightFrom = 0;
  @JsonProperty('WeightTo', Number, true) weightTo = 0;
  @JsonProperty('AmountPerKG', Number, true) amountPerKG = 0;
  @JsonProperty('MinimumGuarantiedWeight', Number, true)
  minimumGuarantiedWeight = 0;
  @JsonProperty('CurrencyCode', String, true) currencyCode = '';
  @JsonProperty('Active', Boolean, true) active = false;
}
