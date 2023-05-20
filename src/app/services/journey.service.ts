import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JourneyResponse } from '../interfaces/journeyResponse';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JourneyRequest } from '../interfaces/journeyRequest';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class JourneyService {
  private readonly flightsAPIUrl = environment.flightsApi + '/Journey';
  private readonly httpClient: HttpClient;
  constructor(http: HttpClient) {
    this.httpClient = http;
   }

  getJourney(journeyRequest: JourneyRequest, token: string): Observable<JourneyResponse>{
    let headersObj = new HttpHeaders().set("Authorization", `bearer ${token}`)
    let url = `${this.flightsAPIUrl}/from/${journeyRequest.origin}/to/${journeyRequest.destination}`
    return this.httpClient.get<JourneyResponse>(url, { headers: headersObj })
  }
}
