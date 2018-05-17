import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
public displayName = true;
public name = 'Payal';

public color = 'red';


constructor() { }

  ngOnInit() {
  }
onClick(event) {
  console.log(' Welcome To MyWorld ');
  console.log(event);

}
logMessage(value) {
  console.log(value);

}
}
