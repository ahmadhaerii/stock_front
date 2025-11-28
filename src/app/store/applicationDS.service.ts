import { Injectable, inject } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserLanguage } from '../services/label-manager.service';
@Injectable({
  providedIn: 'root',
})
export class ApplicationDS {
  private _router = inject(Router);
  public _language: UserLanguage = UserLanguage.FA;

  constructor() {}

  get language() {
    return this._language;
  }

  set language(language: UserLanguage) {
    this._language = language;
  }
}
