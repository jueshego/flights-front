import { Injectable } from '@angular/core';
import { JourneyResponse } from '../interfaces/journeyResponse';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlightsService {
  private journeyObj!: JourneyResponse
  public journey: BehaviorSubject<JourneyResponse> = new BehaviorSubject<JourneyResponse>(this.journeyObj);

  constructor() { }

  getJourney(): JourneyResponse {
    return this.journeyObj;
  }

  setJourney(obj: JourneyResponse): void {
    this.journeyObj = obj;
    this.journey.next(obj);
  }
}
