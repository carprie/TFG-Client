//import { Component, OnInit, Output } from '@angular/core';
import { LabelType, Options } from '@angular-slider/ngx-slider';
import { Component, OnInit, Input, ChangeDetectionStrategy, EventEmitter, Output } from '@angular/core';
import { IndexDataService } from '../services/IndexService/index-data.service';
import { AppComponent } from '../app.component';
import { ChangeSliderService } from '../services/SliderService/change-slider.service';
import { LanguageSliderService } from '../services/LanguageService/language-slider.service';


interface SliderDetails {
  value: number;
  highValue: number;
  options: Options;
  //floor: number;
  //ceil: number;
  //stepsArray : [string, string, string];
}


@Component({
  selector: 'app-slides',
  templateUrl: './slides.component.html',
  styleUrls: ['./slides.component.scss'],
  providers: [AppComponent]
})

export class SlidesComponent implements OnInit {

  constructor(
    private serv: IndexDataService,
    private servChange: ChangeSliderService,
    private gTranslate: AppComponent,
    private lanServ: LanguageSliderService
  ) {

  }

  step: number = 0.01;
  ngOnInit(): void {

    this.updateS();
    this.servChange.updated.subscribe((cont: number) => {
      this.step = cont;
      this.updateSliders(cont);
      if (cont == 1) {
        this.sliderEvent();
      }
      this.ngOnInit();
    })

    this.lanServ.updated.subscribe((lan: boolean) => {
      //this.lang=lan;
      console.log("slider valor idioma ", lan);
      if(lan){
      this.updateSlidersESP(this.step); 
    }else {
      console.log("Entra slider valor idioma ENG ", lan);
      this.updateSlidersENG(this.step); 
    }
      this.ngOnInit();
    })

  }

  sliderH1: SliderDetails =
    {
      value: 0,
      highValue: 2,
      options: {
        floor: 0,
        ceil: 2,
        step: this.step,
        showSelectionBar: true,
        translate: (value: number): string => {
          switch (Math.round(value)) {
            case 0: return "Media                            "
            case 1: return "Alta                             "
            case 2: return "Ilimitada                        "
            default: return ""
          }
        }
      }
    }

  sliderH2: SliderDetails =
    {
      value: 0,
      highValue: 2,
      options: {
        floor: 0,
        ceil: 2,
        step: this.step,
        showSelectionBar: true,
        translate: (value: number): string => {
          switch (Math.round(value)) {
            case 0: return "Ninguno                              "
            case 1: return "Medios                               "
            case 2: return "Alto                                 "
            default: return ""
          }
        }
      }
    }
  sliderH3: SliderDetails =
    {
      value: 0,
      highValue: 4,
      options: {
        floor: 0,
        ceil: 4,
        showTicksValues: false,
        step: this.step,
        showSelectionBar: true,
        translate: (value: number): string => {
          switch (Math.round(value)) {
            case 0: return "Menor crecimiento que el previsto por las tendencias históricas"
            case 1: return  "Continuación de las tendencias históricas                        "
            case 2: return "Mayor crecimiento que lo previsto en las tendencias históricas"
            case 3: return "Limitar la población en 5.000 millones de personas para 2050"
            case 4: return "Limitar la población en 7.000 millones de personas para 2050"
            default: return ""
          }
        }
      }
    }


  sliderM1: SliderDetails =
    {
      value: 0,
      highValue: 4,
      options: {
        floor: 0,
        ceil: 4,
        step: this.step,
        showSelectionBar: true,
        translate: (value: number): string => {
          switch (Math.round(value)) {
            case 0: return  "Menor crecimiento que el histórico                        "
            case 1: return "Continuación de las tendencias históricas                  "
            case 2: return "Mayor crecimiento que el histórico                           "
            case 3: return "Fijar el PIB per capita en 5.000$/persona/año para 2050"
            case 4: return "Fijar el PIB per capita en 7.000$/persona/año para 2050 "
            default: return ""
          }
        }
      }
    }


