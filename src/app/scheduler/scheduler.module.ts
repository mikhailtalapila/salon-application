import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DailySchedulerComponent } from './daily-scheduler/daily-scheduler.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

@NgModule({
  declarations: [DailySchedulerComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
  ]
})
export class SchedulerModule { }
