import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { IGiftCardTransaction } from '../../models/gift-card-transaction';
import { Observable } from 'rxjs';
import { GiftCardDataService } from '../gift-card-data.service';

@Injectable({
  providedIn: 'root'
})
export class GiftCardTransactionsResolverService implements Resolve<IGiftCardTransaction[]> {


  resolve(route: ActivatedRouteSnapshot): Observable<IGiftCardTransaction[]> {
    return this._giftCardDataService.getGiftCardTransactions(+route.params['id']);
  }

  constructor(private _giftCardDataService: GiftCardDataService) {
   }
}
