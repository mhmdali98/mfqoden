import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddmfqodPage } from '../addmfqod/addmfqod';
import { AddmfqodhPage } from '../addmfqodh/addmfqodh';
import { MypostPage } from '../mypost/mypost';
import { AuthServicesProvider } from '../../providers/auth-services/auth-services';
import { LoginPage } from '../login/login';


@IonicPage()
@Component({
  selector: 'page-add',
  templateUrl: 'add.html',
})
export class AddPage {
  
  constructor(public navCtrl: NavController, public navParams: NavParams
              ,public authServicesProvider:AuthServicesProvider) {
  this.goToAddMfqod
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AddPage');
  }

goToAddMfqod(){
this.navCtrl.push(AddmfqodPage);
}

goToAddMfqodh(){
  this.navCtrl.push(AddmfqodhPage);
}

goToMyPost(){
  this.navCtrl.push(MypostPage);
}


goToLogout(){
  this.authServicesProvider.signOut();
  this.navCtrl.setRoot(LoginPage)
}

  

}
