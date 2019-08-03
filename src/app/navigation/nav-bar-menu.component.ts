import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'salon-nav-bar-menu',
  templateUrl: './nav-bar-menu.component.html',
  styleUrls: ['./nav-bar-menu.component.css']
})
export class NavBarMenuComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {
  }
  goToClients(): void {
    this._router.navigate(['gift-cards', 'gift-card-details', '1']);
  }
  newGiftCerticate(): void {
    this._router.navigate(['gift-cards', 'new-gift-card']);
  }
}
