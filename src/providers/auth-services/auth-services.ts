import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';


@Injectable()
export class AuthServicesProvider {

  private user : firebase.User

  constructor(public afAuth:AngularFireAuth) {
    console.log('Hello AuthServicesProvider Provider');
    afAuth.authState.subscribe(user =>{
      this.user = user;
    })
  }

  signInWithEmail(cred){
    return this.afAuth.auth.signInWithEmailAndPassword(cred.email,cred.password);
  }

  signup(cred){
    return this.afAuth.auth.createUserWithEmailAndPassword(cred.email,cred.password);

  }

  signOut(){
    return this.afAuth.auth.signOut();
  }

}
