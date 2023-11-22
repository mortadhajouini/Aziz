import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SmartphonesComponent } from './Smartphone/Smartphone.component';
import { AddSmartphoneComponent } from './add-Smartphone/add-Smartphone.component';
import { UpdateSmartphoneComponent } from './update-Smartphone/update-Smartphone.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { SmartphoneGuard } from './smartphone.guard';

const routes: Routes = [
  {path: "Smartphones", component : SmartphonesComponent},
  {path: "add-Smartphone", component : AddSmartphoneComponent},
  { path: "", redirectTo: "Smartphones", pathMatch: "full" },
  {path: "updateSmartphone/:id", component: UpdateSmartphoneComponent},
  {path: 'login', component: LoginComponent},
  {path: 'app-forbidden', component: ForbiddenComponent},
  {path : "add-Smartphone", component : AddSmartphoneComponent, canActivate:[SmartphoneGuard]},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
