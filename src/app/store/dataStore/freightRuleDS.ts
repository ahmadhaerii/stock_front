import { Injectable } from '@angular/core';
import { FreightRuleApiService } from '../../api/freight-rule-api.service';
import BaseItemDS from './base/baseItemDS';
import FreightRuleDM from '../dataModels/freightRuleDM';
import { isEmpty } from '../../utils/object';

@Injectable({ providedIn: 'root' })
export class FreightRuleDS extends BaseItemDS<FreightRuleDM> {
  constructor(private freightRuleApiService: FreightRuleApiService) {
    super();
    this.onInitialization();
  }

  async onInitialization() {
    this.itemsWatch.subscribe((items) => {
      //
    });
  }

  async add(freightRule: FreightRuleDM) {
    const data = await this.freightRuleApiService.add(freightRule);
    this.addOrReplaceItem(data);
    return data;
  }

  async edit(freightRule: FreightRuleDM) {
    const data = await this.freightRuleApiService.edit(freightRule);
    this.addOrReplaceItem(data);
    return data;
  }

  async delete(freightRule: FreightRuleDM) {
    await this.freightRuleApiService.delete(freightRule);
    this.removeItem(freightRule.freightRuleID);
    return 'done';
  }

  async doLoad(force: boolean) {
    if (force || isEmpty(this.items)) {
      const freightRules = await this.freightRuleApiService.FreightRulesList();

      await this.addOrReplaceItems(freightRules);
      return freightRules;
    } else {
      return this.items;
    }
  }
}
