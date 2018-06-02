import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GrillaComponent } from './grilla/grilla.component';
import { DetalleComponent } from './detalle/detalle.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    GrillaComponent,
    DetalleComponent,
    CabeceraComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, MatFormFieldModule, MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent, CabeceraComponent]
})
export class AppModule { }
