import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
    BrowserAnimationsModule,
    RESTAPIModule,
  ],
  providers: [
    {
      provide: 'CONFIGURATION', useValue: {
        // BACKEND_URL: 'http://localhost:8080/Plone',
        BACKEND_URL: 'http://angular-plone.herokuapp.com/Plone',
      }
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
