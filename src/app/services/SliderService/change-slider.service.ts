import { HttpClient } from '@angular/common/http';
import { Injectable,EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChangeSliderService {

  updated: EventEmitter<number>;
  constructor(private http: HttpClient) {
    this.updated = new EventEmitter<number>();
  }

   update(v:number) {

    this.updated.emit(v);
  }
}
