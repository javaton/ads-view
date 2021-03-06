import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'nav-bar',
  template: `
  <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
      <div class="container">
          <!-- Brand and toggle get grouped for better mobile display -->
          <div class="navbar-header">
              <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                  <span class="sr-only">Toggle navigation</span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
              </button>
              <a class="navbar-brand" href="#">Legija smisli ime!!!</a>
          </div>
          <!-- Collect the nav links, forms, and other content for toggling -->
          <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul class="nav navbar-nav">
                  <li>
                      <a routerLink="/aboutus">O nama</a>
                      <router-outlet></router-outlet>
                  </li>
                  <li>
                      <a href="#">Usluge</a>
                  </li>
                  <li>
                      <a href="#">Kontakt</a>
                  </li>
                   <li>
                      <a href="ad-desc">Test proizvod</a>
                  </li>
              </ul>
          </div>
          <!-- /.navbar-collapse -->
      </div>
      <!-- /.container -->
  </nav>
  `
})
export class NavigationBar { }
