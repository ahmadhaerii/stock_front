import { JsonObject, JsonProperty } from 'json2typescript';
import Datamodel from './base/datamodel';
import CityConverter from './convertors/cityConverter';
import CityDM from './cityDM';
import VehicleTypeConverter from './convertors/vehicleTypeConverter';
import VehicleTypeDM from './vehicleTypeDM';
import OfficeConverter from './convertors/officeConverter';
import OfficeDM from './officeDM';

@JsonObject('RouteDM')
export default class RouteDM extends Datamodel {
  @JsonProperty('RouteID', Number, true) override id = 0;
  @JsonProperty('RouteID', Number, true) routeId = 0;
  @JsonProperty('OriginCityCode', CityConverter, true) originCity:
    | CityDM
    | undefined = undefined;
  @JsonProperty('OriginOfficeCode', OfficeConverter, true) originOffice:
    | OfficeDM
    | undefined = undefined;
  @JsonProperty('DestinationCityCode', CityConverter, true) destinationCity:
    | CityDM
    | undefined = undefined;
  @JsonProperty('DestinationOfficeCode', OfficeConverter, true)
  destinationOffice: OfficeDM | undefined = undefined;
  @JsonProperty('VehicleTypeCode', VehicleTypeConverter, true) vehicleType:
    | VehicleTypeDM
    | undefined = undefined;
  @JsonProperty('DurationMinutes', Number, true) durationMinutes = 0;
  @JsonProperty('DistanceKM', Number, true) distanceKM = 0;
  @JsonProperty('AvailabilityGuarantiedTime_Minutes', Number, true)
  availabilityGuarantiedTimeMinutes = 0;
  @JsonProperty('Active', Boolean, true) active = false;
  @JsonProperty('ExtraInfo', String, true) extraInfo = '';
  @JsonProperty('History', String, true) history = '';
}
