import { Component, OnInit } from '@angular/core';
import { HttpGetService } from '../../Services/http-get.service';
import { PagerService } from '../../Services/pager.service';

@Component({
  selector: 'app-registrants-table',
  templateUrl: './registrants-table.component.html',
  styleUrls: ['./registrants-table.component.css']
})
export class RegistrantsTableComponent implements OnInit {

  allRegistrants: any;
  constructor(
              private httpGetService: HttpGetService,
              private pagerService: PagerService) { }

  getAllRegistrants() {
    this.httpGetService.getData('172.16.0.119:8080/registrant/all')
      .subscribe((response) => {
        this.allRegistrants = response;
        console.log(this.allRegistrants);
      });
  }
  ngOnInit() {
  }

}
