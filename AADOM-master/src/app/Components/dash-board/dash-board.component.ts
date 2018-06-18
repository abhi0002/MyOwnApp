import { Component, OnInit } from '@angular/core';
import { PagerService } from '../../Services/pager.service';
import { HttpGetService } from '../../Services/http-get.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CanComponentDeactivate } from '../../Services/deactivate-route.service';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit, CanComponentDeactivate {

  public pieChartLabels: string[] = ['success', 'fail'];
  public pieChartType = 'pie';
  public pieChartEventData: number[] = [0 , 0];
  public pieChartRegistrantData: number[] = [0 , 0];
  // public chartColors: any[] = [
  //   {
  //     backgroundColor: ['#FF7360', '#6FC8CE', '#FAFFF2', '#FFFCC4', '#B9E8E0']
  //   }];

  constructor(
    private pagerService: PagerService,
    private getHTTP: HttpGetService) { }


  // array of all items to be paged
  allItems: any;

  // pager object
  pager: any = {};

  // paged items
  pagedItems: any[];

  // getAllData
  eventResults: any;
  registrantResults: any;


  // Get EVENTS and REGISTRANTS data
  getEventsData() {
    this.getHTTP.getData('http://172.16.0.119:8080/event/counts')
      .subscribe((response) => {
        this.eventResults = response;
        console.log('All Data' + this.eventResults.status);
        if (this.eventResults.status === 200) {
          console.log(this.eventResults.responseData);
          const respData = this.eventResults.responseData;
          this.pieChartEventData = [respData.successStatus , respData.failedStatus];
        }
      });
  }
  getRegistrantsData() {
    this.getHTTP.getData('http://172.16.0.119:8080/registrant/counts')
      .subscribe((response) => {
        this.registrantResults = response;
        console.log('All Data' + this.registrantResults.status);
        if (this.registrantResults.status === 200) {
          console.log(this.registrantResults.responseData);
          const respData = this.registrantResults.responseData;
          this.pieChartRegistrantData = [respData.successStatus , respData.failedStatus];
        }
      });
  }

  // chart events
  public chartClicked(e: any): void {
    console.log(e);
  }
  public chartHovered(e: any): void {
    console.log(e);
  }

  // pagination events
  setPage(page: number) {
    // get pager object from service
    this.pager = this.pagerService.getPager(this.allItems.length, page);

    // get current page of items
    this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }
  ngOnInit() {
    this.getEventsData();
    this.getRegistrantsData();
  }

  canDeactivate():  Observable<boolean> | Promise<boolean> | boolean {
    return false;
  }
}
