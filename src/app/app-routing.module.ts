import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SmartphonesComponent } from './Smartphone/Smartphone.component';
import { AddSmartphoneComponent } from './add-Smartphone/add-Smartphone.component';
import { UpdateSmartphoneComponent } from './update-Smartphone/update-Smartphone.component';


const routes: Routes = [
  {path: "Smartphones", component : SmartphonesComponent},
  {path: "add-Smartphone", component : AddSmartphoneComponent},
  { path: "", redirectTo: "Smartphones", pathMatch: "full" },
  {path: "updateSmartphone/:id", component: UpdateSmartphoneComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
