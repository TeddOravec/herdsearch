import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
import { Profile } from '../profile';

@Component({
  selector: 'app-profile-detail',
  templateUrl: './profile-detail.component.html',
  styleUrls: ['./profile-detail.component.css']
})
export class ProfileDetailComponent implements OnInit {

  profiles: Profile[] = [];

  constructor(private proServ: ProfileService) { }

  ngOnInit() {
    this.proServ.getProfiles()
    .subscribe(data => {this.profiles = data
    console.log(data);
  })
  }

}
