import { Injectable } from '@angular/core';
import { Smartphone } from '../model/Smartphone.model';
import { Classe } from '../model/classe.model';

@Injectable({
providedIn: 'root'
})
export class SmartphoneService {
Smartphones : Smartphone[]; //un tableau de Smartphone
categories : Classe[];

constructor() {
  this.categories = [ {idClasse : 1, nomClasse : "Flagship"},
  {idClasse : 2, nomClasse : "Mid-Range"},
  {idClasse : 3, nomClasse : "Low Budget"}]; 
this.Smartphones = [
  {idSmartphone :1,modelSmartphone : "Samsung", nomSmartphone : "Galaxy S23 Ultra", prixSmartphone : 5800, dateCreation : new Date("02/17/2023"), classe : {idClasse : 1, nomClasse : "Flagship"}},
  {idSmartphone :2,modelSmartphone : "Apple", nomSmartphone : "Iphone 15 Pro Max", prixSmartphone : 6799, dateCreation : new Date("09/22/2023"),  classe : {idClasse : 1, nomClasse : "Flagship"}},
  {idSmartphone :3,modelSmartphone : "Google", nomSmartphone :"Pixel 8 Pro", prixSmartphone : 4800, dateCreation : new Date("10/18/2023"), classe : {idClasse : 2, nomClasse : "Mid-Range"}},
  {idSmartphone :4,modelSmartphone : "Huawei", nomSmartphone :"P60 Pro ", prixSmartphone : 3146, dateCreation : new Date("03/31/2023"),classe : {idClasse : 3, nomClasse : "Low Budget"}}
];
}
listeSmartphones():Smartphone[] {
  return this.Smartphones;
}
ajouterSmartphone( prod: Smartphone){
this.Smartphones.push(prod);
}
supprimerSmartphone( prod: Smartphone){
  //supprimer le Smartphone prod du tableau Smartphones
  const index = this.Smartphones.indexOf(prod, 0);
  if (index > -1) {
  this.Smartphones.splice(index, 1);
  }
  //ou Bien
  /* this.Smartphones.forEach((cur, index) => {
  if(prod.modelSmartphone === cur.modelSmartphone) {
  this.Smartphones.splice(index, 1);
  }
  }); */
  }
  Smartphone! : Smartphone;
  consulterSmartphone(id:Number): Smartphone{
    this.Smartphone = this.Smartphones.find(p => p.idSmartphone == id)!;
    return this.Smartphone;
    }

    updateSmartphone(p:Smartphone)
    {
    // console.log(p);
    this.supprimerSmartphone(p);
    this.ajouterSmartphone(p);
    this.trierSmartphones();
    
    }

    trierSmartphones(){
      this.Smartphones = this.Smartphones.sort((n1,n2) => {
      if (n1.idSmartphone! > n2.idSmartphone!) {
      return 1;
      }
      if (n1.idSmartphone! < n2.idSmartphone!) {
      return -1;
      }
      return 0;
      });
      }
    listeCategories():Classe[] {
        return this.categories;
        }
    consulterCategorie(id:number): Classe{ 
        return this.categories.find(cat => cat.idClasse == id)!;
        }
          
      
    


}