  sliderM2: SliderDetails =
    {
      value: 0,
      highValue: 1,
      options: {
        floor: 0,
        ceil: 1,
        step: this.step,
        showSelectionBar: true,
        translate: (value: number): string => {
          switch (Math.round(value)) {
            case 0: return "No                                              "
            case 1: return "Sí                                               "
            default: return ""
          }
        }
      }
    }


  sliderM3: SliderDetails =
    {
      value: 0,
      highValue: 2,
      options: {
        floor: 0,
        ceil: 2,
        step: this.step,
        showSelectionBar: true,
        translate: (value: number): string => {
          switch (Math.round(value)) {
            case 0: return "Disminución de la capacidad instalada                               "
            case 1: return  "Mantener constante la capacidad actual                             "
            case 2: return "Aumento de la capacidad instalada                                   "
            default: return ""
          }
        }
      }
    }

  sliderM4: SliderDetails =
    {
      value: 0,
      highValue: 2,
      options: {
        floor: 0,
        ceil: 2,
        step: this.step,
        showSelectionBar: true,
        translate: (value: number): string => {
          switch (Math.round(value)) {
            case 0: return "Menor crecimiento que las tendencias históricas                    "
            case 1: return "Continuación de las tendencias históricas                          "
            case 2: return "Mayor crecimiento que las tendencias históricas                    "
            default: return ""
          }
        }
      }
    }


  sliderM5: SliderDetails =
    {
      value: 0,
      highValue: 2,
      options: {
        floor: 0,
        ceil: 2,
        step: this.step,
        showSelectionBar: true,
        translate: (value: number): string => {
          switch (Math.round(value)) {
            case 0: return  "Producción constante en los niveles actuales                      "
            case 1: return "Continuar crecimiento históricoedios                               "
            case 2: return "Mayor crecimiento que la tendencia histórica                       "
            default: return ""
          }
        }
      }
    }


  sliderM6: SliderDetails =
    {
      value: 0,
      highValue: 1,
      options: {
        floor: 0,
        ceil: 1,
        step: this.step,
        showSelectionBar: true,
        translate: (value: number): string => {
          switch (Math.round(value)) {
            case 0: return "Continuación de la dependencia del petróleo                        "
            case 1: return "Transición a vehículos a gas y eléctricos                          "
            default: return ""
          }
        }
      }
    }


  sliderM7: SliderDetails =
    {
      value: 0,
      highValue: 2,
      options: {
        floor: 0,
        ceil: 2,
        step: this.step,
        showSelectionBar: true,
        translate: (value: number): string => {
          switch (Math.round(value)) {
            case 0: return  "Menor crecimiento que las tendencias históricas                     "
            case 1: return "Continuar la tendencia de mejora históricas                          "
            case 2: return "Mayor crecimiento que la tendencia histórica                         "
            default: return ""
          }
        }
      }
    }


  sliderM8: SliderDetails =
    {
      value: 0,
      highValue: 1,
      options: {
        floor: 0,
        ceil: 1,
        step: this.step,
        showSelectionBar: true,
        translate: (value: number): string => {
          switch (Math.round(value)) {
            case 0: return "Mantener constantes los porcentajes actuales                  "
            case 1: return "Mejorar los porcentajes actuales                              "
            default: return ""
          }
        }
      }
    }


  sliderM9: SliderDetails =
    {
      value: 0,
      highValue: 2,
      options: {
        floor: 0,
        ceil: 2,
        step: this.step,
        showSelectionBar: true,
        translate: (value: number): string => {
          switch (Math.round(value)) {
            case 0: return "Reducción respecto a la tendencia actual                         "
            case 1: return "Continuación de la tendencia actual                                "
            case 2: return "Aumento respecto a la tendencia actual                            "
            default: return ""
          }
        }
      }
    }
  sliders = [this.sliderH1, this.sliderH2, this.sliderH3, this.sliderM1, this.sliderM2, this.sliderM3, this.sliderM4, this.sliderM5, this.sliderM6, this.sliderM7, this.sliderM8, this.sliderM9]


