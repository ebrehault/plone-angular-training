import { Component } from '@angular/core';
import { ViewView } from '@plone/restapi-angular';

@Component({
  selector: 'app-talk',
  templateUrl: './talk.component.html',
  styleUrls: ['./talk.component.scss']
})
export class TalkComponent extends ViewView {}
