import { Injectable } from '@angular/core';
import { isEmpty } from '../../utils/object';

import { FreightRuleDS } from '../dataStore/freightRuleDS';

import FreightRuleDM from '../dataModels/freightRuleDM';

@Injectable({
  providedIn: 'root',
})
export class FreightRuleCS {
  get itemsWatch() {
    return this.freightRuleDS.itemsWatch;
  }

  get items() {
    return this.freightRuleDS.items;
  }

  constructor(private freightRuleDS: FreightRuleDS) {
    this.onInitialization();
  }

  async onInitialization() {
    this.freightRuleDS.itemsWatch.subscribe((items) => {
      //
    });
  }

  async add(freightRule: FreightRuleDM) {
    return await this.freightRuleDS.add(freightRule);
  }

  async edit(freightRule: FreightRuleDM) {
    return await this.freightRuleDS.edit(freightRule);
  }

  async delete(freightRule: FreightRuleDM) {
    return await this.freightRuleDS.delete(freightRule);
  }

  async doLoad(force: boolean) {
    if (force || isEmpty(this.items)) {
      return await this.freightRuleDS.doLoad(true);
    } else {
      return this.items;
    }
  }
}