  ngOnChange() { }

  updateSliders(cont: number) {
    const newSliderH1: SliderDetails = {
      value: Math.round(this.sliderH1.value),
      highValue: 2,
      options: this.sliderH1.options
      // options: {
      //   floor: 0,
      //   ceil: 2,
      //   //showTicks: true,
      //   step: cont,
      //   showSelectionBar: true,
      //   showTicksValues: false,
      //   translate: (value: number): string => {
      //     switch (Math.round(value)) {
      //       case 0: return this.gTranslate.getTranslation('aH1');
      //       case 1: return this.gTranslate.getTranslation('bH1');
      //       case 2: return this.gTranslate.getTranslation('cH1');
      //       default: return ""
      //     }
      //   }
      // }

    }
    this.sliderH1 = newSliderH1;


    const newsliderH2: SliderDetails =
    {
      value: Math.round(this.sliderH2.value),
      highValue: 2,
      options: this.sliderH2.options
      // options: {
      //   floor: 0,
      //   ceil: 2,
      //   //showTicks: true,
      //   step: cont,
      //   showSelectionBar: true,
      //   showTicksValues: false,
      //   translate: (value: number): string => {
      //     switch (Math.round(value)) {
      //       case 0: return this.gTranslate.getTranslation('aH2');
      //       case 1: return this.gTranslate.getTranslation('bH2');
      //       case 2: return this.gTranslate.getTranslation('cH2');
      //       //case 3: return "d"
      //       default: return ""
      //     }
      //   }
      // }
    }

    this.sliderH2 = newsliderH2;

    const newsliderH3: SliderDetails =
    {
      value: Math.round(this.sliderH3.value),
      highValue: 4,
      options: this.sliderH3.options
    }

    this.sliderH3 = newsliderH3;

    const newsliderM1: SliderDetails =
    {
      value: Math.round(this.sliderM1.value),
      highValue: 4,
      options: this.sliderM1.options
    }
    this.sliderM1 = newsliderM1;

    const newsliderM2: SliderDetails =
    {
      value: Math.round(this.sliderM2.value),
      highValue: 1,
      options: this.sliderM2.options
    }

    this.sliderM2 = newsliderM2;

    const newsliderM3: SliderDetails =
    {
      value: Math.round(this.sliderM3.value),
      highValue: 2,
      options: this.sliderM3.options
    }

    this.sliderM3 = newsliderM3;

    const newsliderM4: SliderDetails =
    {
      value: Math.round(this.sliderM4.value),
      highValue: 2,
      options: this.sliderM4.options
    }

    this.sliderM4 = newsliderM4;

    const newsliderM5: SliderDetails =
    {
      value: Math.round(this.sliderM5.value),
      highValue: 2,
      options: this.sliderM5.options
    }

    this.sliderM5 = newsliderM5;

    const newsliderM6: SliderDetails =
    {
      value: Math.round(this.sliderM6.value),
      highValue: 1,
      options: this.sliderM6.options
    }

    this.sliderM6 = newsliderM6;


    const newsliderM7: SliderDetails =
    {
      value: Math.round(this.sliderM7.value),
      highValue: 2,
      options: this.sliderM7.options
    }

    this.sliderM7 = newsliderM7;

    const newsliderM8: SliderDetails =
    {
      value: Math.round(this.sliderM8.value),
      highValue: 1,
      options: this.sliderM8.options
    }

    this.sliderM8 = newsliderM8;


    const newsliderM9: SliderDetails =
    {
      value: Math.round(this.sliderM9.value),
      highValue: 2,
      options: this.sliderM9.options
    }

    this.sliderM9 = newsliderM9;

  }


