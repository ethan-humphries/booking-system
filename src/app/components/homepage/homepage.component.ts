import { Component, OnInit } from '@angular/core';
import { Booking } from 'src/app/models/bookings/booking';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  logInClicked =  false;
  signUpClicked =  false;
  constructor() { }

  ngOnInit() {
  }

  logInClick() {
    this.logInClicked =  !this.logInClicked;
    this.signUpClicked =  false;
  }

  signUpClick() {
    this.signUpClicked =  !this.signUpClicked;
    this.logInClicked =  false;
  }
}
