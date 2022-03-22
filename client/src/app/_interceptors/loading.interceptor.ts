<<<<<<< HEAD
import { BusyService } from './../_services/busy.service';
=======
>>>>>>> 5c7541c67ee7901fc38c5b87ad10e9d410e34c52
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
<<<<<<< HEAD
=======
import { BusyService } from '../_services/busy.service';
>>>>>>> 5c7541c67ee7901fc38c5b87ad10e9d410e34c52
import { delay, finalize } from 'rxjs/operators';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {

  constructor(private busyService: BusyService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.busyService.busy();
    return next.handle(request).pipe(
      delay(1000),
      finalize(() => {
        this.busyService.idle();
      })
    )
  }
}
