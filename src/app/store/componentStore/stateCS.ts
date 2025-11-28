import { Injectable } from '@angular/core';
import { isEmpty } from '../../utils/object';
import StateDM from '../dataModels/stateDM';
import { StateDS } from '../dataStore/stateDS';

@Injectable({
  providedIn: 'root',
})
export class StateCS {
  get itemsWatch() {
    return this.stateDS.itemsWatch;
  }

  get items() {
    return this.stateDS.items;
  }

  constructor(private stateDS: StateDS) {
    this.onInitialization();
  }

  async onInitialization() {
    this.stateDS.itemsWatch.subscribe((items) => {
      //
    });
  }

  async add(state: StateDM) {
    return await this.stateDS.add(state);
  }

  async edit(state: StateDM) {
    return await this.stateDS.edit(state);
  }

  async delete(state: StateDM) {
    return await this.stateDS.delete(state);
  }

  async doLoad(force: boolean = false) {
    if (force || isEmpty(this.items)) {
      return await this.stateDS.doLoad(true);
    } else {
      return this.items;
    }
  }
}
