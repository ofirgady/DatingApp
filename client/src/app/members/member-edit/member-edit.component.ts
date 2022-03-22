<<<<<<< HEAD
import { ToastrService } from 'ngx-toastr';
import { AccountService } from './../../_services/account.service';
import { User } from './../../_models/user';
import { Member } from './../../_modules/member';
import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { MembersService } from 'src/app/_services/members.service';
import { take } from 'rxjs/operators';
=======
import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { Member } from 'src/app/_models/member';
import { User } from 'src/app/_models/user';
import { AccountService } from 'src/app/_services/account.service';
import { MembersService } from 'src/app/_services/members.service';
import { take } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
>>>>>>> 5c7541c67ee7901fc38c5b87ad10e9d410e34c52
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-member-edit',
  templateUrl: './member-edit.component.html',
  styleUrls: ['./member-edit.component.css']
})
export class MemberEditComponent implements OnInit {
  @ViewChild('editForm') editForm: NgForm;
  member: Member;
  user: User;
  @HostListener('window:beforeunload', ['$event']) unloadNotification($event: any) {
    if (this.editForm.dirty) {
      $event.returnValue = true;
    }
  }

<<<<<<< HEAD
  constructor(private accountService: AccountService,
    private memberService: MembersService, private toastr: ToastrService) {
    this.accountService.currentUser$.pipe(take(1)).subscribe(user => this.user = user);
=======
  constructor(private accountService: AccountService, private memberService: MembersService, 
    private toastr: ToastrService) { 
      this.accountService.currentUser$.pipe(take(1)).subscribe(user => this.user = user);
>>>>>>> 5c7541c67ee7901fc38c5b87ad10e9d410e34c52
  }

  ngOnInit(): void {
    this.loadMember();
  }

  loadMember() {
<<<<<<< HEAD
    this.memberService.GetMember(this.user.username).subscribe(member => {
=======
    this.memberService.getMember(this.user.username).subscribe(member => {
>>>>>>> 5c7541c67ee7901fc38c5b87ad10e9d410e34c52
      this.member = member;
    })
  }

  updateMember() {
    this.memberService.updateMember(this.member).subscribe(() => {
      this.toastr.success('Profile updated successfully');
      this.editForm.reset(this.member);
    })
  }
<<<<<<< HEAD

=======
>>>>>>> 5c7541c67ee7901fc38c5b87ad10e9d410e34c52
}
