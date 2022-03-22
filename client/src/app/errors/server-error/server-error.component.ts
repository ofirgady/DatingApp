<<<<<<< HEAD
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
=======
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
>>>>>>> 5c7541c67ee7901fc38c5b87ad10e9d410e34c52

@Component({
  selector: 'app-server-error',
  templateUrl: './server-error.component.html',
  styleUrls: ['./server-error.component.css']
})
export class ServerErrorComponent implements OnInit {
  error: any;

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    this.error = navigation?.extras?.state?.error;
<<<<<<< HEAD
    
=======
>>>>>>> 5c7541c67ee7901fc38c5b87ad10e9d410e34c52
   }

  ngOnInit(): void {
  }

}
