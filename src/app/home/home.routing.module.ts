import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home.component';
import { AgmCoreModule } from '@agm/core';
import { HeaderCarouselComponent } from './header-carousel/header-carousel.component';
import { AboutRestaurantComponent } from './about-restaurant/about-restaurant.component';
import { SearchPipe } from '../pipes/search-pipes';

const homeRoute: Routes = [
  	{ path: '', component: HomeComponent },
];

@NgModule({
  imports: [
    SharedModule,
    AgmCoreModule,
  	RouterModule.forRoot(homeRoute)
  ],
  exports: [RouterModule],
  declarations: [
    HomeComponent,
    HeaderCarouselComponent,
    AboutRestaurantComponent,
    SearchPipe
  ],
  providers: []
})

export class HomeRoutingModule { }