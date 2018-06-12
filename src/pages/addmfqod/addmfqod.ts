import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { data } from '../../model/data';
import { ServiceDataProvider } from '../../providers/service-data/service-data';
import { AlertController } from 'ionic-angular';
import { MfqodPage } from '../mfqod/mfqod';
import { AngularFireAuth } from 'angularfire2/auth';


@IonicPage()
@Component({
  selector: 'page-addmfqod',
  templateUrl: 'addmfqod.html',
})
export class AddmfqodPage {

data : data = {
  namep:'',
  phone:'',
  namem:'',
  gander:'',
  age:'',
  commint:'',
  map:'',
  uid:''
}


  constructor(public navCtrl: NavController, public navParams: NavParams,
              public serviceDataProvider:ServiceDataProvider,
              public alertCtrl: AlertController,
              public auth:AngularFireAuth
            ) {
                this.auth.authState.subscribe(au =>{
                  if(auth){
                this.data.uid =au.uid;
               }})
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddmfqodPage');
  }

  addData(data:data){
    this.serviceDataProvider.addData(data).then(ref =>this.showAlert()
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