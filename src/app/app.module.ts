import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatToolbarModule, MatIconModule, MatMenuModule, MatTableModule, MatCardModule, MatInputModule, MatDialogModule, MatPaginatorModule, MatProgressSpinnerModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { SalonAppComponent } from './salon-app.component';
import { NavBarComponent } from './navigation/nav-bar.component';
import { NavBarMenuComponent } from './navigation/nav-bar-menu.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SchedulerModule } from './scheduler/scheduler.module';
import { GiftCardListComponent } from './gift-cards/gift-card-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GiftCardDetailsComponent } from './gift-cards/gift-card-details.component';
import { GiftCardNewComponent } from './gift-cards/gift-card-new.component';
import { GiftCardGeneratedIdDialogComponent } from './gift-cards/dialogs/gift-card-generated-id-dialog.component';
import { CustomerListComponent } from './customers/customer-list.component';
import { CustomerDetailsComponent } from './customers/customer-details.component';
import { CustomerNewComponent } from './customers/customer-new.component';

@NgModule({
  declarations: [
    SalonAppComponent,
    NavBarComponent,
    NavBarMenuComponent,
    GiftCardListComponent,
    GiftCardDetailsComponent,
    GiftCardNewComponent,
    GiftCardGeneratedIdDialogComponent,
    CustomerListComponent,
    CustomerDetailsComponent,
    CustomerNewComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,    
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatTableModule,
    MatCardModule,
    MatInputModule,
    MatDialogModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    FlexLayoutModule,
    SchedulerModule,
    HttpClientModule,
    FormsModule,    
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [SalonAppComponent],
  entryComponents: [GiftCardGeneratedIdDialogComponent]
})
export class AppModule { }
