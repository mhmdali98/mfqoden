import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase , AngularFireObject } from 'angularfire2/database/database';
import { data } from '../../model/data';
import { datah } from '../../model/datah';
import { ServiceDataProvider } from '../../providers/service-data/service-data';
import { AlertController } from 'ionic-angular';
import { AddPage } from '../add/add';
import { AngularFireAuth } from 'angularfire2/auth';

@IonicPage()
@Component({
  selector: 'page-mypost',
  templateUrl: 'mypost.html',
})
export class MypostPage {

  dataList: AngularFireObject<any>
  dataListh: AngularFireObject<any>
 
  
  data:data={
    key:'',
    namep:'',
    phone:'',
    namem:'',
    gander:'',
    age:'',
    commint:'',
    map:'',
    uid:''
  }

  datah:datah={
    key:'',
    namep:'',
    phone:'',
    namem:'',
    type:'',
    commint:'',
    map:'',
    uid:''
  }

  

  itemArray = [];
  myObject = [] ;
 itemArrayh = [];
  myObjecth = [] ;
 uiid:string;
  
    constructor(public navCtrl: NavController, 
      public navParams: NavParams,
      public serviceDataProvider:ServiceDataProvider,
      public alertCtrl: AlertController,
      db: AngularFireDatabase,
      public auth:AngularFireAuth
      ) {
       

        this.dataList= db.object('addmfqod');
        this.dataList.snapshotChanges().subscribe(action =>{
          let y =action.payload.toJSON();
          y['key']=action.key;

          this.itemArray.push(action.payload.val() as data)
          this.myObject= Object.entries(this.itemArray[0])
          console.log(this.myObject)})

          this.dataListh= db.object('addmfqodh');
        this.dataListh.snapshotChanges().subscribe(action =>{if (action.payload.val() == null || action.payload.val() == undefined)
          {console.log('no data');}
        else{
          this.itemArrayh.push(action.payload.val() as datah)
          this.myObjecth= Object.entries(this.itemArrayh[0])
     }
        })
        this.auth.authState.subscribe(au =>{
          if(auth){
        this.uiid =au.uid;
       }});
    }
  
    ionViewDidLoad() {
    }

   

    remove(data: data){
      this.serviceDataProvider.remove(data).then( ()=>{
        this.navCtrl.setRoot(AddPage)

        console.log('removed')

      })
    }

   

    removeh(datah: datah){
      this.serviceDataProvider.removeh(datah).then( ()=>{
        this.navCtrl.setRoot(AddPage)

        console.log('removed')

      })
    }
  
  


}




