import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { Member } from '../_modules/member';



@Injectable({
  providedIn: 'root'
})
export class MembersService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  GetMembers() {
    return this.http.get<Member[]>(this.baseUrl + 'users');
  }

  GetMember(username: string) {
    return this.http.get<Member>(this.baseUrl + 'users/' + username);
  }

}
