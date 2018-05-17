import { Component, OnInit } from '@angular/core';
// import { User } from '../shared/user.model' ;
import {NgxSmartModalService} from 'ngx-smart-modal';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  user: any;
  copyIndex: number;
  copyUser: any;
  editUser: any;
  public finalList: { username: string, password: string }[];
  constructor(public ngxSmartModalService: NgxSmartModalService) {
    this.user = {};
    this.editUser = {};
    this.copyUser = {};
    this.finalList = [];

   }
  onSubmitAddUser() {
    console.log(this.user);
    this.copyUser = Object.assign({}, this.user);
    // console.log(this.copyUser);
  }

  addUser() {
    this.copyUser = Object.assign({}, this.user);
    this.finalList.push(this.copyUser);
    console.log(this.finalList);
  }
  editData(index) {
  console.log(index);
  this.editUser =  Object.assign({}, this.finalList[index]);
  this.copyIndex = index;
  console.log('index copy');
  console.log(this.copyIndex);
  }
  saveData() {
    console.log('index copy');
    console.log(this.copyIndex);
    this.finalList.splice( this.copyIndex, 1 , this.editUser);
    console.log('finalList', this.finalList);
  }
  deleteData(ind) {
    this.finalList.splice( this.copyIndex, 1);
    console.log(this.finalList);

  }
  ngOnInit() {
  }
}

