import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database'
import { AngularFireStorage ,AngularFireStorageReference ,AngularFireUploadTask} from 'angularfire2/storage';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs';
/**
 * Generated class for the AdditemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-additem',
  templateUrl: 'additem.html',
})
export class AdditemPage {
  data={
  title:'',
  city:'',
  type:'',
  img:'',
  phone:'',
  details:'',
  }
  items: AngularFireList<any>
  ref: AngularFireStorageReference;
task: AngularFireUploadTask;

downloadURL :Observable<string>;
imageURL:string
SelectedFile=null;
submited:boolean=false;
agenicy:boolean=false;
abouts:boolean=false;
OnFileSelected(event){
  this.SelectedFile=event.target.files[0]
  //console.log(this.SelectedFile)
}
    constructor(public navCtrl: NavController, public navParams: NavParams,
               
      private afStorage: AngularFireStorage ,public db:AngularFireDatabase 
              ) {

                this.items = db.list('items')
               
    }
  

   
    addItem(){
      
     
        this.items.push({
          title : this.data.title ,
          city :  this.data.city ,
          type : this.data.type ,
          img :  this.data.img ,
          phone :  this.data.phone ,
          details :  this.data.details  ,
          
        })




        this.submited=true
   
    const id= Math.random().toString(36).substring(2)
    this.afStorage.upload(id,this.SelectedFile).then(()=>{
      this.ref=this.afStorage.ref(id)
    this.ref.getDownloadURL().subscribe(url=>{
      console.log(url)
      
    if (url) {if(this.imageURL==""){this.imageURL="assets/imgs/logo.png"}
      this.imageURL =  url
      this.submited=false
      this.items.push({
        title : this.data.title ,
        city :  this.data.city ,
        type : this.data.type ,
        img :  this.imageURL ,
        phone :  this.data.phone ,
        details :  this.data.details  ,
        
      })
  //this.router.navigate(['/home'])
      }  
    })})

      }




  }
 