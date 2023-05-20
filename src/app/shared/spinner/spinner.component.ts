import { Component } from '@angular/core';
import { SpinnerService } from './spinner.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent {
  isBusy$ = this.spinnerService.isBusy$;

  constructor(private readonly spinnerService: SpinnerService){

  }
}
