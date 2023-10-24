import { Component } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { SmartphoneService } from '../services/Smartphone.service';
import { Smartphone } from '../model/Smartphone.model';


@Component({
  selector: 'app-update-Smartphone',
  templateUrl: './update-Smartphone.component.html',
  styleUrls: ['./update-Smartphone.component.css'],
  styles: []

})
export class UpdateSmartphoneComponent {
  
  currentSmartphone = new Smartphone();
  constructor(private activatedRoute: ActivatedRoute,private SmartphoneService: SmartphoneService,private router :Router  ) { }
  ngOnInit() {
  // console.log(this.route.snapshot.params.id);
  this.currentSmartphone = this.SmartphoneService.consulterSmartphone(this.activatedRoute.snapshot. params['id']);
  console.log(this.currentSmartphone);
  }

  updateSmartphone()
{ //console.log(this.currentSmartphone);

this.SmartphoneService.updateSmartphone(this.currentSmartphone);
this.router.navigate(['Smartphones']);

}


}
