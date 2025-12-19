import { JsonObject, JsonProperty } from 'json2typescript';
import Datamodel from './base/datamodel';
import CategoryDM from './categoryDM';
import MonthlyStockDataDM from './monthlyStockData';
import YearlyStockDataDM from './yearlyStockData';

@JsonObject('StockDM')
export default class StockDM extends Datamodel {
  @JsonProperty('id', Number, true) override id = 0;
  @JsonProperty('name', String, true) name = '';
  @JsonProperty('tsetmc_link', String, true) tsetmcLink = '';
  @JsonProperty('rahavard_link', String, true) rahavardLink = '';
  @JsonProperty('codal_link', String, true) codalLink = '';
  @JsonProperty('last_price', Number, true) lastPrice = 0;
  @JsonProperty('number_of_shares', Number, true) numberOfShares = 0;
  @JsonProperty('p_e_ttm', Number, true) PETtm = 0;
  @JsonProperty('p_e_forward', Number, true) PEForward = 0;
  @JsonProperty('tsetmc_id', String, true) tsetmcId = '';
  @JsonProperty('last_dp', Number, true) lastDp = 0;
  @JsonProperty('category', CategoryDM, true) category = false;
  @JsonProperty('monthly_stock_data', [MonthlyStockDataDM], true)
  monthlyStockData: MonthlyStockDataDM[] | undefined = undefined;
  @JsonProperty('yearly_stock_data', [YearlyStockDataDM], true)
  yearlyStockData: YearlyStockDataDM[] | undefined = undefined;
}
