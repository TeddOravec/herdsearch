import { Component, OnInit } from '@angular/core';
import {ProfileService} from '../profile.service';
import {Profile} from '../profile';
import {fromEventPattern} from 'rxjs';

@Component({
  selector: 'app-add-profile',
  templateUrl: './add-profile.component.html',
  styleUrls: ['./add-profile.component.css']
})
export class AddProfileComponent implements OnInit {

  pro: Profile ={
    fName: '',
    lName: '',
    age: 0,
    gender: '',
    major: '',
    costPerMonth: 0,
    drinking: false,
    smoking: false,
    morningPerson: false,
    petFriendly: false,
    email: '',
    password: '',
  }

  constructor(private proServ: ProfileService) { }

  ngOnInit() {
  }

  onSubmit(){
    if(this.pro.fName != '' && this.pro.lName != '' && this.pro.age != 0 && this.pro.costPerMonth != 0){
      this.proServ.addProfile(this.pro);
    }
    this.pro.fName ='';
    this.pro.lName ='';
    this.pro.age = null;
    this.pro.costPerMonth = 0;
    this.pro.gender ='';
    this.pro.major='';
    this.pro.drinking=false;
    this.pro.smoking=false;
    this.pro.petFriendly=false;
    this.pro.morningPerson=false;
  }

}
