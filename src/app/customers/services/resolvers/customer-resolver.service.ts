import { Injectable } from '@angular/core';
import { ICustomer } from '../../models/customer';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { CustomerDataService } from '../customer-data.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerResolverService implements Resolve<ICustomer> {

  constructor(private _customerDataService: CustomerDataService) { }
  resolve(route: ActivatedRouteSnapshot) {
    return this._customerDataService.getCustomer(+route.params['id']);
  }
}
