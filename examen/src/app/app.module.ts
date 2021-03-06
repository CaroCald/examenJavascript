import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { GrillaComponent } from './grilla/grilla.component';
import { DetalleComponent } from './detalle/detalle.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button'
import {FormsModule} from "@angular/forms";import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

import {CardModule} from 'primeng/card';
import {TableModule} from 'primeng/table';
import {ConductorService} from "./conductor.service";
import {ButtonModule} from 'primeng/button';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { TablaComponent } from './tabla/tabla.component';
import {CarouselModule} from "primeng/primeng";
import {MatRadioModule} from "@angular/material";
@NgModule({
  declarations: [
    AppComponent,
    GrillaComponent,
    DetalleComponent,
    CabeceraComponent,
    TablaComponent,
  ],
  imports: [
    BrowserModule, FormsModule, CardModule,TableModule, ButtonModule, NgbModule.forRoot(),
    BrowserAnimationsModule, MatFormFieldModule, MatInputModule, MatButtonModule, CarouselModule, MatRadioModule,
  ],
  providers: [ConductorService, GrillaComponent ],
  bootstrap: [AppComponent, CabeceraComponent]
})
export class AppModule { }
