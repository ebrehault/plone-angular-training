import { Component } from '@angular/core';
import { GlobalNavigation } from '@plone/restapi-angular';

@Component({
  selector: 'app-global-navigation',
  templateUrl: './global-navigation.component.html',
  styleUrls: ['./global-navigation.component.scss']
})
export class GlobalNavigationComponent extends GlobalNavigation {}
