<<<<<<< HEAD
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
=======
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
>>>>>>> 5c7541c67ee7901fc38c5b87ad10e9d410e34c52

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  registerMode = false;

  constructor() { }

  ngOnInit(): void {
  }

<<<<<<< HEAD

  registerToggle()
  {
    this.registerMode =!this.registerMode;
  }


  cancleRegisterMode(event: boolean) {
=======
  registerToggle() {
    this.registerMode = !this.registerMode;
  }

  cancelRegisterMode(event: boolean) {
>>>>>>> 5c7541c67ee7901fc38c5b87ad10e9d410e34c52
    this.registerMode = event;
  }

}
