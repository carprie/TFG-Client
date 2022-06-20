import { HttpClient } from '@angular/common/http';
import { Injectable,EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageSliderService {

  updated: EventEmitter<boolean>;
  constructor(private http: HttpClient) {
    this.updated = new EventEmitter<boolean>();
  }

   update(v:boolean) {
    console.log("Entra en servicio ");
    console.log(v);
    this.updated.emit(v);
  }
}
