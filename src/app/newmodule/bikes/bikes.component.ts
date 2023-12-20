import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bikes',
  templateUrl: './bikes.component.html',
  styleUrls: ['./bikes.component.css']
})
export class BikesComponent implements OnInit {

  Bikes: string[] = []
  flag: boolean = true

  // method
  constructor() { }

  ngOnInit(): void {
  }

  ShowBikes() {
    if (this.flag == true) {
      this.Bikes = ["Apache RTR 160", "Avenger 220", "RE Himalayan", "Hero Splender", "Yamaha FZ","Yamaha MT15"]
      this.flag = false
    } else {
      this.Bikes = []
      this.flag = true
    }

  }

  ChoosenBike:any;
  Displayinfo(b:string){
      for(let i of this.Bikes){
        if (i===b){
          this.ChoosenBike=i
        }

      }
  }
  remove(){
    this.ChoosenBike=""
    this.Bikes= []
  }
}