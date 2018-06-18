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
  allUsers: any;
  flagEvent: boolean;

  // pager object
  pager: any = {};
  // paged items
  pagedItems: any[];

  constructor(
    private httpGet: HttpGetService,
    private pagerService: PagerService,
    public dialog: MatDialog
  ) { }

  openDialog(onid: number , wid: number) {
    const dialogRef = this.dialog.open(DialogContentTableComponent, {
        data: {
        eventId: onid,
        weblinkId: wid
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
        this.setPage(1);
      });
  }
  ngOnInit() {
    this.flagEvent = false;
    console.log('out' + this.flagEvent);
    this.getAllData();
  }
  setPage(page: number) {
    this.pager = this.pagerService.getPager(this.allUsers.length, page);
    console.log(this.allUsers.length);
    this.pagedItems = this.allUsers.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }

}

@Component({
  selector: 'app-dialog-content',
  templateUrl: 'dialog-content.html',
})
export class DialogContentTableComponent {
  users: any;
  allUsers: any;
  flagif: boolean;
  flagelse: boolean;
  webLinkId: number;
  // pager object
  pager: any = {};
  // paged items
  pagedItems: any[];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private httpGet: HttpGetService,
    private pagerService: PagerService
  ) { }

  getRegistrantForEvents() {
    this.httpGet.getData('http://172.16.0.119:8080/registrant/' + this.data.eventId)
      .subscribe((response) => {
        this.users = response;
        this.allUsers = this.users.responseData;
        console.log(this.allUsers);
        if (this.allUsers) {
          this.flagif = true;
          this.setPage(1);
        } else {
          this.flagelse = true;
        }
      });
  }
  setPage(page: number) {
    this.pager = this.pagerService.getPager(this.allUsers.length, page);
    console.log(this.allUsers.length);
    this.pagedItems = this.allUsers.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }
  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
    this.webLinkId = this.data.weblinkId;
    this.flagif = false;
    this.flagelse = false;
    this.getRegistrantForEvents();
  }

}