  updateSlidersESP(cont: number) {
    const newSliderH1: SliderDetails = {
      value: this.sliderH1.value,
      highValue: 2,
      options: {
        floor: 0,
        ceil: 2,
        step: cont,
        showSelectionBar: true,
        showTicksValues: false,
        translate: (value: number): string => {
          switch (Math.round(value)) {
            case 0: return "Media     "
            case 1: return "Alta           "
            case 2: return "Ilimitada     "
            default: return ""
          }
        }
      }

    }
    this.sliderH1 = newSliderH1;


    const newsliderH2: SliderDetails =
    {
      value: this.sliderH2.value,
      highValue: 2,
      options: {
        floor: 0,
        ceil: 2,
        step: cont,
        showSelectionBar: true,
        showTicksValues: false,
        translate: (value: number): string => {
          switch (Math.round(value)) {
            case 0: return "Ninguno                           "
            case 1: return "Medios                            "
            case 2: return "Alto                              "
            default: return ""
          }
        }
      }
    }

    this.sliderH2 = newsliderH2;

    const newsliderH3: SliderDetails =
    {
      value: this.sliderH3.value,
      highValue: 4,
      options: {
        floor: 0,
        ceil: 4,
        showTicksValues: false,
        step: cont,
        showSelectionBar: true,
        translate: (value: number): string => {
          switch (Math.round(value)) {
            case 0: return "Menor crecimiento que el previsto por las tendencias históricas"
            case 1: return  "Continuación de las tendencias históricas                     "
            case 2: return "Mayor crecimiento que lo previsto en las tendencias históricas"
            case 3: return "Limitar la población en 5.000 millones de personas para 2050"
            case 4: return "Limitar la población en 7.000 millones de personas para 2050"
            default: return ""
          }
        }
      }
    }


    this.sliderH3 = newsliderH3;

    const newsliderM1: SliderDetails =
    {
      value: this.sliderM1.value,
      highValue: 4,
      options: {
        floor: 0,
        ceil: 4,
        step: cont,
        showSelectionBar: true,
        translate: (value: number): string => {
          switch (Math.round(value)) {
            case 0: return  "Menor crecimiento que el histórico                        "
            case 1: return "Continuación de las tendencias históricas                  "
            case 2: return "Mayor crecimiento que el histórico                         "
            case 3: return "Fijar el PIB per capita en 5.000$/persona/año para 2050"
            case 4: return "Fijar el PIB per capita en 7.000$/persona/año para 2050 "
            default: return ""
          }
        }
      }
    }
    this.sliderM1 = newsliderM1;

    const newsliderM2: SliderDetails =
    {
      value: this.sliderM2.value,
      highValue: 1,
      options: {
        floor: 0,
        ceil: 1,
        step: cont,
        showSelectionBar: true,
        translate: (value: number): string => {
          switch (Math.round(value)) {
            case 0: return "No                                              "
            case 1: return "Sí                                               "
            default: return ""
          }
        }
      }
    }

    this.sliderM2 = newsliderM2;

    const newsliderM3: SliderDetails =
    {
      value: this.sliderM3.value,
      highValue: 2,
      options: {
        floor: 0,
        ceil: 2,
        step: cont,
        showSelectionBar: true,
        translate: (value: number): string => {
          switch (Math.round(value)) {
            case 0: return "Disminución de la capacidad instalada                            "
            case 1: return  "Mantener constante la capacidad actual                             "
            case 2: return "Aumento de la capacidad instalada                               "
            default: return ""
          }
        }
      }
    }

    this.sliderM3 = newsliderM3;

    const newsliderM4: SliderDetails =
    {
      value:this.sliderM4.value,
      highValue: 2,
      options: {
        floor: 0,
        ceil: 2,
        step: cont,
        showSelectionBar: true,
        translate: (value: number): string => {
          switch (Math.round(value)) {
            case 0: return "Menor crecimiento que las tendencias históricas                   "
            case 1: return "Continuación de las tendencias históricas                          "
            case 2: return "Mayor crecimiento que las tendencias históricas                 "
            default: return ""
          }
        }
      }
    }

    this.sliderM4 = newsliderM4;

    const newsliderM5: SliderDetails =
    {
      value: this.sliderM5.value,
      highValue: 2,
      options: {
        floor: 0,
        ceil: 2,
        step: cont,
        showSelectionBar: true,
        translate: (value: number): string => {
          switch (Math.round(value)) {
            case 0: return  "Producción constante en los niveles actuales                     "
            case 1: return "Continuar crecimiento históricoedios                             "
            case 2: return "Mayor crecimiento que la tendencia histórica                       "
            default: return ""
          }
        }
      }
    }

    this.sliderM5 = newsliderM5;

    const newsliderM6: SliderDetails =
    {
      value:this.sliderM6.value,
      highValue: 1,
      options: {
        floor: 0,
        ceil: 1,
        step: cont,
        showSelectionBar: true,
        translate: (value: number): string => {
          switch (Math.round(value)) {
            case 0: return "Continuación de la dependencia del petróleo                        "
            case 1: return "Transición a vehículos a gas y eléctricos                         "
            default: return ""
          }
        }
      }
    }

    this.sliderM6 = newsliderM6;


    const newsliderM7: SliderDetails =
    {
      value:this.sliderM7.value,
      highValue: 2,
      options: {
        floor: 0,
        ceil: 2,
        step: cont,
        showSelectionBar: true,
        translate: (value: number): string => {
          switch (Math.round(value)) {
            case 0: return  "Menor crecimiento que las tendencias históricas                     "
            case 1: return "Continuar la tendencia de mejora históricas                          "
            case 2: return "Mayor crecimiento que la tendencia histórica                "
            default: return ""
          }
        }
      }
    }

    this.sliderM7 = newsliderM7;

    const newsliderM8: SliderDetails =
    {
      value: this.sliderM8.value,
      highValue: 1,
      options: {
        floor: 0,
        ceil: 1,
        step: cont,
        showSelectionBar: true,
        translate: (value: number): string => {
          switch (Math.round(value)) {
            case 0: return "Mantener constantes los porcentajes actuales                  "
            case 1: return "Mejorar los porcentajes actuales                              "
            default: return ""
          }
        }
      }
    }

    this.sliderM8 = newsliderM8;


    const newsliderM9: SliderDetails =
    {
      value: this.sliderM9.value,
      highValue: 2,
      options: {
        floor: 0,
        ceil: 2,
        //showTicks: true,
        step: cont,
        showSelectionBar: true,
        translate: (value: number): string => {
          switch (Math.round(value)) {
            case 0: return "Reducción respecto a la tendencia actual                           "
            case 1: return "Continuación de la tendencia actual                                "
            case 2: return "Aumento respecto a la tendencia actual                             "
            default: return ""
          }
        }
      }
    }

    this.sliderM9 = newsliderM9;

  }

