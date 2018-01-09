import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyDlJyFePoqH4SbCLNnGgwNiNowlg60oHQM",
    authDomain: "nodemucu-10c05.firebaseapp.com",
    databaseURL: "https://nodemucu-10c05.firebaseio.com",
    projectId: "nodemucu-10c05",
    storageBucket: "nodemucu-10c05.appspot.com",
    messagingSenderId: "836455838403"
  }
};

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
