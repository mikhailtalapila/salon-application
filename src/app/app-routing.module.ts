import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DailySchedulerComponent } from './scheduler/daily-scheduler/daily-scheduler.component';
import { GiftCardListComponent } from './gift-cards/gift-card-list.component';
import { GiftCardsResolverService } from './gift-cards/services/resolvers/gift-cards-resolver.service';

const routes: Routes = [
  { 
    path: 'gift-cards/gift-card-list',
    component: GiftCardListComponent,
    resolve: { giftcards: GiftCardsResolverService },
    runGuardsAndResolvers: 'always'
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
