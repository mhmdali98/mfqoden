import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthServicesProvider } from '../../providers/auth-services/auth-services';
import { TabsPage } from '../tabs/tabs';
import { LoginPage } from '../login/login';
import { AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import  firebase  from 'firebase';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  data ={
   
    email:'',
    password:''
  }

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public authServicesProvider:AuthServicesProvider,
              public alertCtrl: AlertController,
            public angularFireAuth:AngularFireAuth) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  Register(){
    let cred ={
      
      email: this.data.email,
      password: this.data.password

    }
    this.authServicesProvider.signup(cred).then( ()=>this.navCtrl.setRoot(TabsPage),
    error=>{
      const alert = this.alertCtrl.create({
        title: 'ادخال خاطئ',
        subTitle: 'الايميل او كلمه المرور غير صحيح',
        buttons: ['OK']
      });
      alert.present();
    }
  )
  }
  // goToLog(){
  //   this.navCtrl.push(LoginPage);
  // }

  // logFacebook(){
  //   this.angularFireAuth.auth.signInWithPopup(
  //     new firebase.auth.FacebookAuthProvider()).then(res =>{
  //       console.log(res);
  //     })
    
  // }

  // logGoogle(){
  //   this.angularFireAuth.auth.signInWithPopup(
  //     new firebase.auth.GoogleAuthProvider()).then(res =>{
  //       console.log(res);
  //     })
    
  // }


}
