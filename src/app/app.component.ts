import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TranslateService } from '@ngx-translate/core';
import { faUndo, faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute, Router } from '@angular/router';
import { ChangeSliderService } from './services/SliderService/change-slider.service';
import { LanguageSliderService } from './services/LanguageService/language-slider.service';
import { Title } from '@angular/platform-browser';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  faUndo = faUndo;
  faArrowRight = faArrowRight;
  faArrowLeft = faArrowLeft;
  sliderContinuous= true; 
  title= "ExtrapolApp";

  translate: TranslateService;
  constructor(private http: HttpClient,
     translate: TranslateService,
     private router: Router,
     private route: ActivatedRoute,
     private serv: ChangeSliderService,
     private lanServ: LanguageSliderService, 
     private titulo: Title 
     ) { 
      titulo.setTitle("Sistema de visualización");
      this.translate=translate;
    // this language will be used as a fallback when a translation isn't found in the current language
    this.translate.setDefaultLang('es');
    translate.addLangs(['es', 'en']);
    // the lang to use, if the lang isn't available, it will use the current loader to get them
   translate.use('es');

   translate.onLangChange.subscribe((change) => {
    //console.log('langChange', change);
    })
  };

  getTranslation(str: any) {
    
      return  this.translate.instant(str);
    
  }

  changeLanguage( ){
    if (this.translate.getDefaultLang()=='en'){
      this.translate.use('es');
      this.translate.setDefaultLang('es');
      this.lanServ.update('es');
    } 
    else{
      this.translate.use('en');
      this.translate.setDefaultLang('en');
      this.lanServ.update('en');
    }
  }
  reset(){
    window.location.reload();
  }

  undo(){
    alert("TODO: Undo");
  }
  redo(){
    alert("TODO: Redo");
  }

  changeSlider(){
    this.sliderContinuous= !this.sliderContinuous;
    if(this.sliderContinuous){
      this.serv.update(0.01);
    }else {
    this.serv.update(1);
    }
  }

  ngOnInit(){

  }

  ngOnChanges(){
    
  
  }
  resetPage(){
   
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['./']);
  }); 
  
  }


}


