import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
 public name = ' Payal ';
 public myId = ' p01';
 public isDisabled = 'false';
constructor() { }

  ngOnInit() {
  }

  greetUser() {
    return 'Hello' + this.name;
  }

}
