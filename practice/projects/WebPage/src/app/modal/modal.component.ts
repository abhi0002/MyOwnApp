import {Component} from '@angular/core';
import {NgxSmartModalService} from 'ngx-smart-modal';

@Component({
  selector: 'app-modal-basic',
  templateUrl: './modal.component.html'
})
export class ModalComponent {
  constructor(public ngxSmartModalService: NgxSmartModalService) {
  }
}
