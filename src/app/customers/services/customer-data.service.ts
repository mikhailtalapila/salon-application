import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { ICustomer } from '../models/customer';
import { tap, catchError } from 'rxjs/operators';
import { SharedSettingsService } from 'src/app/shared/services/shared-settings.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerDataService {
  private _customersURL: string;

  constructor(private _http: HttpClient, private _settings: SharedSettingsService) { 
    this._customersURL = this._settings.applicationAPIBaseUrl + 'customer';
  }
  getCustomers(): Observable<ICustomer[]> {
    return this._http.get<ICustomer[]>(this._customersURL).pipe(tap(), catchError(this.handleError));
  }
  getCustomer(customerId: number): Observable<ICustomer> {
    return this._http.get<ICustomer>(this._customersURL + '/' + customerId).pipe(tap(), catchError(this.handleError));
  }
  addCustomer(customer: ICustomer): Observable<ICustomer> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });    
    return this._http.post<ICustomer>(this._customersURL, customer, { headers: headers })
      .pipe(
        tap(data => console.log('added customer: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
  } 
  updateCustomer(customer: ICustomer): Observable<ICustomer> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });   
    return this._http.put<ICustomer>(this._customersURL, customer, { headers: headers})
      .pipe(
        tap(data => console.log('updated customer: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
  }
  private handleError(err) {
    let errorMessage = '';
    if(err.error instanceof Error) {
      errorMessage = 'An error has occurred';
    } else {
      errorMessage = 'Server returned an error';
    }
    return throwError(errorMessage);
  }
}
