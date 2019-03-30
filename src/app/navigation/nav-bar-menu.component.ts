import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'salon-nav-bar-menu',
  templateUrl: './nav-bar-menu.component.html',
  styleUrls: ['./nav-bar-menu.component.css']
})
export class NavBarMenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  lookUpClient(): void {
    alert('Look up client');
  }
  makeAppointment(): void {
    alert('Make an appointment');
  }
}
