import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { IGiftCard } from '../../models/gift-card';
import { Observable } from 'rxjs';
import { GiftCardDataService } from '../gift-card-data.service';

@Injectable({
  providedIn: 'root'
})
export class GiftCardsResolverService implements Resolve<IGiftCard[]> {
  resolve(route: ActivatedRouteSnapshot): Observable<IGiftCard[]> {
    return this._giftCardDataService.getGiftCards();
  }

  constructor(private _giftCardDataService: GiftCardDataService) {
   }
}