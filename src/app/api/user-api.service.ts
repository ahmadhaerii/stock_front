import { Injectable } from '@angular/core';
import UserDM from '../store/dataModels/userDM';
import { HttpRequestService } from '../services/http-request.service';

@Injectable({
  providedIn: 'root',
})
export class UserApiService {
  users: UserDM[] = [];
  constructor(private httpRequest: HttpRequestService) {}
}
