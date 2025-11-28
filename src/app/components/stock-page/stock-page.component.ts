import { Component } from '@angular/core';
import { COLUMNS_TYPES } from 'nira-falcon';
import { ColumnsSchema } from 'nira-falcon/lib/core-table/core-table/core-table.type';
import { BehaviorSubject } from 'rxjs';
import { StockCS } from 'src/app/store/componentStore/stockCS';
import StockDM from 'src/app/store/dataModels/stockDM';

@Component({
  selector: 'app-stock-page',
  templateUrl: './stock-page.component.html',
  styleUrls: ['./stock-page.component.scss']
})
export class StockPageComponent {
  loading = false ;
  
    stockData = new BehaviorSubject<StockDM[]>([]);
  columnsSchema: ColumnsSchema[] = [
    // {
    //   key: 'fareStructureItem',
    //   type: COLUMNS_TYPES.SELECTOR,
    //   label: this.labels.fareStructureItemName,
    //   data: {
    //     key: 'title',
    //   },
    // },
    // {
    //   key: 'price',
    //   type: COLUMNS_TYPES.TEXT,
    //   label: this.labels.fareStructureItemPrice,
    // },
    // {
    //   key: 'action',
    //   type: COLUMNS_TYPES.ACTION_BUTTONS,
    //   label: this.labels.edit,

    //   data: [
    //     {
    //       key: 'fareStructureItemId',
    //       component: FareStructureFormComponent,
    //       title: '',
    //     },
    //   ],
    // },
  ];

  constructor(
    private stockCS: StockCS
  ) {}

    async ngOnInit() {
      this.loading = true
      const data = await this.stockCS.getStock(1);
      console.log(data);
        // this.stockData.next(data);
      this.loading = false
  }
}
