import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { environment } from '../environments/environment';
import { AddProfileComponent } from './add-profile/add-profile.component';
import { ListingsComponent } from './listings/listings.component';
import { ProfileListComponent } from './profile-list/profile-list.component';
import { ProfileDetailComponent } from './profile-detail/profile-detail.component';
import { ProfileService } from './profile.service';

@NgModule({
   declarations: [
      AppComponent,
      AddProfileComponent,
      ListingsComponent,
      ProfileListComponent,
      ProfileDetailComponent
   ],
   imports: [
      FormsModule,
      AngularFireModule.initializeApp(environment.firebase),
      AngularFirestoreModule,
      AngularFireStorageModule,
      BrowserModule,
      AppRoutingModule
   ],
   providers: [ProfileService],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
