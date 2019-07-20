import { Component, OnInit } from '@angular/core';
import { CalendarEvent } from 'src/app/shared/models/calendar-event';


@Component({
  selector: 'salon-daily-scheduler',
  templateUrl: './daily-scheduler.component.html',
  styleUrls: ['./daily-scheduler.component.css']
})
export class DailySchedulerComponent implements OnInit {
  view: string = 'day';
  viewDate: Date = new Date();
  events: CalendarEvent[] = [];
  constructor() { }

  ngOnInit() {
  }

}
