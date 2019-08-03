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

@NgModule({
  declarations: [
    SalonAppComponent,
    NavBarComponent,
    NavBarMenuComponent,
    GiftCardListComponent
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
  bootstrap: [SalonAppComponent]
})
export class AppModule { }
