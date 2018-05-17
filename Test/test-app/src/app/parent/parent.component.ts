import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  // Any parent can bind this element
 @Input() element: {type: string, name: string, content: string};
  constructor() { }

  ngOnInit() {
  }

}
