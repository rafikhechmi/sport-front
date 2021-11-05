import { Injectable } from '@angular/core';
import { AuthenticationCredentials } from '../models/authentication-credentials';
import { Observable } from 'rxjs';
import { AuthenticationResponse } from '../models/authentication-response';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private readonly BASE_URL = environment.base_url;

  constructor(private http: HttpClient) {
    console.log('LoginService construct');
  }

  login(authCredentials: AuthenticationCredentials): Observable<AuthenticationResponse> {
    return this.http.post<AuthenticationResponse>(`${this.BASE_URL}/login`, authCredentials);
  }
}
