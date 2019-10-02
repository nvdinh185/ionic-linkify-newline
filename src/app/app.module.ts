import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';

import { MyApp } from './app.component';
import { HomeNewsPage } from '../pages/home-news/home-news';
import { LinkifyPipe } from '../pipes/linkify';
import { NewlinePipe } from '../pipes/new-line';
import { ApiAuthService } from '../services/apiAuthService';

@NgModule({
  declarations: [
    MyApp,
    LinkifyPipe,
    NewlinePipe,
    HomeNewsPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomeNewsPage,
  ],
  providers: [
    ApiAuthService,
  ]
})
export class AppModule {}