  updateSlidersENG(cont: number) {
    const newSliderH1: SliderDetails = {
      value: this.sliderH1.value,
      highValue: 2,
      options: {
        floor: 0,
        ceil: 2,
        step: cont,
        showSelectionBar: true,
        showTicksValues: false,
        translate: (value: number): string => {
          console.log(Math.round(value));
          switch (Math.round(value)) {
            case 0:
             return "Average    "
            case 1:return "High           "
            case 2:return "Unlimitated         "
            default: return ""
          }
        }
      }

    }
    this.sliderH1 = newSliderH1;


    const newsliderH2: SliderDetails =
    {
      value: this.sliderH2.value,
      highValue: 2,
      options: {
        floor: 0,
        ceil: 2,
        step: cont,
        showSelectionBar: true,
        showTicksValues: false,
        translate: (value: number): string => {
          switch (Math.round(value)) {
            case 0: return "None                         "
            case 1: return "Medium                       "
            case 2: return "High                         "
            default: return ""
          }
        }
      }
    }

    this.sliderH2 = newsliderH2;

    const newsliderH3: SliderDetails =
    {
      value: this.sliderH3.value,
      highValue: 4,
      options: {
        floor: 0,
        ceil: 4,
        showTicksValues: false,
        step: cont,
        showSelectionBar: true,
        translate: (value: number): string => {
          switch (Math.round(value)) {
            case 0: return "Lower growth than predicted by historical trends"
            case 1: return "Continuation of historical trends               "
            case 2: return "Higher growth than expected in historical trends"
            case 3: return  "Limit the world population to 5 billion people by 2050"
            case 4: return "Limit the world population to 7 billion people by 2050"
            default: return ""
          }
        }
      }
    }


    this.sliderH3 = newsliderH3;

    const newsliderM1: SliderDetails =
    {
      value: this.sliderM1.value,
      highValue: 4,
      options: {
        floor: 0,
        ceil: 4,
        step: cont,
        showSelectionBar: true,
        translate: (value: number): string => {
          switch (Math.round(value)) {
            case 0: return"Less growth than the historical                  "
            case 1: return "Continuation of historical trends                "
            case 2: return "Higher growth than historical                    "
            case 3: return  "Set GDP per capita at $5,000/person/year by 2050 "
            case 4: return "Set GDP per capita at $7,000/person/year by 2050 "
            default: return ""
          }
        }
      }
    }
    this.sliderM1 = newsliderM1;

    const newsliderM2: SliderDetails =
    {
      value: this.sliderM2.value,
      highValue: 1,
      options: {
        floor: 0,
        ceil: 1,
        step: cont,
        showSelectionBar: true,
        translate: (value: number): string => {
          switch (Math.round(value)) {
            case 0: return  "No                                           "
            case 1: return "Yes                                           "
            default: return ""
          }
        }
      }
    }

    this.sliderM2 = newsliderM2;

    const newsliderM3: SliderDetails =
    {
      value: this.sliderM3.value,
      highValue: 2,
      options: {
        floor: 0,
        ceil: 2,
        step: cont,
        showSelectionBar: true,
        translate: (value: number): string => {
          switch (Math.round(value)) {
            case 0: return "Decrease in installed capacity                 "
            case 1: return "Keep current capacity constant                 "
            case 2: return "Increase in installed capacity                 "
            default: return ""
          }
        }
      }
    }

    this.sliderM3 = newsliderM3;

    const newsliderM4: SliderDetails =
    {
      value:this.sliderM4.value,
      highValue: 2,
      options: {
        floor: 0,
        ceil: 2,
        step: cont,
        showSelectionBar: true,
        translate: (value: number): string => {
          switch (Math.round(value)) {
            case 0: return "Less growth than historical trends             "
            case 1: return "Continuation of historical trends              "
            case 2: return "Higher growth than historical trends            "
            default: return ""
          }
        }
      }
    }

    this.sliderM4 = newsliderM4;

    const newsliderM5: SliderDetails =
    {
      value: this.sliderM5.value,
      highValue: 2,
      options: {
        floor: 0,
        ceil: 2,
        step: cont,
        showSelectionBar: true,
        translate: (value: number): string => {
          switch (Math.round(value)) {
            case 0: return "Constant production at current levels           "
            case 1: return "Continue historical growth media                "
            case 2: return "Higher growth than historical trend              "
            default: return ""
          }
        }
      }
    }

    this.sliderM5 = newsliderM5;

    const newsliderM6: SliderDetails =
    {
      value:this.sliderM6.value,
      highValue: 1,
      options: {
        floor: 0,
        ceil: 1,
        step: cont,
        showSelectionBar: true,
        translate: (value: number): string => {
          switch (Math.round(value)) {
            case 0: return  "Continuation of dependence on oil                  "
            case 1: return "Transition to gas and electric vehicles             "
            default: return ""
          }
        }
      }
    }

    this.sliderM6 = newsliderM6;


    const newsliderM7: SliderDetails =
    {
      value:this.sliderM7.value,
      highValue: 2,
      options: {
        floor: 0,
        ceil: 2,
        step: cont,
        showSelectionBar: true,
        translate: (value: number): string => {
          switch (Math.round(value)) {
            case 0: return "Less growth than historical trends                  "
            case 1: return "Continue the historical improvement trend           "
            case 2: return "Higher growth than the historical trend             "
            default: return ""
          }
        }
      }
    }

    this.sliderM7 = newsliderM7;

    const newsliderM8: SliderDetails =
    {
      value: this.sliderM8.value,
      highValue: 1,
      options: {
        floor: 0,
        ceil: 1,
        step: cont,
        showSelectionBar: true,
        translate: (value: number): string => {
          switch (Math.round(value)) {
            case 0: return "Keep current percentages constant                   "
            case 1: return "Improve current percentages                          "
            default: return ""
          }
        }
      }
    }

    this.sliderM8 = newsliderM8;


    const newsliderM9: SliderDetails =
    {
      value: this.sliderM9.value,
      highValue: 2,
      options: {
        floor: 0,
        ceil: 2,
        step: cont,
        showSelectionBar: true,
        translate: (value: number): string => {
          switch (Math.round(value)) {
            case 0: return "Reduction from current trend                           "
            case 1: return "Continuation of the current trend                       "
            case 2: return "Increase from current trend                            "
            default: return ""
          }
        }
      }
    }

    this.sliderM9 = newsliderM9;

  }

