import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedSettingsService {

  private _applicationName: String = 'Salon Application';
  get applicationName(): String {
    return this._applicationName;
  }
  constructor() { }
}
