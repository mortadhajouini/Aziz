import { Component } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { SmartphoneService } from '../services/Smartphone.service';
import { Smartphone } from '../model/Smartphone.model';
import { Classe } from '../model/classe.model';


@Component({
  selector: 'app-update-Smartphone',
  templateUrl: './update-Smartphone.component.html',
  styleUrls: ['./update-Smartphone.component.css'],
  styles: []

})
export class UpdateSmartphoneComponent {
  classes! : Classe[];

  updatedCatId! : number;
  currentSmartphone = new Smartphone();
  constructor(private activatedRoute: ActivatedRoute,private SmartphoneService: SmartphoneService,private router :Router  ) { }
  ngOnInit() {
  // console.log(this.route.snapshot.params.id);
  this.classes = this.SmartphoneService.listeCategories();
  this.currentSmartphone = this.SmartphoneService.consulterSmartphone(this.activatedRoute.snapshot. params['id']);
  this.updatedCatId=this.currentSmartphone.classe.idClasse;
  console.log(this.currentSmartphone);

  }

  updateSmartphone()
{ 
  console.log(this.currentSmartphone);
  this.currentSmartphone.classe=this.SmartphoneService.consulterCategorie(this.updatedCatId);

this.SmartphoneService.updateSmartphone(this.currentSmartphone);
this.router.navigate(['Smartphones']);

}


}