  updateS() {
    const newSliderH1: SliderDetails = {
      value: this.sliderH1.value,
      highValue: 2,
      options: this.sliderH1.options
     

    }
    this.sliderH1 = newSliderH1;


    const newsliderH2: SliderDetails =
    {
      value: this.sliderH2.value,
      highValue: 2,
      options: this.sliderH2.options
      
    }

    this.sliderH2 = newsliderH2;

    const newsliderH3: SliderDetails =
    {
      value: this.sliderH3.value,
      highValue: 4,
      options: this.sliderH3.options
    }

    this.sliderH3 = newsliderH3;

    const newsliderM1: SliderDetails =
    {
      value: this.sliderM1.value,
      highValue: 4,
      options: this.sliderM1.options
    }
    this.sliderM1 = newsliderM1;

    const newsliderM2: SliderDetails =
    {
      value: this.sliderM2.value,
      highValue: 1,
      options: this.sliderM2.options
    }

    this.sliderM2 = newsliderM2;

    const newsliderM3: SliderDetails =
    {
      value: this.sliderM3.value,
      highValue: 2,
      options: this.sliderM3.options
    }

    this.sliderM3 = newsliderM3;

    const newsliderM4: SliderDetails =
    {
      value: this.sliderM4.value,
      highValue: 2,
      options: this.sliderM4.options
    }

    this.sliderM4 = newsliderM4;

    const newsliderM5: SliderDetails =
    {
      value: this.sliderM5.value,
      highValue: 2,
      options: this.sliderM5.options
    }

    this.sliderM5 = newsliderM5;

    const newsliderM6: SliderDetails =
    {
      value:this.sliderM6.value,
      highValue: 1,
      options: this.sliderM6.options
    }

    this.sliderM6 = newsliderM6;


    const newsliderM7: SliderDetails =
    {
      value: this.sliderM7.value,
      highValue: 2,
      options: this.sliderM7.options
    }

    this.sliderM7 = newsliderM7;

    const newsliderM8: SliderDetails =
    {
      value: this.sliderM8.value,
      highValue: 1,
      options: this.sliderM8.options
    }

    this.sliderM8 = newsliderM8;


    const newsliderM9: SliderDetails =
    {
      value: this.sliderM9.value,
      highValue: 2,
      options: this.sliderM9.options
    }

    this.sliderM9 = newsliderM9;

  }


  sliderEvent() {
    let slidersValue = [this.sliderM9.value, this.sliderM8.value, this.sliderM7.value, this.sliderM6.value, this.sliderM5.value,
    this.sliderM4.value, this.sliderM3.value, this.sliderM2.value, this.sliderM1.value, this.sliderH3.value, this.sliderH2.value, this.sliderH1.value]
    this.serv.update(slidersValue)
  }

}
