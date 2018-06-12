import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase , AngularFireObject } from 'angularfire2/database/database';
import { datah } from '../../model/datah';
import { ServiceDataProvider } from '../../providers/service-data/service-data';



@IonicPage()
@Component({
  selector: 'page-mfqodh',
  templateUrl: 'mfqodh.html',
})
export class MfqodhPage {

  dataListh: AngularFireObject<any>
  itemArrayh = []
  myObjecth = [] 
  items :any;
    constructor(public navCtrl: NavController, 
      public navParams: NavParams,
      db: AngularFireDatabase,
      ServiceDataProvider:ServiceDataProvider,
      ) {
  
        this.dataListh= db.object('addmfqodh');
        this.dataListh.snapshotChanges().subscribe(action =>{if (action.payload.val() == null || action.payload.val() == undefined)
          {console.log('no data');}
        else{
          this.itemArrayh.push(action.payload.val() as datah)
          this.myObjecth= Object.entries(this.itemArrayh[0])
          this.initializeItems();

     }
    })

    }
  
    ionViewDidLoad() {
      console.log('ionViewDidLoad MfqodhPage');
      
    }
    initializeItems() {
      this.items = this.myObjecth.reverse()
     }
   
     getItems(ev: any) {
       // Reset items back to all of the items
       this.initializeItems();
   
       // set val to the value of the searchbar
       const val = ev.target.value;
   
       // if the value is an empty string don't filter the items
       if (val && val.trim() != '') {
         this.items = this.items.filter((item) => {
           return (item[1]['namem'].toLowerCase().indexOf(val.toLowerCase()) > -1);
         })
       }
     }
      
     getItemstype(ev: any) {
      // Reset items back to all of the items
      this.initializeItems();
  
      // set val to the value of the searchbar
      const valt = ev;
  
      // if the value is an empty string don't filter the items
      if (valt && valt.trim() != '') {
        this.items = this.items.filter((item) => {
          return (item[1]['type'].toLowerCase().indexOf(valt.toLowerCase()) > -1);
        })
      }
    }
  
  }
  