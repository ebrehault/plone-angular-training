import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

import { ViewView } from '@plone/restapi-angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('flyInOut', [
      state('inactive', style({
        transform: 'translateX(-100%)'
      })),
      state('active', style({
        transform: 'translateX(0)'
      })),
      transition('inactive => active', [
        animate(200, style({ transform: 'translateX(0)' }))
      ]),
      transition('active => inactive', [
        animate(200, style({ transform: 'translateX(-100%)' }))
      ])
    ])
  ]
})
export class HomeComponent extends ViewView implements OnInit {

  news: any[] = [];
  current = -1;

  ngOnInit() {
    this.services.resource.find(
      { portal_type: 'News Item' },
      '/',
      {
        sort_on: 'created',
        sort_order: 'reverse',
        size: 3,
        fullobjects: true,
      },
    ).subscribe(res => {
      res.items.map(item => {
        item.state = 'inactive';
        this.news.push(item);
      })
      this.current = 0;
      this.news[this.current].state = 'active';
    });
  }

  goTo(index) {
    this.news[this.current].state = 'inactive';
    if (index < 0) {
      index = this.news.length - 1;
    }
    if (index == this.news.length) {
      index = 0;
    }
    this.current = index;
    this.news[this.current].state = 'active';
  }

}
