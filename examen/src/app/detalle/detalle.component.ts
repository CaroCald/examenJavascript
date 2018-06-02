import {Component, Input, OnInit} from '@angular/core';
import {Conductor, ConductorService} from "../conductor.service";
import {GrillaComponent} from "../grilla/grilla.component";

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
botonCargar:string;
detalles:string;
  constructor(public conductor: ConductorService) { }

  ngOnInit() {
    this.detalles='AQUI VA ESO';
  }


colocarValor(){
    console.log(this.conductor.conductoresArreglo.toString());
    this.botonCargar=this.conductor.conductoresArreglo[0].nombre;
}


}
