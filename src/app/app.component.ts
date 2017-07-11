import { Component } from '@angular/core';
import { PloneViews } from '@plone/restapi-angular';
import { Traverser } from 'angular-traversal';
import { TalkComponent } from './talk/talk.component';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private views: PloneViews,
    private traverser: Traverser,
  ) {
    this.views.initialize();
    this.traverser.addView('view', 'talk', TalkComponent);
    this.traverser.addView('view', 'Plone Site', HomeComponent);
  }
}
