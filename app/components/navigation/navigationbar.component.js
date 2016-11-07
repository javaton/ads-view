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
var NavigationBar = (function () {
    function NavigationBar() {
    }
    NavigationBar = __decorate([
        core_1.Component({
            selector: 'nav-bar',
            template: "\n  <nav class=\"navbar navbar-inverse navbar-fixed-top\" role=\"navigation\">\n      <div class=\"container\">\n          <!-- Brand and toggle get grouped for better mobile display -->\n          <div class=\"navbar-header\">\n              <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\">\n                  <span class=\"sr-only\">Toggle navigation</span>\n                  <span class=\"icon-bar\"></span>\n                  <span class=\"icon-bar\"></span>\n                  <span class=\"icon-bar\"></span>\n              </button>\n              <a class=\"navbar-brand\" href=\"#\">Legija smisli ime!!!</a>\n          </div>\n          <!-- Collect the nav links, forms, and other content for toggling -->\n          <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n              <ul class=\"nav navbar-nav\">\n                  <li>\n                      <a routerLink=\"/aboutus\">O nama</a>\n                      <router-outlet></router-outlet>\n                  </li>\n                  <li>\n                      <a href=\"#\">Usluge</a>\n                  </li>\n                  <li>\n                      <a href=\"#\">Kontakt</a>\n                  </li>\n                   <li>\n                      <a href=\"ad-desc\">Test proizvod</a>\n                  </li>\n              </ul>\n          </div>\n          <!-- /.navbar-collapse -->\n      </div>\n      <!-- /.container -->\n  </nav>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], NavigationBar);
    return NavigationBar;
}());
exports.NavigationBar = NavigationBar;
//# sourceMappingURL=navigationbar.component.js.map