import { Component, OnInit } from '@angular/core';
import {ProfileService} from '../profile.service';
import {Profile} from '../profile';

@Component({
  selector: 'app-profile-detail',
  templateUrl: './profile-detail.component.html',
  styleUrls: ['./profile-detail.component.css']
})
export class ProfileDetailComponent implements OnInit {

  profiles: Profile[] = [];


  constructor(private profileService: ProfileService) { }

  ngOnInit() {
    // this.profiles = this.profileService.getProfiles();
    this.profileService.getProfiles().subscribe(data => {this.profiles = data; console.log(data); });
  }

}
