import { Component } from '@angular/core';
import { Smartphone } from '../model/Smartphone.model';
import { SmartphoneService } from '../services/Smartphone.service';


@Component({
  selector: 'app-add-Smartphone',
  templateUrl: './add-Smartphone.component.html',
  styleUrls: ['./add-Smartphone.component.css']
})
export class AddSmartphoneComponent {
  newSmartphone = new Smartphone();
  addSmartphone(){
    // console.log(this.newSmartphone);
    this.SmartphoneService.ajouterSmartphone(this.newSmartphone);
    }
    constructor(private SmartphoneService: SmartphoneService) { }

    
}
