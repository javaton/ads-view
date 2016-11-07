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
var AdHomePage = (function () {
    function AdHomePage() {
    }
    AdHomePage = __decorate([
        core_1.Component({
            selector: 'home-page-ad',
            template: "\n    <div class=\"col-sm-4 col-lg-4 col-md-4\">\n        <div class=\"thumbnail\">\n            <img src=\"assets/img/img_mock_2.jpg\" alt=\"\">\n            <div class=\"caption\">\n                <h4 class=\"pull-right\">$24.99</h4>\n                <h4><a href=\"#\">Yugo florida 123</a>\n                </h4>\n                <p>Prodaje se yugo florida 1988...<a target=\"_blank\" href=\"http://www.bootsnipp.com\">Bootsnipp - http://bootsnipp.com</a>.</p>\n            </div>\n            <div class=\"ratings\">\n                <p class=\"pull-right\">15 reviews</p>\n                <p>\n                    <span class=\"glyphicon glyphicon-star\"></span>\n                    <span class=\"glyphicon glyphicon-star\"></span>\n                    <span class=\"glyphicon glyphicon-star\"></span>\n                    <span class=\"glyphicon glyphicon-star\"></span>\n                    <span class=\"glyphicon glyphicon-star\"></span>\n                </p>\n            </div>\n        </div>\n    </div>\n    <!--    <div ngIf=\"ad\" class=\"col-sm-4 col-lg-4 col-md-4\">\n                   <div class=\"thumbnail\">\n                       <img src=\"{{ad.img_url}}\" alt=\"\">\n                       <div class=\"caption\">\n                           <h4 class=\"pull-right\">{{ad.start_price}}</h4>\n                           <h4><a href=\"#\">{{ad.title}}</a>\n                           </h4>\n                           <p>{{ad.short_desc}}</p>\n                       </div>\n                       <div class=\"ratings\">\n                           <p class=\"pull-right\">{{ad.seller}}</p>\n\n                               <p>{{ad.due_date}}</p>\n\n                       </div>\n                   </div>\n               </div> -->\n\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], AdHomePage);
    return AdHomePage;
}());
exports.AdHomePage = AdHomePage;
//# sourceMappingURL=ad.component.js.map