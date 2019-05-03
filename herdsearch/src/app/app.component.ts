import { Component } from '@angular/core';
import {ProfileService} from './profile.service';
import {Profile} from './profile';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Herd Search';
  currentYear = new Date().getFullYear();
  newListing = false

  makeListing() {
    this.newListing = true;
    console.log(this.newListing);
  }
}

