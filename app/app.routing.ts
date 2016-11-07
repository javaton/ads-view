import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutUs } from './components/about/aboutus.component';
import { HomePage } from './components/pages/homepage.component';
import { AdDescrptionPage } from './components/ad/addescrption.component';


const appRoutes: Routes = [
  {
    path: 'aboutus',
    component: AboutUs
  },
  {
    path: 'home',
    component: HomePage
  },
  {
    path: 'ad-desc',
    component: AdDescrptionPage
  },
  {
  path: '',
  redirectTo: '/home',
  pathMatch: 'full'
}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
