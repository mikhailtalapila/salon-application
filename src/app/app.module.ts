import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatToolbarModule, MatIconModule, MatMenuModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { SalonAppComponent } from './salon-app.component';
import { NavBarComponent } from './navigation/nav-bar.component';
import { NavBarMenuComponent } from './navigation/nav-bar-menu.component';

@NgModule({
  declarations: [
    SalonAppComponent,
    NavBarComponent,
    NavBarMenuComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [SalonAppComponent]
})
export class AppModule { }
