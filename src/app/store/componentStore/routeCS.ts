import { Injectable } from '@angular/core';
import { isEmpty } from '../../utils/object';
import RouteDM from '../dataModels/routeDM';
import { RouteDS } from '../dataStore/routeDs';

@Injectable({
  providedIn: 'root',
})
export class RouteCS {
  get itemsWatch() {
    return this.routeDS.itemsWatch;
  }

  get items() {
    return this.routeDS.items;
  }

  constructor(private routeDS: RouteDS) {
    this.onInitialization();
  }

  async onInitialization() {
    this.routeDS.itemsWatch.subscribe((items) => {
      //
    });
  }

  async add(route: RouteDM) {
    return await this.routeDS.add(route);
  }

  async edit(route: RouteDM) {
    return await this.routeDS.edit(route);
  }

  async delete(route: RouteDM) {
    return await this.routeDS.delete(route);
  }

  async doLoad(force: boolean) {
    if (force || isEmpty(this.items)) {
      return await this.routeDS.doLoad(true);
    } else {
      return this.items;
    }
  }
}
