<<<<<<< HEAD
import { Member } from './../../_modules/member';
import { Component, Input, OnInit } from '@angular/core';
=======
import { Component, OnInit, Input } from '@angular/core';
import { Member } from 'src/app/_models/member';
>>>>>>> 5c7541c67ee7901fc38c5b87ad10e9d410e34c52

@Component({
  selector: 'app-member-card',
  templateUrl: './member-card.component.html',
  styleUrls: ['./member-card.component.css'],
})
export class MemberCardComponent implements OnInit {
<<<<<<< HEAD
  @Input() member: Member
=======
  @Input() member: Member;
>>>>>>> 5c7541c67ee7901fc38c5b87ad10e9d410e34c52

  constructor() { }

  ngOnInit(): void {
  }

}
