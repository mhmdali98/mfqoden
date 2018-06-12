import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase , AngularFireObject } from 'angularfire2/database/database';
import { data } from '../../model/data';
import { ServiceDataProvider } from '../../providers/service-data/service-data';

@IonicPage()
@Component({
  selector: 'page-mfqod',
  templateUrl: 'mfqod.html',
})
export class MfqodPage {

dataList: AngularFireObject<any>
itemArray = []
myObject = [] 
items :any;
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    db: AngularFireDatabase,
    ServiceDataProvider:ServiceDataProvider,
    ) {

      this.dataList= db.object('addmfqod');
      this.dataList.snapshotChanges().subscribe(action =>{if (action.payload.val() == null || action.payload.val() == undefined)
        {console.log('no data');}
      else{
        this.itemArray.push(action.payload.val() as data)
        this.myObject= Object.entries(this.itemArray[0])
        this.initializeItems();

   }
  })
  }

  
  
 
  


  ionViewDidLoad() {
  }
  
  initializeItems() {
   this.items = this.myObject.reverse()
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

  getItemsgan(ev: any) {
    this.initializeItems();
    const valg = ev;
    if (valg && valg.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item[1]['gander'].toLowerCase().indexOf(valg.toLowerCase()) > -1);
      })
    }
  }
  getItemsage(ev: any) {
    this.initializeItems();
    const vala = ev;
    if (vala && vala.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item[1]['age'].toLowerCase().indexOf(vala.toLowerCase()) > -1);
      })
    }
  }
 
}
