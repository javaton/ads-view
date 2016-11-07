"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var app_component_1 = require('./app.component');
var navigationbar_component_1 = require('./components/navigation/navigationbar.component');
var aboutus_component_1 = require('./components/about/aboutus.component');
var homepage_component_1 = require('./components/pages/homepage.component');
var addescrption_component_1 = require('./components/ad/addescrption.component');
var ad_component_1 = require('./components/ad/ad.component');
var slider_component_1 = require('./components/pages/slider.component');
var http_1 = require('@angular/http');
var leftmenu_component_1 = require('./components/navigation/leftmenu.component');
var car_service_1 = require('./services/car.service');
var app_routing_1 = require('./app.routing');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_1.routing,
                http_1.HttpModule
            ],
            declarations: [
                app_component_1.AppComponent,
                navigationbar_component_1.NavigationBar,
                aboutus_component_1.AboutUs,
                homepage_component_1.HomePage,
                ad_component_1.AdHomePage,
                addescrption_component_1.AdDescrptionPage,
                leftmenu_component_1.LeftMenu,
                slider_component_1.SliderControler
            ],
            providers: [
                car_service_1.CarService,
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map