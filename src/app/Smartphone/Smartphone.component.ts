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
      {idSmartphone : 1, modelSmartphone : "Samsung", nomSmartphone : "Galaxy S23 Ultra", prixSmartphone : 5800, dateCreation : new Date("02/17/2023"), classe : {idClasse : 1, nomClasse : "Flagship"}},
      {idSmartphone : 2, modelSmartphone : "Apple", nomSmartphone : "Iphone 15 Pro Max", prixSmartphone : 6799, dateCreation : new Date("09/22/2023"), classe : {idClasse : 1, nomClasse : "Flagship"}},
      {idSmartphone : 3, modelSmartphone : "Google", nomSmartphone :"Pixel 8 Pro", prixSmartphone : 4800, dateCreation : new Date("10/18/2023"), classe : {idClasse : 2, nomClasse : "Mid-Range"}},
      {idSmartphone : 4, modelSmartphone : "Huawei", nomSmartphone :"P60 Pro ", prixSmartphone : 3146, dateCreation : new Date("03/31/2023"), classe : {idClasse : 3, nomClasse : "Low Budget"}}
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
