import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DailySchedulerComponent } from './scheduler/daily-scheduler/daily-scheduler.component';
import { GiftCardListComponent } from './gift-cards/gift-card-list.component';
import { GiftCardsResolverService } from './gift-cards/services/resolvers/gift-cards-resolver.service';
import { GiftCardDetailsComponent } from './gift-cards/gift-card-details.component';
import { GiftCardResolverService } from './gift-cards/services/resolvers/gift-card-resolver.service';
import { GiftCardTransactionsResolverService } from './gift-cards/services/resolvers/gift-card-transactions-resolver.service';
import { GiftCardNewComponent } from './gift-cards/gift-card-new.component';

const routes: Routes = [
  { 
    path: 'gift-cards/gift-card-list',
    component: GiftCardListComponent,
    resolve: { giftcards: GiftCardsResolverService },
    runGuardsAndResolvers: 'always'
  },
  {
    path: 'gift-cards/gift-card-details/:id',
    component: GiftCardDetailsComponent,
    resolve: { 
                giftcard: GiftCardResolverService,
                giftcardtransactions: GiftCardTransactionsResolverService 
             }
  },
  {
    path: 'gift-cards/new-gift-card',
    component: GiftCardNewComponent
  },
  { path: 'daily-scheduler', component: DailySchedulerComponent},
  { 
    path: '',
    redirectTo: '/gift-cards/gift-card-list',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [GiftCardsResolverService]
})
export class AppRoutingModule { }
