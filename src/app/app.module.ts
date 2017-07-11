import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RESTAPIModule } from '@plone/restapi-angular';

import { AppComponent } from './app.component';
import { GlobalNavigationComponent } from './global-navigation/global-navigation.component';
import { TalkComponent } from './talk/talk.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    GlobalNavigationComponent,
    TalkComponent,
    HomeComponent,
  ],
  entryComponents: [
    TalkComponent,
    HomeComponent,
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
