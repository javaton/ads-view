import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'left-menu',
    template: `<div class="col-md-3">
           <div class="list-group">
               <a href="#" class="list-group-item">Nekretnine</a>
               <a href="#" class="list-group-item">Automobili</a>
               <a href="#" class="list-group-item">Radne masine i oprema</a>
               <a href="#" class="list-group-item">Ostalo</a>
           </div>
       </div> `
})
export class LeftMenu {

}
