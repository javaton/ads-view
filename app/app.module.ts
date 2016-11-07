import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { NavigationBar }   from './components/navigation/navigationbar.component';
import { AboutUs } from './components/about/aboutus.component';
import { HomePage } from './components/pages/homepage.component';
import { AdDescrptionPage } from './components/ad/addescrption.component';
import { AdHomePage } from './components/ad/ad.component';
import { SliderControler } from './components/pages/slider.component';
import { HttpModule} from '@angular/http';
import { LeftMenu }   from './components/navigation/leftmenu.component';
import { CarService } from './services/car.service';

import {TranslateModule} from 'ng2-translate/ng2-translate';

import { routing } from './app.routing';


@NgModule({
  imports:      [
      BrowserModule,
    routing,
    HttpModule
  ],
  declarations: [
    AppComponent,
    NavigationBar,
    AboutUs,
    HomePage,
    AdHomePage,
    AdDescrptionPage,
    LeftMenu,
    SliderControler
    ],
  providers: [
    CarService,
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
