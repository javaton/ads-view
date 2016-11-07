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
var car_service_1 = require('../../services/car.service');
var AdDescrptionPage = (function () {
    function AdDescrptionPage(carService) {
        this.carService = carService;
        this.carService = carService;
    }
    AdDescrptionPage.prototype.getDataFromServer = function () {
        var _this = this;
        this.carService.getCars().subscribe(function (data) { return _this.carDetails = data; }, // put the data returned from the server in our variable
        function (// put the data returned from the server in our variable
            error) { return console.log("Error HTTP GET Service    @@@@@@  "); }, // in case of failure show this message
        function () { return console.log("Job Done Get carDetails !"); });
        this.carService.findAdvertiser('daca').subscribe(function (data) { return _this.advertiserDetails = data; }, // put the data returned from the server in our variable
        function (// put the data returned from the server in our variable
            error) { return console.log("Error HTTP GET Service   advertiserDetails @@@@@@  "); }, // in case of failure show this message
        function () { return console.log("Job Done Get advertiserDetails!"); });
    };
    AdDescrptionPage.prototype.ngOnInit = function () {
        this.getDataFromServer();
    };
    AdDescrptionPage = __decorate([
        core_1.Component({
            selector: 'decription-page',
            providers: [car_service_1.CarService],
            template: "\n  <div class=\"container\">\n\n        <div class=\"row\">\n\n           <left-menu></left-menu>\n              <div class=\"thumbnail\">      \n                 <div class=\"col-md-9\">\n                   <h1 class=\"text-center\">{{carDetails?.title}}</h1>\n                    <div class=\"row\">\n                        <div class=\"col-md-6\">\n                         <p>Marka: <b>Mercedesn Benz</b></p>\n                         <p>Tip: <b> CLS 500</b></p>\n                         <p> Godiste: <b> {{carDetails?.year}}</b></p>\n                         <p>Gorivo: <b> {{carDetails?.fuelType}}</b></p>\n                         <p>Menjac: <b> {{carDetails?.typePransmision}}</b></p>\n                         <p>Kilometraza: <b>{{carDetails?.mileage}}</b></p>\n                         <p>Kubikaza: {{carDetails?.enginePower}}</p>\n                        </div>\n                        \n                        <div class=\"col-md-4\">\n                             \n                             <p>Prodavac: <b>{{advertiserDetails?.name}}</b></p>\n                             <p>Procenjna vrednost: <b>{{carDetails?.estimatedPrice}}</b></p>\n                             <p>Pocetna cena: <b>{{carDetails?.startPrice}}</b></p>\n                             <p>Lokacija predmeta: <b>{{advertiserDetails?.city}}</b></p>\n                             <p>Datum licitacije: <b>{{carDetails?.dueDate}}</b></p>\n                             <p>Kontakt telefon: <b>{{advertiserDetails?.phineNumber}}</b></p>\n                             \n                        </div>\n                 \n                   </div>\n                   <h3 class=\"text-center\">Opis</h3>\n                    <p>{{carDetails?.description}}</p>\n                    <central-slider></central-slider>\n                </div>\n                \n            </div>\n            \n        </div> \n    "
        }), 
        __metadata('design:paramtypes', [car_service_1.CarService])
    ], AdDescrptionPage);
    return AdDescrptionPage;
}());
exports.AdDescrptionPage = AdDescrptionPage;
//# sourceMappingURL=addescrption.component.js.map