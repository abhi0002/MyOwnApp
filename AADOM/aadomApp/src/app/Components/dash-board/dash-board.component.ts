import { Component, OnInit } from '@angular/core';
import { PagerService } from '../../Services/pager.service';
import { HttpGetService } from '../../Services/http-get.service';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit {

  constructor(
    private pagerService: PagerService,
    private http: HttpGetService ) { }


    // array of all items to be paged
    allItems: any;

    // pager object
    pager: any = {};

    // paged items
    pagedItems: any[];

    ngOnInit() {
        // get dummy data
        this.http.getData ('https://jsonplaceholder.typicode.com/posts')
               .subscribe(data => {
                this.allItems = data;
                this.setPage(1);
                console.log(this.allItems);

            });
    }

    setPage(page: number) {
        // get pager object from service
        this.pager = this.pagerService.getPager(this.allItems.length, page);

        // get current page of items
        this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
    }

}
