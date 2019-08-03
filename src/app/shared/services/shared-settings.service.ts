import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedSettingsService {

  private _applicationName: String = 'Signature Nails';
  get applicationName(): String {
    return this._applicationName;
  }
  constructor() { }
}
