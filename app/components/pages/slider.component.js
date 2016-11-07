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
var SliderControler = (function () {
    function SliderControler() {
    }
    SliderControler = __decorate([
        core_1.Component({
            selector: 'central-slider',
            template: "<div class=\"row carousel-holder\">\n\n               <div class=\"col-md-12 \">\n                   <div id=\"carousel-example-generic\" class=\"carousel slide\" data-ride=\"carousel\">\n                       <ol class=\"carousel-indicators\">\n                           <li data-target=\"#carousel-example-generic\" data-slide-to=\"0\" class=\"active\"></li>\n                           <li data-target=\"#carousel-example-generic\" data-slide-to=\"1\"></li>\n                           <li data-target=\"#carousel-example-generic\" data-slide-to=\"2\"></li>\n                       </ol>\n                       <div class=\"carousel-inner\">\n                           <div class=\"item active\">\n                               <img class=\"slide-image\" src=\"assets/img/cls_mock_1.jpg\" alt=\"\">\n                           </div>\n                           <div class=\"item\">\n                               <img class=\"slide-image\" src=\"assets/img/cls_mock_2.jpg\" alt=\"\">\n                           </div>\n                           <div class=\"item\">\n                               <img class=\"slide-image\" src=\"assets/img/cls_mock_3.jpg\" alt=\"\">\n                           </div>\n                       </div>\n                       <a class=\"left carousel-control\" href=\"#carousel-example-generic\" data-slide=\"prev\">\n                           <span class=\"glyphicon glyphicon-chevron-left\"></span>\n                       </a>\n                       <a class=\"right carousel-control\" href=\"#carousel-example-generic\" data-slide=\"next\">\n                           <span class=\"glyphicon glyphicon-chevron-right\"></span>\n                       </a> \n                   </div>\n               </div>\n\n           </div>"
        }), 
        __metadata('design:paramtypes', [])
    ], SliderControler);
    return SliderControler;
}());
exports.SliderControler = SliderControler;
//# sourceMappingURL=slider.component.js.map