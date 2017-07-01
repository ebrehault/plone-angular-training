import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RESTAPIModule } from '@plone/restapi-angular';

import { AppComponent } from './app.component';
import { GlobalNavigationComponent } from './global-navigation/global-navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    GlobalNavigationComponent
  ],
  imports: [
    BrowserModule,
    RESTAPIModule,
  ],
  providers: [
    {
      provide: 'CONFIGURATION', useValue: {
        BACKEND_URL: 'http://plonerestapi.herokuapp.com/Plone',
      }
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
