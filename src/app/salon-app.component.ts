import { Component } from '@angular/core';
import { Router, NavigationStart, NavigationCancel, NavigationEnd, NavigationError, Event } from '@angular/router';

@Component({
  selector: 'salon-app',
  templateUrl: './salon-app.component.html',
  styleUrls: ['./salon-app.component.css']
})
export class SalonAppComponent {
  loading: boolean;
  constructor(
    private router: Router
  ) {
    router.events.subscribe((value: Event) => {
      this.checkRouterEvent(value);
    });
  } 
  checkRouterEvent(routerEvent: Event): void {
    if (routerEvent instanceof NavigationStart) {
      this.loading = true;
    }
    if (routerEvent instanceof NavigationEnd ||
      routerEvent instanceof NavigationCancel ||
      routerEvent instanceof NavigationError) {
        this.loading = false;
      }
  }
}
