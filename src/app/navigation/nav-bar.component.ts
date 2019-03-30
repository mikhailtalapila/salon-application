import { Component, OnInit } from '@angular/core';
import { SharedSettingsService } from '../shared/services/shared-settings.service';

@Component({
  selector: 'salon-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  applicationName: String;
  constructor(private _sharedSettings: SharedSettingsService) {
    this.applicationName = _sharedSettings.applicationName;
  }

}
