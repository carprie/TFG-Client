import { HttpClient } from '@angular/common/http';
import { Injectable,EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageSliderService {

  updated: EventEmitter<String>;
  constructor(private http: HttpClient) {
    this.updated = new EventEmitter<String>();
  }

   update(v:String) {
    
    this.updated.emit(v);
  }
}
