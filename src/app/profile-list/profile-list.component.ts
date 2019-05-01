import { Component, OnInit } from '@angular/core';
import {ProfileService} from '../profile.service';
import {Profile} from '../profile';

@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.css']
})
export class ProfileListComponent implements OnInit {

  profiles: Profile[] = [];
  constructor(private profileService: ProfileService) { }

  ngOnInit() {
    this.profileService.getProfiles().subscribe(data => {this.profiles = data; console.log(data);
    });
  }
}
