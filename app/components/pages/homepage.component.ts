import {Component, OnInit, Input} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import {AdHomePage} from "../ad/ad.component";
import { SliderControler} from "./slider.component";
//noinspection TypeScriptCheckImport
//import { AdHomePage } from './components/ad/ad.component';


@Component({
  selector: 'home-page',
  template: `
  <!-- Page Content -->
<div class="container">

   <div class="row">

               <left-menu></left-menu>


       <div class="col-md-9">

           <central-slider></central-slider>

           <div class="row">





               <div class="col-sm-4 col-lg-4 col-md-4">
                   <div class="thumbnail">
                       <img src="assets/img/img_mock_2.jpg" alt="">
                       <div class="caption">
                           <h4 class="pull-right">$24.99</h4>
                           <h4><a href="#">Yugo florida</a>
                           </h4>
                           <p>Prodaje se yugo florida 1988...<a target="_blank" href="http://www.bootsnipp.com">Bootsnipp - http://bootsnipp.com</a>.</p>
                       </div>
                       <div class="ratings">
                           <p class="pull-right">15 reviews</p>
                           <p>
                               <span class="glyphicon glyphicon-star"></span>
                               <span class="glyphicon glyphicon-star"></span>
                               <span class="glyphicon glyphicon-star"></span>
                               <span class="glyphicon glyphicon-star"></span>
                               <span class="glyphicon glyphicon-star"></span>
                           </p>
                       </div>
                   </div>
               </div>

               <div class="col-sm-4 col-lg-4 col-md-4">
                   <div class="thumbnail">
                       <img src="assets/img/img_mock_2.jpg" alt="">
                       <div class="caption">
                           <h4 class="pull-right">$64.99</h4>
                           <h4><a href="#">Second Product</a>
                           </h4>
                           <p>This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                       </div>
                       <div class="ratings">
                           <p class="pull-right">12 reviews</p>
                           <p>
                               <span class="glyphicon glyphicon-star"></span>
                               <span class="glyphicon glyphicon-star"></span>
                               <span class="glyphicon glyphicon-star"></span>
                               <span class="glyphicon glyphicon-star"></span>
                               <span class="glyphicon glyphicon-star-empty"></span>
                           </p>
                       </div>
                   </div>
               </div>

               <div class="col-sm-4 col-lg-4 col-md-4">
                   <div class="thumbnail">
                       <img src="assets/img/img_mock_2.jpg" alt="">
                       <div class="caption">
                           <h4 class="pull-right">$74.99</h4>
                           <h4><a href="#">djole</a>
                           </h4>
                           <p>This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                       </div>
                       <div class="ratings">
                           <p class="pull-right">31 reviews</p>
                           <p>
                               <span class="glyphicon glyphicon-star"></span>
                               <span class="glyphicon glyphicon-star"></span>
                               <span class="glyphicon glyphicon-star"></span>
                               <span class="glyphicon glyphicon-star"></span>
                               <span class="glyphicon glyphicon-star-empty"></span>
                           </p>
                       </div>
                   </div>
               </div>

               <div class="col-sm-4 col-lg-4 col-md-4">
                   <div class="thumbnail">
                       <img src="http://placehold.it/320x150" alt="">
                       <div class="caption">
                           <h4 class="pull-right">$84.99</h4>
                           <h4><a href="#">Fourth Product</a>
                           </h4>
                           <p>This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                       </div>
                       <div class="ratings">
                           <p class="pull-right">6 reviews</p>
                           <p>
                               <span class="glyphicon glyphicon-star"></span>
                               <span class="glyphicon glyphicon-star"></span>
                               <span class="glyphicon glyphicon-star"></span>
                               <span class="glyphicon glyphicon-star-empty"></span>
                               <span class="glyphicon glyphicon-star-empty"></span>
                           </p>
                       </div>
                   </div>
               </div>

               <div class="col-sm-4 col-lg-4 col-md-4">
                   <div class="thumbnail">
                       <img src="assets/img/img_mock_4.jpg" alt="">
                       <div class="caption">
                           <h4 class="pull-right">$94.99</h4>
                           <h4><a href="#">Fifth Product</a>
                           </h4>
                           <p>This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                       </div>
                       <div class="ratings">
                           <p class="pull-right">18 reviews</p>
                           <p>
                               <span class="glyphicon glyphicon-star"></span>
                               <span class="glyphicon glyphicon-star"></span>
                               <span class="glyphicon glyphicon-star"></span>
                               <span class="glyphicon glyphicon-star"></span>
                               <span class="glyphicon glyphicon-star-empty"></span>
                           </p>
                       </div>
                   </div>
               </div>

               <div class="col-sm-4 col-lg-4 col-md-4">
                   <h4><a href="#">Like this template?</a>
                   </h4>
                   <p>If you like this template, then check out <a target="_blank" href="http://maxoffsky.com/code-blog/laravel-shop-tutorial-1-building-a-review-system/">this tutorial</a> on how to build a working review system for your online store!</p>
                   <a class="btn btn-primary" target="_blank" href="http://maxoffsky.com/code-blog/laravel-shop-tutorial-1-building-a-review-system/">View Tutorial</a>
               </div>

           </div>

       </div>

   </div>

</div>
        `
})
export class HomePage{

   carDetails= '<home-page-ad></home-page-ad>';


}
