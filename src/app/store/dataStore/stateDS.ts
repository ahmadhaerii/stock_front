import { Injectable } from '@angular/core';
import BaseItemDS from './base/baseItemDS';
import { isEmpty } from '../../utils/object';
import StateDM from '../dataModels/stateDM';
import { StateApiService } from 'src/app/api/state-api.service';

@Injectable({
  providedIn: 'root',
})
export class StateDS extends BaseItemDS<StateDM> {
  constructor(private stateApi: StateApiService) {
    super();
    this.onInitialization();
  }

  async onInitialization() {
    this.itemsWatch.subscribe((items) => {
      //
    });
  }

  async add(state: StateDM) {
    const data = await this.stateApi.add(state);
    this.addOrReplaceItem(data);
    return data;
  }

  async edit(state: StateDM) {
    const data = await this.stateApi.edit(state);
    this.addOrReplaceItem(data);
    return data;
  }

  async delete(state: StateDM) {
    await this.stateApi.delete(state);
    this.removeItem(state.countryStateID);
    return 'done';
  }

  async doLoad(force: boolean) {
    if (force || isEmpty(this.items)) {
      const states = await this.stateApi.StateList();
      await this.addOrReplaceItems(states);
      return states;
    } else {
      return this.items;
    }
  }
}
