<<<<<<< HEAD
import { environment } from './../../environments/environment';
import { User } from './../_models/user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import {map} from 'rxjs/operators';
=======
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { User } from '../_models/user';
import { ReplaySubject } from 'rxjs';
import { environment } from 'src/environments/environment';
>>>>>>> 5c7541c67ee7901fc38c5b87ad10e9d410e34c52

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  baseUrl = environment.apiUrl;
  private currentUserSource = new ReplaySubject<User>(1);
  currentUser$ = this.currentUserSource.asObservable();

  constructor(private http: HttpClient) { }

<<<<<<< HEAD
  login(model :any) {
=======
  login(model: any) {
>>>>>>> 5c7541c67ee7901fc38c5b87ad10e9d410e34c52
    return this.http.post(this.baseUrl + 'account/login', model).pipe(
      map((response: User) => {
        const user = response;
        if (user) {
<<<<<<< HEAD
          localStorage.setItem('user', JSON.stringify(user));
          this.currentUserSource.next(user);
=======
          this.setCurrentUser(user);
>>>>>>> 5c7541c67ee7901fc38c5b87ad10e9d410e34c52
        }
      })
    )
  }

  register(model: any) {
    return this.http.post(this.baseUrl + 'account/register', model).pipe(
      map((user: User) => {
        if (user) {
<<<<<<< HEAD
          localStorage.setItem('user', JSON.stringify(user));
          this.currentUserSource.next(user);
=======
         this.setCurrentUser(user);
>>>>>>> 5c7541c67ee7901fc38c5b87ad10e9d410e34c52
        }
      })
    )
  }

  setCurrentUser(user: User) {
<<<<<<< HEAD
=======
    localStorage.setItem('user', JSON.stringify(user));
>>>>>>> 5c7541c67ee7901fc38c5b87ad10e9d410e34c52
    this.currentUserSource.next(user);
  }

  logout() {
    localStorage.removeItem('user');
    this.currentUserSource.next(null);
  }
}
