import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Subject } from 'rxjs/Subject';

@Injectable()
export class HttpGetService {
  constructor(private httpGet: HttpClient) { }

  getData(api: string) {
    return this.httpGet.get(api);
  }
}
