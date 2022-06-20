import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
//import { GraficoComponent } from './componets/grafico/grafico.component';
import { SlidesComponent } from './slides/slides.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import { ChartComponent } from './chart/chart.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { IndexDataService } from "./services/IndexService/index-data.service"
import { ChangeSliderService } from './services/SliderService/change-slider.service';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}


@NgModule({
  declarations: [
    AppComponent,
    //GraficoComponent,
    SlidesComponent,
    ChartComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    FontAwesomeModule,
    MatSliderModule,
    HttpClientModule, 
    NgxChartsModule, 
    NgxSliderModule,
    RouterModule.forRoot([]),
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      },
      defaultLanguage: 'es'
  })
  ],
  providers: [IndexDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
