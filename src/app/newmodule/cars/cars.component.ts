import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  CarsBikes: string[] = []
  Flag: boolean = true
  ChoosenCarBike: any;
  // method
  constructor() { }

  ngOnInit(): void {
  }

  Showcars() {
    // this.ChoosenCarBike="";
    if (this.Flag == true) {
      this.CarsBikes = ["Hond City", "Audi A1", "BMW x5", "Hyundai i20", "TATA Punch", "Swift"]
    }
  }
  ShowBikes() {
    this.ChoosenCarBike="";
    if (this.Flag == true) {
      this.CarsBikes = ["Apache RTR 160", "Avenger 220", "RE Himalayan", "Hero Splender", "Yamaha FZ", "Yamaha MT15"]
    }
  }
  // ChoosenCarBike: any;
  Displayinfo(b: string) {
    
        this.ChoosenCarBike ="You have choosen "+ b
   
  }
}

