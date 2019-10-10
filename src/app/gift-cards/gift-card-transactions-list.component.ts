import { Component, OnInit, ViewChild } from '@angular/core';
import { IGiftCardTransaction } from './models/gift-card-transaction';
import { ActivatedRoute, Router } from '@angular/router';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

@Component({
  selector: 'salon-gift-card-transactions-list',
  templateUrl: './gift-card-transactions-list.component.html',
  styleUrls: ['./gift-card-transactions-list.component.css']
})
export class GiftCardTransactionsListComponent implements OnInit {
  giftCardTransactions: IGiftCardTransaction[] = [];
  displayedColumns: string[] = ['giftCardId' , 'amountUsed', 'transactionDate', 'transactionNote'];
  dataSource: MatTableDataSource<IGiftCardTransaction>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    this.giftCardTransactions = this._route.snapshot.data['giftcardtranactions'];
    this.dataSource = new MatTableDataSource(this.giftCardTransactions);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  navigateToGiftCardList(): void {
    this._router.navigate(['gift-cards', 'gift-card-list']);
  }
}
