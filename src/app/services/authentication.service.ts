import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Token } from '../interfaces/token';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private readonly flightsAPIUrl = environment.flightsApi + '/api/Authentication/authenticate';
  private readonly user = environment.appUser;
  private readonly httpClient: HttpClient;
  constructor(http: HttpClient) {
    this.httpClient = http;
   }

  authenticate(): Observable<Token>{
    return this.httpClient.get<Token>(`${this.flightsAPIUrl}/${this.user}`)
  }
}


