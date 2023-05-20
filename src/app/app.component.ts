import { Component } from '@angular/core';
import { JourneyRequest } from './interfaces/journeyRequest';
import { JourneyResponse } from './interfaces/journeyResponse';
import { JourneyService } from './services/journey.service';
import { AuthenticationService } from './services/authentication.service';
import { Token } from './interfaces/token';
import { FlightsService } from './services/flights.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'flights-front';
  journey!: JourneyResponse;
  tokenStorage!: Token;

  constructor(private readonly authService: AuthenticationService, 
    private readonly journeService: JourneyService,
    private flightsService: FlightsService) {}

  ngOnInit(){
    this.getAuthToken();
  }

  getAuthToken() {
    this.authService.authenticate()
      .subscribe(res => this.setLocalStorage(res))
  }

  setLocalStorage(token: Token){
    localStorage.setItem("token", JSON.stringify(token))
  }

  checkToken () {
    let token = localStorage.getItem("token");
    if(!token){
      window.location.reload();
    }

    this.tokenStorage = JSON.parse(localStorage.getItem("token") || '{}');
  }
  
  searchRoute(route: JourneyRequest){
    console.log("AppComponent.searchRoute.route: ", route);

    this.checkToken();

    this.journeService.getJourney(route, this.tokenStorage.token)
      .subscribe(res => {
        this.journey = res;
        console.log("AppComponent.searchRoute journey got: ", res);
        this.flightsService.setJourney(res);
      })
  }
}
