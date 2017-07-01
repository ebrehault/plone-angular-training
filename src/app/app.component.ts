import { Component } from '@angular/core';
import { PloneViews } from '@plone/restapi-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private views: PloneViews,
  ) {
    this.views.initialize();
  }
}
