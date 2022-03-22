<<<<<<< HEAD
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
=======
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
>>>>>>> 5c7541c67ee7901fc38c5b87ad10e9d410e34c52

@Component({
  selector: 'app-test-errors',
  templateUrl: './test-errors.component.html',
  styleUrls: ['./test-errors.component.css']
})
export class TestErrorsComponent implements OnInit {
<<<<<<< HEAD
  baseUrl ='https://localhost:5001/api/';
=======
  baseUrl = 'https://localhost:5001/api/';
>>>>>>> 5c7541c67ee7901fc38c5b87ad10e9d410e34c52
  validationErrors: string[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

<<<<<<< HEAD
  get404Error()
  {
=======
  get404Error() {
>>>>>>> 5c7541c67ee7901fc38c5b87ad10e9d410e34c52
    this.http.get(this.baseUrl + 'buggy/not-found').subscribe(response => {
      console.log(response);
    }, error => {
      console.log(error);
    })
  }

<<<<<<< HEAD
  get400Error()
  {
=======
  get400Error() {
>>>>>>> 5c7541c67ee7901fc38c5b87ad10e9d410e34c52
    this.http.get(this.baseUrl + 'buggy/bad-request').subscribe(response => {
      console.log(response);
    }, error => {
      console.log(error);
    })
  }

<<<<<<< HEAD
  get500Error()
  {
=======
  get500Error() {
>>>>>>> 5c7541c67ee7901fc38c5b87ad10e9d410e34c52
    this.http.get(this.baseUrl + 'buggy/server-error').subscribe(response => {
      console.log(response);
    }, error => {
      console.log(error);
    })
  }

<<<<<<< HEAD
  get401Error()
  {
=======
  get401Error() {
>>>>>>> 5c7541c67ee7901fc38c5b87ad10e9d410e34c52
    this.http.get(this.baseUrl + 'buggy/auth').subscribe(response => {
      console.log(response);
    }, error => {
      console.log(error);
    })
  }

<<<<<<< HEAD
  get400ValidationError()
  {
=======
  get400ValidationError() {
>>>>>>> 5c7541c67ee7901fc38c5b87ad10e9d410e34c52
    this.http.post(this.baseUrl + 'account/register', {}).subscribe(response => {
      console.log(response);
    }, error => {
      console.log(error);
      this.validationErrors = error;
    })
  }
<<<<<<< HEAD
  
=======
>>>>>>> 5c7541c67ee7901fc38c5b87ad10e9d410e34c52

}
