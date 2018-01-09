import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {AngularFireDatabase, AngularFireDatabaseModule} from "angularfire2/database";
import {AngularFireModule} from "angularfire2";
import {AgmCoreModule} from "@agm/core";

export const environment = {
    apiKey: "AIzaSyDlJyFePoqH4SbCLNnGgwNiNowlg60oHQM",
    authDomain: "nodemucu-10c05.firebaseapp.com",
    databaseURL: "https://nodemucu-10c05.firebaseio.com",
    projectId: "nodemucu-10c05",
    storageBucket: "nodemucu-10c05.appspot.com",
    messagingSenderId: "836455838403"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(environment),
    AngularFireDatabaseModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyANwidADOtUqQg_euY7qsEXeks2lVcdSd4'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AngularFireDatabase
  ]
})
export class AppModule {}
