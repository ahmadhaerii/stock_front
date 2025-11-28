import { Injectable } from '@angular/core';
import BaseItemDS from './base/baseItemDS';
import { isEmpty } from '../../utils/object';
import UsersDM from '../dataModels/usersDM';
import { UsersApiService } from 'src/app/api/users-api.service';

@Injectable({
  providedIn: 'root',
})
export class UsersDS extends BaseItemDS<UsersDM> {
  constructor(private usersApi: UsersApiService) {
    super();
    this.onInitialization();
  }

  async onInitialization() {
    this.itemsWatch.subscribe((items) => {
      //
    });
  }

  async add(user: UsersDM) {
    const data = await this.usersApi.add(user);
    this.addOrReplaceItem(data);
    return data;
  }

  async edit(user: UsersDM) {
    const data = await this.usersApi.edit(user);
    this.addOrReplaceItem(data);
    return data;
  }

  async delete(user: UsersDM) {
    await this.usersApi.delete(user);
    this.removeItem(user.userId);
    return 'done';
  }

  async doLoad(force: boolean) {
    if (force || isEmpty(this.items)) {
      const users = await this.usersApi.UsersList();
      await this.addOrReplaceItems(users);
      return users;
    } else {
      return this.items;
    }
  }
}
