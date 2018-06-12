import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { datah } from '../../model/datah';
import { ServiceDataProvider } from '../../providers/service-data/service-data';
import { AlertController } from 'ionic-angular';
import { MfqodhPage } from '../mfqodh/mfqodh';
import { AngularFireAuth } from 'angularfire2/auth';


@IonicPage()
@Component({
  selector: 'page-addmfqodh',
  templateUrl: 'addmfqodh.html',
})
export class AddmfqodhPage {

datah : datah = {
  namep:'',
  phone:'',
  namem:'',
  type: '',
  commint:'',
  map:''
}


  constructor(public navCtrl: NavController, public navParams: NavParams,
              public serviceDataProvider:ServiceDataProvider,
              public alertCtrl: AlertController,
              public auth:AngularFireAuth
            ) {
              this.auth.authState.subscribe(au =>{
                if(auth){
              this.datah.uid =au.uid;
             }})
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddmfqodhPage');
  }

  addData(datah:datah){
    this.serviceDataProvider.addDatah(datah).then(ref =>this.showAlert()
    )
  }
  end(){
    this.navCtrl.pop();
  }
  showAlert() {
    const alert = this.alertCtrl.create({
      title: 'تم الاضافة',
      subTitle: 'شكرا لمساعدكم ',
      buttons: ['تم'],
      
    });
    alert.present();
    this.end();
  }

}