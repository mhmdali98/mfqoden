import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthServicesProvider } from '../providers/auth-services/auth-services';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { MainPage } from '../pages/main/main';
import { HomePage } from '../pages/home/home';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,
                  public authServicesProvider:AuthServicesProvider) {

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    // this.authServicesProvider.afAuth.authState.subscribe(user => {
    //   if(!user){
    //     this.rootPage= MainPage;
    //   }else{
    //     this.rootPage= MainPage;
    //   }
    // },
    // ()=>{this.rootPage= LoginPage})
  }
  
}
