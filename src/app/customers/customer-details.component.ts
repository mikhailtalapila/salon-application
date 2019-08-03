import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ICustomer } from './models/customer';

@Component({
  selector: 'salon-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {
  customer: ICustomer;
  constructor(private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    this.customer = this._route.snapshot.data['customer'];
    console.log('Customer details: ', this.customer);
  }

}
