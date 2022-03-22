<<<<<<< HEAD
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
=======
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
>>>>>>> 5c7541c67ee7901fc38c5b87ad10e9d410e34c52
import { User } from './_models/user';
import { AccountService } from './_services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
<<<<<<< HEAD
  title = 'The Dating App';
  users: any;

  constructor(private accountService: AccountService) {}
=======
  title = 'The Dating app';
  users: any;

  constructor(private accountService: AccountService) {}

>>>>>>> 5c7541c67ee7901fc38c5b87ad10e9d410e34c52
  ngOnInit() {
    this.setCurrentUser();
  }

  setCurrentUser() {
    const user: User = JSON.parse(localStorage.getItem('user'));
    this.accountService.setCurrentUser(user);
  }
<<<<<<< HEAD


=======
>>>>>>> 5c7541c67ee7901fc38c5b87ad10e9d410e34c52
}
