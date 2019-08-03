import { Component, OnInit } from '@angular/core';
import { ICustomer } from './models/customer';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'salon-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customers: ICustomer[] = [];
  constructor(private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    this.customers = this._route.snapshot.data['customers'];
    console.log('Customers: ', this.customers);
  }

}
