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
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
require('rxjs/add/operator/map');
var CarService = (function () {
    function CarService(http) {
        this.http = http;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.car_http_url = 'http://localhost:9080/car'; // URL to web api
        this.advertiser_http_url = 'http://localhost:9090';
        this.ad_http_url = 'http://localhost:9080/';
    }
    CarService.prototype.getCars = function () {
        return this.http.get(this.car_http_url)
            .map(function (res) { return res.json(); });
    };
    CarService.prototype.findPremijumAd = function () {
        return this.http.get(this.ad_http_url + '/v1/find')
            .map(function (res) { return res.json(); });
    };
    CarService.prototype.findAdvertiser = function (advertiser_code) {
        return this.http.get(this.advertiser_http_url + '/advertiser?code=' + advertiser_code)
            .map(function (res) { return res.json(); });
    };
    CarService.prototype.extractData = function (res) {
        var body = res.json();
        return body.data;
    };
    CarService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable_1.Observable.throw(errMsg);
    };
    CarService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], CarService);
    return CarService;
}());
exports.CarService = CarService;
//# sourceMappingURL=car.service.js.map