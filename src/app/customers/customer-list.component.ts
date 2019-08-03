import { Component, OnInit, ViewChild } from '@angular/core';
import { ICustomer } from './models/customer';
import { ActivatedRoute, Router } from '@angular/router';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

@Component({
  selector: 'salon-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customers: ICustomer[] = [];
  displayedColumns: string[] = ['firstName', 'lastName', 'primaryPhoneNumber', 'secondaryPhoneNumber', 'notes'];
  dataSource: MatTableDataSource<ICustomer>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    this.customers = this._route.snapshot.data['customers'];
    this.dataSource = new MatTableDataSource(this.customers);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  viewDetails(customer: ICustomer): void {
    this._router.navigate(['customers','customer-details',customer.id]);
  }
  addNewCustomer(): void {
    this._router.navigate(['customers', 'new-customer']);
  }
}
