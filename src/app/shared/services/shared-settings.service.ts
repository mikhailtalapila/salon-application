import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedSettingsService {

  private _applicationName: String = 'Signature Nails';
  private _applicationAPIBaseUrl: string;

  get applicationAPIBaseUrl(): string {
    return this._applicationAPIBaseUrl;
  }
  get applicationName(): String {
    return this._applicationName;
  }
  constructor() { 
    this._applicationAPIBaseUrl = 'http://localhost:4202/api/v1/';
    // this._applicationAPIBaseUrl = 'https://localhost:44380/api/v1/';
  }
}
