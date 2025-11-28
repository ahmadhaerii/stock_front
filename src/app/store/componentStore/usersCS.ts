import { Injectable } from '@angular/core';
import { isEmpty } from '../../utils/object';
import UsersDM from '../dataModels/usersDM';
import { UsersDS } from '../dataStore/usersDS';

@Injectable({
  providedIn: 'root',
})
export class UsersCS {
  get itemsWatch() {
    return this.usersDS.itemsWatch;
  }

  get items() {
    return this.usersDS.items;
  }

  constructor(private usersDS: UsersDS) {
    this.onInitialization();
  }

  async onInitialization() {
    this.usersDS.itemsWatch.subscribe((items) => {
      //
    });
  }

  async add(user: UsersDM) {
    return await this.usersDS.add(user);
  }

  async edit(user: UsersDM) {
    return await this.usersDS.edit(user);
  }

  async delete(user: UsersDM) {
    return await this.usersDS.delete(user);
  }

  async doLoad(force: boolean) {
    if (force || isEmpty(this.items)) {
      return await this.usersDS.doLoad(true);
    } else {
      return this.items;
    }
  }
}
