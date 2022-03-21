import { Component } from '@angular/core';
import { Network } from '@capacitor/network';
import { Toast } from '@capacitor/toast';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})



export class Tab1Page {

  


  constructor() {}

  ngOnInit(){
    this.showStatus();

  }

  
  async showStatus(){
    const status = await Network.getStatus();

    await Toast.show({
      text: "Le réseau est "+status.connectionType,
    });

  } 


}
