<<<<<<< HEAD
import { User } from './../_models/user';
import { AccountService } from './../_services/account.service';
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
import { AccountService } from '../_services/account.service';
import { User } from '../_models/user';
>>>>>>> 5c7541c67ee7901fc38c5b87ad10e9d410e34c52
import { take } from 'rxjs/operators';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

<<<<<<< HEAD
  constructor(private accountService: AccountService) { }
=======
  constructor(private accountService: AccountService) {}
>>>>>>> 5c7541c67ee7901fc38c5b87ad10e9d410e34c52

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let currentUser: User;

    this.accountService.currentUser$.pipe(take(1)).subscribe(user => currentUser = user);
    if (currentUser) {
      request = request.clone({
        setHeaders: {
<<<<<<< HEAD
          Authorization : `Bearer ${currentUser.token}`
=======
          Authorization: `Bearer ${currentUser.token}`
>>>>>>> 5c7541c67ee7901fc38c5b87ad10e9d410e34c52
        }
      })
    }

<<<<<<< HEAD

      return next.handle(request);
    
=======
    return next.handle(request);
>>>>>>> 5c7541c67ee7901fc38c5b87ad10e9d410e34c52
  }
}
