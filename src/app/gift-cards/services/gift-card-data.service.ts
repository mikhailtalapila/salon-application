import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { IGiftCard } from '../models/gift-card';
import { IGiftCardTransaction } from '../models/gift-card-transaction';
import { SharedSettingsService } from 'src/app/shared/services/shared-settings.service';

@Injectable({
  providedIn: 'root'
})
export class GiftCardDataService {
  private _giftCardsURL: string; 
  private _giftCardTransactionURL: string;
  
  constructor(private _http: HttpClient, private _settings: SharedSettingsService) { 
    this._giftCardsURL = this._settings.applicationAPIBaseUrl + 'giftcard';
    this._giftCardTransactionURL = this._settings.applicationAPIBaseUrl + 'giftcardtransaction';
  }
  // gift cards
  getGiftCards(): Observable<IGiftCard[]> {
    return this._http.get<IGiftCard[]>(this._giftCardsURL).pipe(tap(), catchError(this.handleError));
  }
  getGiftCard(giftCardId: number): Observable<IGiftCard> {
    return this._http.get<IGiftCard>(this._giftCardsURL + '/' + giftCardId).pipe(tap(), catchError(this.handleError));
  }
  createGiftCard(giftCard: IGiftCard): Observable<IGiftCard> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });    
    return this._http.post<IGiftCard>(this._giftCardsURL, giftCard, { headers: headers })
      .pipe(
        tap(data => console.log('created Gift card: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
  } 
  // gift card transactions
  createTransaction(transaction: IGiftCardTransaction): Observable<IGiftCardTransaction> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });    
    return this._http.post<IGiftCardTransaction>(this._giftCardTransactionURL, transaction, { headers: headers })
      .pipe(
        tap(data => console.log('created transaction: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
  }
  getGiftCardTransactionsByGiftCardId(giftCardId: number): Observable<IGiftCardTransaction[]> {
    return this._http.get<IGiftCardTransaction[]>(this._giftCardTransactionURL + '/giftcard/' + giftCardId).pipe(tap(), catchError(this.handleError)); 
  }
  getGiftCardsAllTransactions(): Observable<IGiftCardTransaction[]> {
    return this._http.get<IGiftCardTransaction[]>(this._giftCardTransactionURL).pipe(tap(), catchError(this.handleError));
  }
  private handleError(err) {
    let errorMessage = '';
    if(err.error instanceof Error) {
      errorMessage = 'An error has occurred';
    } else {
      errorMessage = 'Server returned an error';
    }
    return throwError(errorMessage);
  }
}

