import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdditemPage } from './additem';

@NgModule({
  declarations: [
    AdditemPage,
  ],
  imports: [
    IonicPageModule.forChild(AdditemPage),
  ],
})
export class AdditemPageModule {}
