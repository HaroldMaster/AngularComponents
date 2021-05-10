import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { RememberComponent } from './main/remember/remember.component';
import {FormsModule} from '@angular/forms';
import { MensajeAutenticacionComponent } from './main/mensaje-autenticacion/mensaje-autenticacion.component'

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    RememberComponent,
    MensajeAutenticacionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
