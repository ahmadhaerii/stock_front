import { Injectable } from '@angular/core';
import BaseItemDS from './base/baseItemDS';
import { isEmpty } from '../../utils/object';
import RouteDM from '../dataModels/routeDM';
import { RouteApiService } from 'src/app/api/route-api.service';

@Injectable({
  providedIn: 'root',
})
export class RouteDS extends BaseItemDS<RouteDM> {
  constructor(private routeApi: RouteApiService) {
    super();
    this.onInitialization();
  }

  async onInitialization() {
    this.itemsWatch.subscribe((items) => {
      //
    });
  }

  async add(route: RouteDM) {
    const data = await this.routeApi.add(route);
    this.addOrReplaceItem(data);
    return data;
  }

  async edit(route: RouteDM) {
    const data = await this.routeApi.edit(route);
    this.addOrReplaceItem(data);
    return data;
  }

  async delete(route: RouteDM) {
    await this.routeApi.delete(route);
    this.removeItem(route.routeId);
    return 'done';
  }

  async doLoad(force: boolean) {
    if (force || isEmpty(this.items)) {
      const routes = await this.routeApi.RouteList();
      await this.addOrReplaceItems(routes);
      return routes;
    } else {
      return this.items;
    }
  }
}
