import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { IGiftCard } from '../../models/gift-card';
import { GiftCardDataService } from '../gift-card-data.service';

@Injectable({
  providedIn: 'root'
})
export class GiftCardResolverService implements Resolve<IGiftCard> {

  constructor(private _giftCardDataService: GiftCardDataService) { }
  resolve(route: ActivatedRouteSnapshot) {
    return this._giftCardDataService.getGiftCard(+route.params['id']);
  }
}
