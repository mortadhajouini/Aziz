import { Component } from '@angular/core';
import { Smartphone } from '../model/Smartphone.model';
import { SmartphoneService } from '../services/Smartphone.service';

@Component({
  selector: 'app-Smartphones',
  templateUrl: './Smartphone.component.html',
  styleUrls: ['./Smartphone.component.css']
})
export class SmartphonesComponent {
  Smartphones : Smartphone[]; //un tableau de Smartphone

  constructor(private SmartphoneService: SmartphoneService) {
    this.Smartphones = [
      {idSmartphone : "Samsung", nomSmartphone : "Galaxy S23 Ultra", prixSmartphone : 5800, dateCreation : new Date("02/17/2023")},
      {idSmartphone : "Apple", nomSmartphone : "Iphone 15 Pro Max", prixSmartphone : 6799, dateCreation : new Date("09/22/2023")},
      {idSmartphone : "Google", nomSmartphone :"Pixel 8 Pro", prixSmartphone : 4800, dateCreation : new Date("10/18/2023")},
      {idSmartphone : "Huawei", nomSmartphone :"P60 Pro ", prixSmartphone : 3146, dateCreation : new Date("03/31/2023")}
       ];
       this.Smartphones = SmartphoneService.listeSmartphones();
      
    }
    supprimerSmartphone(p: Smartphone)
    {
    //console.log(p);
    let conf = confirm("Etes-vous sûr ?");
    if (conf)
    this.SmartphoneService.supprimerSmartphone(p);
    }

}
