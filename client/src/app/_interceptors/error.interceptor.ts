<<<<<<< HEAD
import { ToastrService } from 'ngx-toastr';
import { NavigationExtras, Router } from '@angular/router';
=======
>>>>>>> 5c7541c67ee7901fc38c5b87ad10e9d410e34c52
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
<<<<<<< HEAD
=======
import { Router, NavigationExtras } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
>>>>>>> 5c7541c67ee7901fc38c5b87ad10e9d410e34c52
import { catchError } from 'rxjs/operators';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private router: Router, private toastr: ToastrService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError(error => {
        if (error) {
<<<<<<< HEAD
          switch(error.status) {
            case 400:
              if (error.error.errors) 
              {
              const modalStateErrors = [];
              for(const key in error.error.errors) {
                if (error.error.errors[key]) {
                  modalStateErrors.push(error.error.errors[key])

                }
              }
              throw modalStateErrors.flat();
            }
            else 
            {
              this.toastr.error(error.statusText === "OK" ? "Bad Request" : error.statusText, error.status);
            }
            break;
            case 401:
              this.toastr.error(error.statusText === "OK" ? "Unauthorised" : error.statusText, error.status);
            break;
            case 404:
              this.router.navigateByUrl('/not-found');
            break;
=======
          switch (error.status) {
            case 400:
              if (error.error.errors) {
                const modalStateErrors = [];
                for (const key in error.error.errors) {
                  if (error.error.errors[key]) {
                    modalStateErrors.push(error.error.errors[key])
                  }
                }
                throw modalStateErrors.flat();
              } else {
                this.toastr.error(error.statusText, error.status);
              }
              break;
            case 401:
              this.toastr.error(error.statusText, error.status);
              break;
            case 404:
              this.router.navigateByUrl('/not-found');
              break;
>>>>>>> 5c7541c67ee7901fc38c5b87ad10e9d410e34c52
            case 500:
              const navigationExtras: NavigationExtras = {state: {error: error.error}}
              this.router.navigateByUrl('/server-error', navigationExtras);
              break;
            default:
<<<<<<< HEAD
              this.toastr.error('Something unexpected has accured');
              console.log(error);
              break;
          }
          return throwError(error);
        }
=======
              this.toastr.error('Something unexpected went wrong');
              console.log(error);
              break;
          }
        }
        return throwError(error);
>>>>>>> 5c7541c67ee7901fc38c5b87ad10e9d410e34c52
      })
    )
  }
}
<<<<<<< HEAD
function Unauthorised(arg0: boolean, OK: any, Unauthorised: any, statusText: any, status: any) {
  throw new Error('Function not implemented.');
}

function OK(arg0: boolean, OK: any, Unauthorised: (arg0: boolean, OK: any, Unauthorised: any, statusText: any, status: any) => void, statusText: any, status: any) {
  throw new Error('Function not implemented.');
}

=======
>>>>>>> 5c7541c67ee7901fc38c5b87ad10e9d410e34c52
