import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the GlobaldataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GlobaldataProvider {
  public user_name: string;
  public language: string;
  constructor(public http: HttpClient) {
    
  }

}
