import { Component } from '@angular/core';
import { JourneyResponse } from 'src/app/interfaces/journeyResponse';
import { FlightsService } from 'src/app/services/flights.service';

@Component({
  selector: 'app-flights-grid',
  templateUrl: './flights-grid.component.html',
  styleUrls: ['./flights-grid.component.scss']
})
export class FlightsGridComponent {
  journey!: JourneyResponse
  currency: string = 'USD'

  constructor(private flightsService: FlightsService){}

  ngOnInit() {
    this.flightsService.journey.subscribe(
      {
        next: res => { this.journey = res; },
        error: err => { console.log("error", err); }
      });
  }
}
