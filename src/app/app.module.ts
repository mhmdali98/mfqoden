import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { AddPage } from '../pages/add/add';
import { LoginPage } from '../pages/login/login';
import { MfqodPage } from '../pages/mfqod/mfqod';
import { MfqodhPage } from '../pages/mfqodh/mfqodh';
import { RegisterPage } from '../pages/register/register';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { AddmfqodPage } from '../pages/addmfqod/addmfqod';
import { AddmfqodhPage } from '../pages/addmfqodh/addmfqodh';
import { EditprofilePage } from '../pages/editprofile/editprofile';
import { MypostPage } from '../pages/mypost/mypost';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { ServiceDataProvider } from '../providers/service-data/service-data';
import { AuthServicesProvider } from '../providers/auth-services/auth-services';
import { AngularFireAuth } from 'angularfire2/auth';


  export const firebaseConfig = {
    apiKey: "AIzaSyDI0mNGaFpBXegsMJi5_3r5TkyO0BN86Ek",
    authDomain: "test-58df1.firebaseapp.com",
    databaseURL: "https://test-58df1.firebaseio.com",
    projectId: "test-58df1",
    storageBucket: "test-58df1.appspot.com",
    messagingSenderId: "207732299957"
  };



@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    AddPage,
    LoginPage,
    MfqodhPage,
    MfqodPage,
    RegisterPage,
    AddmfqodPage,
    AddmfqodhPage,
    EditprofilePage,
    MypostPage,
   
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    AddPage,
    LoginPage,
    MfqodhPage,
    MfqodPage,
    RegisterPage,
    AddmfqodPage,
    AddmfqodhPage,
    EditprofilePage,
    MypostPage,
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ServiceDataProvider,
    AuthServicesProvider,
    AngularFireAuth,
    
  ]
})
export class AppModule {}
