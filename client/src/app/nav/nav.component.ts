import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { User } from '../_models/user';
import { AccountService } from '../_services/account.service';
=======
import { AccountService } from '../_services/account.service';
import { Observable } from 'rxjs';
import { User } from '../_models/user';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
>>>>>>> 5c7541c67ee7901fc38c5b87ad10e9d410e34c52

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
<<<<<<< HEAD
  model : any = {}

  constructor(public accountService: AccountService, private router: Router,
     private toastr: ToastrService) { }
=======
  model: any = {}

  constructor(public accountService: AccountService, private router: Router, 
    private toastr: ToastrService) { }
>>>>>>> 5c7541c67ee7901fc38c5b87ad10e9d410e34c52

  ngOnInit(): void {
  }

<<<<<<< HEAD
  login()
  {
    this.accountService.login(this.model).subscribe(Response =>
      {
        this.router.navigateByUrl('/members');
      })
=======
  login() {
    this.accountService.login(this.model).subscribe(response => {
      this.router.navigateByUrl('/members');
    })
>>>>>>> 5c7541c67ee7901fc38c5b87ad10e9d410e34c52
  }

  logout() {
    this.accountService.logout();
<<<<<<< HEAD
    this.router.navigateByUrl('/');
  }

=======
    this.router.navigateByUrl('/')
  }
>>>>>>> 5c7541c67ee7901fc38c5b87ad10e9d410e34c52
}
