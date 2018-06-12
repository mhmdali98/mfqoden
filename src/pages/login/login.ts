import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthServicesProvider } from '../../providers/auth-services/auth-services';
import { TabsPage } from '../tabs/tabs';
import { RegisterPage } from '../register/register';
import { AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import  firebase  from 'firebase';



@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

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

  login(){
    let cred ={
      email: this.data.email,
      password: this.data.password
    }
    this.authServicesProvider.signInWithEmail(cred).then( ()=>this.navCtrl.setRoot(TabsPage),
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
  goToReg(){
    this.navCtrl.push(RegisterPage);
  }

  logFacebook(){
    this.angularFireAuth.auth.signInWithPopup(
      new firebase.auth.FacebookAuthProvider()).then(res =>{
        console.log(res);
      })
    
  }

  logGoogle(){
    this.angularFireAuth.auth.signInWithPopup(
      new firebase.auth.GoogleAuthProvider()).then(res =>{
        console.log(res);
      })
    
  }
}
