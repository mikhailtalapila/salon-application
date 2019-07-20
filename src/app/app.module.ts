import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatToolbarModule, MatIconModule, MatMenuModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { SalonAppComponent } from './salon-app.component';
import { NavBarComponent } from './navigation/nav-bar.component';
import { NavBarMenuComponent } from './navigation/nav-bar-menu.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SchedulerModule } from './scheduler/scheduler.module';

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
    MatButtonModule,
    FlexLayoutModule,
    SchedulerModule
  ],
  providers: [],
  bootstrap: [SalonAppComponent]
})
export class AppModule { }
