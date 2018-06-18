import { Component, OnInit, Inject } from '@angular/core';
import { HttpGetService } from '../../Services/http-get.service';
import { PagerService } from '../../Services/pager.service';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';


@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {

  users: any;
  registrants: any;

  flagEvent: boolean;
  flagif: boolean;
  flagelse: boolean;
  sectionFlag = false;

  allUsers: any;
  allRegistrants: any;
  // pager object
  pager: any = {};
  pagerRegistrants: any = {};
  // paged items
  pagedItems: any[];
  pagedRegistrants: any[];


  constructor(
    private httpGet: HttpGetService,
    private pagerService: PagerService,
    public dialog: MatDialog
  ) { }

  openDialog(msg: string) {
    const dialogRef = this.dialog.open(DialogContentTableComponent, {
        height: '350px',
        width: '350px',
        data: {
        ErrorDetails: msg
        // weblinkId: wid
      }
    });
    // this.getRegistrantForEvents(id);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  getAllData() {
    this.httpGet.getData('http://172.16.0.119:8080/event/all')
      .subscribe((response) => {
        this.users = response;
        this.allUsers = this.users.responseData;
        console.log(this.allUsers);
        this.flagEvent = true;
        this.setPageEvents(1);
      });
  }
  getRegistrantForEvents(eventId) {
    this.httpGet.getData('http://172.16.0.119:8080/registrant/' + eventId)
      .subscribe((response) => {
        this.registrants = response;
        this.allRegistrants = this.registrants.responseData;
        console.log(this.allRegistrants);
        if (this.allRegistrants.length === 0) {
          this.flagelse  = true;
        } else {
          this.flagif = true;
          this.setPage(1);
        }
      });
  }
  ngOnInit() {
    this.flagif = false;
    this.flagEvent = false;
    console.log('out' + this.flagEvent);
    this.getAllData();
  }
  setPageEvents(page: number) {
    this.pager = this.pagerService.getPager(this.allUsers.length, page);
    console.log(this.allUsers.length);
    this.pagedItems = this.allUsers.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }
  setPage(page: number) {
    this.pagerRegistrants = this.pagerService.getPager(this.allRegistrants.length, page);
    console.log(this.allRegistrants.length);
    this.pagedRegistrants = this.allRegistrants.slice(this.pagerRegistrants.startIndex, this.pagerRegistrants.endIndex + 1);
  }

}

@Component({
  selector: 'app-dialog-content',
  templateUrl: 'dialog-content.html',
})
export class DialogContentTableComponent {
  errorMsg: string;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }
  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
    this.errorMsg = this.data.ErrorDetails;
    }

}
