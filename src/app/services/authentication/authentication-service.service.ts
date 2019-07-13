import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/accounts/user';

// this will be the url of our API
const requestUrl = '';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationServiceService {

  constructor(private httpClient: HttpClient) { }

  authenticateUsers(email: string, password: string): Observable<User> {
    var requestUser: User;
    requestUser.email =  email;
    requestUser.password =  password;

    return this.httpClient.post<User>(requestUrl, requestUser);
  }
}
