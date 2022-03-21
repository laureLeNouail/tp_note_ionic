import { Component } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor() {}


  ngOnInit(){
    this.printCurrentPosition();
    let date = new Date();

    console.log(date);
  }

  async printCurrentPosition(){
    const coordinates = await Geolocation.getCurrentPosition();
  
    let latitude =coordinates.coords.latitude;
  }

}
