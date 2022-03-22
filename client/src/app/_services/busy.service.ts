import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root'
})
export class BusyService {
<<<<<<< HEAD
  busyRequestCount = 0 ;
=======
  busyRequestCount = 0;

>>>>>>> 5c7541c67ee7901fc38c5b87ad10e9d410e34c52
  constructor(private spinnerService: NgxSpinnerService) { }

  busy() {
    this.busyRequestCount++;
    this.spinnerService.show(undefined, {
      type: 'line-scale-party',
      bdColor: 'rgba(255,255,255,0)',
      color: '#333333'
    });
  }

  idle() {
    this.busyRequestCount--;
<<<<<<< HEAD
    if(this.busyRequestCount <= 0) {
=======
    if (this.busyRequestCount <= 0) {
>>>>>>> 5c7541c67ee7901fc38c5b87ad10e9d410e34c52
      this.busyRequestCount = 0;
      this.spinnerService.hide();
    }
  }
}
