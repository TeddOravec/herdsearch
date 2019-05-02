import { Injectable } from '@angular/core';
import {Profile} from './profile';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';
import {Observable} from 'rxjs';

@Injectable()
export class ProfileService {

  profiles: Observable<Profile[]>;
  profileCollection: AngularFirestoreCollection;

  profileDoc: AngularFirestoreDocument<Profile>;

  constructor(public afs: AngularFirestore) {
    this.profiles = afs.collection('users').valueChanges();
    this.profileCollection = this.afs.collection('users')
   }

   getProfiles(): Observable<Profile[]>{

    console.log(this.profiles);
    return this.profiles;
   }

   addProfile(pro: Profile){
     this.profileCollection.add(pro);
   }

}
