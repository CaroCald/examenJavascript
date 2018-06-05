import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {Conductor, ConductorService} from "../conductor.service";
import {GrillaComponent} from "../grilla/grilla.component";

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit , OnChanges{
constructor(public conductor: ConductorService) {

  }
  @Input() chasis:number;
  @Input() nombreMarca: string;
  @Input() colorUno: string;
  @Input() colorDos: string;
  @Input() nombreModelo:string;
  @Input() anio: number;
  @Input() idConductor:number;

  detalles:string;
  chasisDetalle=this.chasis;
  nombreMarcaAuto=this.nombreMarca;
  colorUnoAuto=this.colorUno;
  ngOnInit() {
    //this.detalles= this.colocarValor();
  }
  ngOnChanges(propiedadesActualizadas) {
    console.log('Algo', propiedadesActualizadas);
  }

colocarDetalles(textoChasis,textoNombreMarca, textoColorUno, textoColorDos, textoModelo, textoAnio){
  this.conductor.anadirCondutores(textoChasis,textoNombreMarca, textoColorUno, textoColorDos, textoModelo, textoAnio);
  this.detalles=this.colocarValor();
  this.chasisDetalle=textoChasis;
  this.nombreMarcaAuto=textoNombreMarca;
  this.colorUnoAuto=textoColorUno;
}
colocarValor(){
   return 'Chasis: '+this.chasis +' /n Nombre Marca: ' + this.nombreMarca + ' Color Uno: ' +this.colorUno + 'Color Dos:  '+this.colorDos+ 'Nombre Modelo:  '+this.nombreModelo+ 'Año:  '+this.anio;
}

limpiar(){
    this.chasis=0;
    this.nombreMarca="";
    this.nombreModelo="";
    this.anio=2000;
    this.colorDos="";
    this.colorDos="";
}

  resetForm(form) {
    const resetForm = <HTMLFormElement>document.getElementById(''+form);
    resetForm.reset();
  }
}
