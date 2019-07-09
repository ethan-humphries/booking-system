import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/models/accounts/user';
import { BookingReport } from 'src/app/models/reports/booking-report';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReportsServiceService {

  constructor(private httpClient: HttpClient) { }

  generateReportForUser(user: User): Observable<BookingReport> {

    return;
  }
}
