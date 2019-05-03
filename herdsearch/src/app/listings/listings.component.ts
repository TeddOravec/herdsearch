import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
import { Profile } from '../profile';

@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.css']
})
export class ListingsComponent implements OnInit {

  profiles: Profile[];
  drinking = false;
  smoking = false;
  petFriendly = false;
  morningPerson = false;
  filters = false;

  constructor(private proServ: ProfileService) { }

  ngOnInit() {
    this.proServ.getProfiles()
    .subscribe(person => {this.profiles = person
    console.log(person);
  })
  }

}
