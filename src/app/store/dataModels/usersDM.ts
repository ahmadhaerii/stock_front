import { JsonObject, JsonProperty } from 'json2typescript';
import Datamodel from './base/datamodel';
import OfficeConverter from './convertors/officeConverter';
import OfficeDM from './officeDM';

@JsonObject('UsersDM')
export default class UsersDM extends Datamodel {
  @JsonProperty('UserID', String, true) override id = '';
  @JsonProperty('UserID', String, true) userId = '';
  @JsonProperty('OfficeCode', OfficeConverter, true) office:OfficeDM | undefined=undefined;
  @JsonProperty('Passwd', String, true) password = '';
  @JsonProperty('FirstName', String, true) firstName = '';
  @JsonProperty('LastName', String, true) lastName = '';
  @JsonProperty('EMail', String, true) email = '';
  @JsonProperty('CellPhone', String, true) cellPhone = '';
  @JsonProperty('Roles', String, true) roles = '';
  @JsonProperty('Enabled', Boolean, true) enabled = false;
  @JsonProperty('ExpireDate', String, true) expireDate = '';
  @JsonProperty('WorkingTimeStart', String, true) workingTimeStart = '';
  @JsonProperty('WorkingTimeUntil', String, true) workingTimeUntil = '';
  @JsonProperty('AllowedChannels', String, true) allowedChannels = '';
}
