import { Component, OnInit, Input } from '@angular/core';
import { CarService } from '../../services/car.service';
import { SliderControler} from "../pages/slider.component";


@Component({
    selector: 'decription-page',
    providers: [CarService],
    template: `
  <div class="container">

        <div class="row">

           <left-menu></left-menu>
              <div class="thumbnail">      
                 <div class="col-md-9">
                   <h1 class="text-center">{{carDetails?.title}}</h1>
                    <div class="row">
                        <div class="col-md-6">
                         <p>Marka: <b>Mercedesn Benz</b></p>
                         <p>Tip: <b> CLS 500</b></p>
                         <p> Godiste: <b> {{carDetails?.year}}</b></p>
                         <p>Gorivo: <b> {{carDetails?.fuelType}}</b></p>
                         <p>Menjac: <b> {{carDetails?.typePransmision}}</b></p>
                         <p>Kilometraza: <b>{{carDetails?.mileage}}</b></p>
                         <p>Kubikaza: {{carDetails?.enginePower}}</p>
                        </div>
                        
                        <div class="col-md-4">
                             
                             <p>Prodavac: <b>{{advertiserDetails?.name}}</b></p>
                             <p>Procenjna vrednost: <b>{{carDetails?.estimatedPrice}}</b></p>
                             <p>Pocetna cena: <b>{{carDetails?.startPrice}}</b></p>
                             <p>Lokacija predmeta: <b>{{advertiserDetails?.city}}</b></p>
                             <p>Datum licitacije: <b>{{carDetails?.dueDate}}</b></p>
                             <p>Kontakt telefon: <b>{{advertiserDetails?.phineNumber}}</b></p>
                             
                        </div>
                 
                   </div>
                   <h3 class="text-center">Opis</h3>
                    <p>{{carDetails?.description}}</p>
                    <central-slider></central-slider>
                </div>
                
            </div>
            
        </div> 
    `
})
export class AdDescrptionPage implements OnInit{
    constructor(private carService : CarService){
        this.carService = carService;
    }

    error : string;
    title : string;
    carDetails : any;
    advertiserDetails : any;

    getDataFromServer(){

        this.carService.getCars().subscribe(
            data => this.carDetails = data, // put the data returned from the server in our variable
            error => console.log("Error HTTP GET Service    @@@@@@  "), // in case of failure show this message
            () => console.log("Job Done Get carDetails !")

        );
        this.carService.findAdvertiser('daca').subscribe(
            data => this.advertiserDetails = data, // put the data returned from the server in our variable
            error => console.log("Error HTTP GET Service   advertiserDetails @@@@@@  "), // in case of failure show this message
            () => console.log("Job Done Get advertiserDetails!")

        );
    }

    ngOnInit(){
        this.getDataFromServer();
    }


}