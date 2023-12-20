import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { CarsComponent } from './cars/cars.component';
import { BikesComponent } from './bikes/bikes.component';



@NgModule({
  declarations: [
    HeaderComponent,
    CarsComponent,
    BikesComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HeaderComponent,
    CarsComponent,
    BikesComponent
  ]
})
export class NEWmoduleModule { }
