import { JsonConverter, JsonCustomConvert } from 'json2typescript';
import { AppInjector } from '../../../app.module';
import FareStructureItemDM from '../fareStructureItemDM';
import { JsonParser } from 'src/app/utils/jsonparser';
import { FareStructureItemList } from 'src/app/utils/constants';

@JsonConverter
export default class FareStructureItemConverter
  implements JsonCustomConvert<FareStructureItemDM>
{
  serialize(data: FareStructureItemDM): any {
    return data;
  }
  deserialize(data: number): FareStructureItemDM {
    const fareStructureItems: FareStructureItemDM[] =
      JsonParser.deserializeArray(FareStructureItemList,FareStructureItemDM);
    const index = fareStructureItems.findIndex(
      (fareStructureItem) => fareStructureItem.id === data
    );
    return fareStructureItems[index];
  }
}
