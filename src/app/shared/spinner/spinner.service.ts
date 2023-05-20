import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {
  isBusy$  = new Subject<boolean>();

  show(): void {
    this.isBusy$.next(true);
  }

  hide(): void {
    this.isBusy$.next(false);
  }
}