import { Component, OnInit } from '@angular/core';
import { ViewView } from '@plone/restapi-angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent extends ViewView implements OnInit {

  news: any[];

  ngOnInit() {
    this.services.resource.find(
      { portal_type: 'News Item' },
      '/',
      {
        sort_on: 'created',
        sort_order: 'reverse',
        size: 3,
      },
    ).subscribe(res => {
      this.news = res.items;
    });
  }

}
