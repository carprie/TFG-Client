import { Component, HostListener, OnInit } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ColorHelper } from '@swimlane/ngx-charts';
import { HttpClient } from '@angular/common/http';
import { IndexDataService } from '../services/IndexService/index-data.service';


@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent {

  datosPIB: any = [];
  datosTemp: any = [];
  view: [number, number] = [1000, 200];
  public getScreenWidth: any;
  public getScreenHeight: any;

  // options
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  timeline: boolean = true;
  index: String = "1";


  constructor(private http: HttpClient, private serv: IndexDataService) { };

  ngOnInit() {
    this.getScreenWidth = window.innerWidth;
    this.getScreenHeight = window.innerHeight;

    this.view = [this.getScreenWidth / 2.1, this.getScreenHeight / 2];

    this.initialLoad();

    this.serv.updated.subscribe((index: String) => {
      console.log(index)
      this.http.get("http://localhost:8080/datosRegPIB/"+index, { responseType: 'json' }).subscribe((resp: any) => {
      this.datosPIB = resp;
    },
      (error: any) => {
        console.log(error)
      }
    )
      this.http.get("http://localhost:8080/datosRegTemp/"+index, { responseType: 'json' }).subscribe((resp: any) => {
        this.datosTemp = resp;
      },
        (error: any) => {
          console.log(error)
        }
      )
    });

  }

  @HostListener('window:resize', ['$event'])

  onWindowResize() {
    this.getScreenWidth = window.innerWidth / 2.1;
    this.getScreenHeight = window.innerHeight / 2;
    this.view = [this.getScreenWidth, this.getScreenHeight];
  }

  onSelect(event: any) {
    console.log(event);
  }

  initialLoad() {
    let url = "http://localhost:8080/datosPIB/1";

    this.http.get(url, { responseType: 'json' }).subscribe((resp: any) => {
      this.datosPIB = resp;
      console.log("resp");
      console.log(resp);
    },
      (error: any) => {
        console.log(error)
      }
    )
    this.http.get("http://localhost:8080/datosTemp/1", { responseType: 'json' }).subscribe((resp: any) => {
      this.datosTemp = resp;
    },
      (error: any) => {
        console.log(error)
      }
    )
  }

}


