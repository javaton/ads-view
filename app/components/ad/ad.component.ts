import { Component, Input } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

@Component({
    selector: 'home-page-ad',
    template: `
    <div class="col-sm-4 col-lg-4 col-md-4">
        <div class="thumbnail">
            <img src="assets/img/img_mock_2.jpg" alt="">
            <div class="caption">
                <h4 class="pull-right">$24.99</h4>
                <h4><a href="#">Yugo florida 123</a>
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
    <!--    <div ngIf="ad" class="col-sm-4 col-lg-4 col-md-4">
                   <div class="thumbnail">
                       <img src="{{ad.img_url}}" alt="">
                       <div class="caption">
                           <h4 class="pull-right">{{ad.start_price}}</h4>
                           <h4><a href="#">{{ad.title}}</a>
                           </h4>
                           <p>{{ad.short_desc}}</p>
                       </div>
                       <div class="ratings">
                           <p class="pull-right">{{ad.seller}}</p>

                               <p>{{ad.due_date}}</p>

                       </div>
                   </div>
               </div> -->

    `
})
export class AdHomePage {

    // @Input()
    // ad: AdHomePage;
    //
    // // id : number;
    // title: string = 'djolewww';
    // short_desc : string;
    // descrption : string;
    // img_url : string;
    // start_price :string;
    // due_date : string;
    // seller : string;


    // constructor(id: number, title: string, short_desc: string, descrption: string, img_url: string, start_price: string, due_date: string, seller: string) {
    //     // this.id = id;
    //     this.title = title;
    //     this.short_desc = short_desc;
    //     this.descrption = descrption;
    //     this.img_url = img_url;
    //     this.start_price = start_price;
    //     this.due_date = due_date;
    //     this.seller = seller;
    // }
    }
