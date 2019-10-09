import { Component, OnInit } from '@angular/core';
import { IGiftCardTransaction } from './models/gift-card-transaction';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'salon-gift-card-transactions-list',
  templateUrl: './gift-card-transactions-list.component.html',
  styleUrls: ['./gift-card-transactions-list.component.css']
})
export class GiftCardTransactionsListComponent implements OnInit {
  giftCardTransactions: IGiftCardTransaction[] = [];
  constructor(private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    this.giftCardTransactions = this._route.snapshot.data['giftcardtranactions'];
    console.log('transactions: ', this.giftCardTransactions);
  }

}
