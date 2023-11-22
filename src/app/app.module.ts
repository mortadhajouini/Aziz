import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { SmartphonesComponent } from './Smartphone/Smartphone.component';
import { AddSmartphoneComponent } from './add-Smartphone/add-Smartphone.component';
import { UpdateSmartphoneComponent } from './update-Smartphone/update-Smartphone.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';

@NgModule({
  declarations: [
    AppComponent,
    SmartphonesComponent,
    SmartphonesComponent,
    AddSmartphoneComponent,
    UpdateSmartphoneComponent,
    LoginComponent,
    ForbiddenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
