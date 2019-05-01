import { Component, OnInit } from '@angular/core';
import {ProfileService} from '../profile.service';
import {Profile} from '../profile';

@Component({
  selector: 'app-add-profile',
  templateUrl: './add-profile.component.html',
  styleUrls: ['./add-profile.component.css']
})
export class AddProfileComponent implements OnInit {

  profile: Profile;
  constructor(private profileService: ProfileService) { }

  ngOnInit() {
  }

  createAccount(profile) {
    //TODO: adding user input and error handling
    //this.profileService.addProfile(profile);
  }

}
