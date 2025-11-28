import { JsonObject, JsonProperty } from 'json2typescript';
import Datamodel from './base/datamodel';

@JsonObject('CustomReportParameterDM')
export default class CustomReportParameterDM extends Datamodel {
  @JsonProperty('CustomReportParameterID', Number, true) override id = 0;
  @JsonProperty('CustomReportParameterID', Number, true)
  customReportParameterId = 0;
  @JsonProperty('CustomReportCode', Number, true) customReportCode = Number;
  @JsonProperty('ParameterName', String, true) parameterName: string = '';
  @JsonProperty('ParameterTitle_EN', String, true) parameterTitleEn: string =
    '';
  @JsonProperty('ParameterTitle_FA', String, true) parameterTitleFa: string =
    '';
  @JsonProperty('ParameterIndex', Number, true) parameterIndex = 0;
  @JsonProperty('ParameterType', String, true) parameterType: string = '';
  @JsonProperty('DefaultValue', String, true) defaultValue: string = '';
}
