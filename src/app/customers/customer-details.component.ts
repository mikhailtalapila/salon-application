import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ICustomer } from './models/customer';
import { CustomerDataService } from './services/customer-data.service';

@Component({
  selector: 'salon-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {
  customer: ICustomer;
  errorMessage: string;
  constructor(private _route: ActivatedRoute, private _router: Router, private _customerDataService: CustomerDataService) { }

  ngOnInit() {
    this.customer = this._route.snapshot.data['customer'];
    if (this.customer.gender.id === 0) {
      this.customer.gender = null;
    }
  }
  navigateToCustomersList(): void {
    this._router.navigate(['customers', 'customer-list']);
  }
  updateCustomerInformation(): void {
    this._customerDataService.updateCustomer(this.customer)
      .subscribe(
        () => {
          console.log('Updated customer');
          this._router.navigate(['customers', 'customer-list']);
        }, (error: any) => this.errorMessage = <any>error
      );    
  }

}
