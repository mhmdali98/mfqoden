import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { data } from '../../model/data';
import { datah } from '../../model/datah';


@Injectable()
export class ServiceDataProvider {

private dataIn = this.db.list<data>('addmfqod');
private dataInh = this.db.list<datah>('addmfqodh');

  constructor(public db:AngularFireDatabase) {
    console.log('Hello ServiceDataProvider Provider');
  }

  getDataList(){
    return this.dataIn;
  }

  addData(data: data){
    return this.dataIn.push(data);
  }
  upData(data: data){
    return this.dataIn.update(data.key,data);
  }
  remove(data){
    return this.dataIn.remove(data);
  }


  getDataListh(){
    return this.dataInh;
  }

  addDatah(datah: datah){
    return this.dataInh.push(datah);
  }
  upDatah(datah: datah){
    return this.dataInh.update(datah.key,datah);
  }
  removeh(datah){
    return this.dataInh.remove(datah);
  }



}
