import { Injectable } from '@angular/core';
import { IGiftCardTransaction } from '../../models/gift-card-transaction';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { GiftCardDataService } from '../gift-card-data.service';

@Injectable({
  providedIn: 'root'
})
export class GiftCardTransactionsByGiftCardResolverService implements Resolve<IGiftCardTransaction[]> {

  resolve(route: ActivatedRouteSnapshot): Observable<IGiftCardTransaction[]> {
    return this._giftCardDataService.getGiftCardTransactionsByGiftCardId(+route.params['id']);
  }

  constructor(private _giftCardDataService: GiftCardDataService) { }
}
