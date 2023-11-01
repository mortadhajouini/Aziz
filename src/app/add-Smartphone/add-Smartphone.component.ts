import { Component } from '@angular/core';
import { Smartphone } from '../model/Smartphone.model';
import { SmartphoneService } from '../services/Smartphone.service';
import { Router } from '@angular/router';
import { Classe } from '../model/classe.model';




@Component({
  selector: 'app-add-Smartphone',
  templateUrl: './add-Smartphone.component.html',
  styleUrls: ['./add-Smartphone.component.css']
})

export class AddSmartphoneComponent {
  newSmartphone = new Smartphone();
  addSmartphone(){
    // console.log(this.newSmartphone);
    this.newCategorie = 
this.SmartphoneService.consulterCategorie(this.newIdCat);
this.newSmartphone.classe = this.newCategorie;

    this.SmartphoneService.ajouterSmartphone(this.newSmartphone),
    this.router.navigate(['Smartphones']);
    }

  categories! : Classe[];
newIdCat! : number;
newCategorie! : Classe;

    constructor(private SmartphoneService: SmartphoneService,private router :Router ) { }

    ngOnInit() {
      this.categories = this.SmartphoneService.listeCategories();
      }
    
      
}
