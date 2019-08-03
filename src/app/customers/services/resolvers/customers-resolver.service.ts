import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { ICustomer } from '../../models/customer';
import { CustomerDataService } from '../customer-data.service';

@Injectable({
  providedIn: 'root'
})
export class CustomersResolverService implements Resolve<ICustomer[]>{

  constructor(private _customerDataService: CustomerDataService) { }
  resolve(route: ActivatedRouteSnapshot) {
    return this._customerDataService.getCustomers();
  }
}
