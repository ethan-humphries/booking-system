import { Component, OnInit, Input } from '@angular/core';
import { Summary } from 'src/app/models/reports/summary';
import { Bookings } from 'src/app/models/bookings/bookings';

@Component({
  selector: 'app-overview-tile',
  templateUrl: './overview-tile.component.html',
  styleUrls: ['./overview-tile.component.scss']
})
export class OverviewTileComponent implements OnInit {
  @Input() title: string;
  @Input() bookings: Bookings;
  @Input() summaryType: string;
  summary: Summary =  new Summary();
  
  constructor() { }

  ngOnInit() {
    //initialise with fake data for testing
    this.summary.totalBookings = 12;
    this.summary.totalGuests = 47;
    this.summary.totalNoShows = 2;
    this.summary.summaryType = 'Daily';
  }

  generateSummary() {
    if (this.summaryType && this.bookings) {
      if (this.summaryType == "daily") {
        this.getDailySummary(this.bookings);
      }
      if (this.summaryType == "weekly") {
        this.getWeeklySummary(this.bookings);
      }
      if (this.summaryType == "monthly") {
        this.getMonthlySummary(this.bookings);
      }
    }
  }

  getWeeklySummary(bookings: Bookings) {
    //calculate Summary component
  }

  getMonthlySummary(bookings: Bookings) {
    //calculate Summary component
  }

  getDailySummary(bookings: Bookings) {
    //calculate Summary component
  }

  private getTotalGuests(bookings: Bookings) {

  }

  private getTotalBookings(bookings: Bookings) {

  }

  private getTotalNoShows(bookings: Bookings) {
    
  }


}
