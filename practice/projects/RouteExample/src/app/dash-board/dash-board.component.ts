import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit {

  flagValue: boolean;
  constructor() { }
  @HostListener('window:popstate', ['$event'])
  onPopState(event) {
    this.flagValue = false;

  alert('Your Account will be log out');
 }
  ngOnInit() {
    this.flagValue = true;
  }

}
