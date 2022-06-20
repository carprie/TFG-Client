import { HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class IndexDataService {

  updated: EventEmitter<String>;
  constructor(private http: HttpClient) {
    this.updated = new EventEmitter<String>();
  }

   update(v: number[]) {
    var re = /,/gi; 
    var str = v.toString();
    var newstr = str.replace(re, "-"); 
    var re1 = "."; 
    var newstr1 = newstr.replace(re1, ":"); 
    this.updated.emit(newstr1);
  }

}
