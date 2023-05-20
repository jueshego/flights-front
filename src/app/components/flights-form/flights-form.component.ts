import { Component, EventEmitter, Output } from '@angular/core';
import { JourneyRequest } from 'src/app/interfaces/journeyRequest';

@Component({
  selector: 'app-flights-form',
  templateUrl: './flights-form.component.html',
  styleUrls: ['./flights-form.component.scss']
})
export class FlightsFormComponent {

  @Output() searchRouteEvent = new EventEmitter<JourneyRequest>();

  validationMsg: string = '';

  model = {
    origin: '',
    destination: ''
  }

  validate(){
    if(this.model.origin === this.model.destination){
      this.validationMsg = "El destino debe ser diferente al origen";
      return false;
    }

    return true;
  }

  send() {
    if(!this.validate()){
      return;
    }

    let route: JourneyRequest = {
      origin : this.model.origin.toLocaleUpperCase(),
      destination: this.model.destination.toLocaleUpperCase()
    }

    this.searchRouteEvent.emit(route);
  }
}
