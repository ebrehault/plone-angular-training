import { Component, OnInit } from '@angular/core';
import { ResourceService } from '@plone/restapi-angular';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  links: any[] = [];

  constructor(public resource: ResourceService) { }

  ngOnInit() {
    this.resource.find(
      { portal_type: 'Link' },
      '/quick-links',
      { fullobjects: true }
    ).subscribe(res => {
      this.links = res.items;
    })
  }
}
