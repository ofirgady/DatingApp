<<<<<<< HEAD
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { Member } from '../_modules/member';
import { of } from 'rxjs';


=======
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Member } from '../_models/member';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
>>>>>>> 5c7541c67ee7901fc38c5b87ad10e9d410e34c52

@Injectable({
  providedIn: 'root'
})
export class MembersService {
  baseUrl = environment.apiUrl;
  members: Member[] = [];

  constructor(private http: HttpClient) { }

<<<<<<< HEAD
  GetMembers() {
    if (this.members.length > 0) return of(this.members);
    return this.http.get<Member[]>(this.baseUrl + 'users').pipe(
      map(members => {
        this.members=members;
=======
  getMembers() {
    if (this.members.length > 0) return of(this.members);
    return this.http.get<Member[]>(this.baseUrl + 'users').pipe(
      map(members => {
        this.members = members;
>>>>>>> 5c7541c67ee7901fc38c5b87ad10e9d410e34c52
        return members;
      })
    )
  }

<<<<<<< HEAD
  GetMember(username: string) {
=======
  getMember(username: string) {
>>>>>>> 5c7541c67ee7901fc38c5b87ad10e9d410e34c52
    const member = this.members.find(x => x.username === username);
    if (member !== undefined) return of(member);
    return this.http.get<Member>(this.baseUrl + 'users/' + username);
  }

  updateMember(member: Member) {
    return this.http.put(this.baseUrl + 'users', member).pipe(
<<<<<<< HEAD
      map(() =>{
        const index = this.members.indexOf(member);
        this.members[index]= member;
=======
      map(() => {
        const index = this.members.indexOf(member);
        this.members[index] = member;
>>>>>>> 5c7541c67ee7901fc38c5b87ad10e9d410e34c52
      })
    )
  }

<<<<<<< HEAD
=======
  setMainPhoto(photoId: number) {
    return this.http.put(this.baseUrl + 'users/set-main-photo/' + photoId, {});
  }

  deletePhoto(photoId: number) {
    return this.http.delete(this.baseUrl + 'users/delete-photo/' + photoId);
  }
>>>>>>> 5c7541c67ee7901fc38c5b87ad10e9d410e34c52
}
