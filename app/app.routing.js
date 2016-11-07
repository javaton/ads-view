"use strict";
var router_1 = require('@angular/router');
var aboutus_component_1 = require('./components/about/aboutus.component');
var homepage_component_1 = require('./components/pages/homepage.component');
var addescrption_component_1 = require('./components/ad/addescrption.component');
var appRoutes = [
    {
        path: 'aboutus',
        component: aboutus_component_1.AboutUs
    },
    {
        path: 'home',
        component: homepage_component_1.HomePage
    },
    {
        path: 'ad-desc',
        component: addescrption_component_1.AdDescrptionPage
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map