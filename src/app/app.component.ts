import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MonProjet';
  nom="mortadha";
  prenom="jouini";

  status:boolean=true;

  Click(){
    this.nom=this.nom=="jjj"?"mortadha":"jjj";
    
  }
}
