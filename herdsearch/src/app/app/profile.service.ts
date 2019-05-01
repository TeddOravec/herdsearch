import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { Profile } from './profile';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';

@Injectable()
export class ProfileService {
  profiles: Observable<Profile[]>;
  profileCollection: AngularFirestoreCollection;
  profileDoc: AngularFirestoreDocument<Profile>;

  constructor(public afs: AngularFirestore) {
    this.profiles = afs.collection('profiles').valueChanges();
    this.profileCollection = this.afs.collection('profiles');
   }

  getProfiles(): Observable<Profile[]> {
    console.log(this.profiles);
    return this.profiles;
  }

}
