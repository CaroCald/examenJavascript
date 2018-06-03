import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {Conductor, ConductorService} from "../conductor.service";
import {GrillaComponent} from "../grilla/grilla.component";

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit , OnChanges{
botonCargar:string;

  constructor(public conductor: ConductorService) { }
  @Input() chasis:number;
  @Input() nombreMarca: string;
  @Input() colorUno: string;
  @Input() colorDos: string;
  @Input() nombreModelo:string;
  @Input() anio: number;
  @Input() idConductor:number;

  detalles:string;
  ngOnInit() {
    //this.detalles= this.colocarValor();
  }
ngOnChanges(seActualizo){

}

colocarDetalles(textoChasis,textoNombreMarca, textoColorUno, textoColorDos, textoModelo, textoAnio){
  this.conductor.anadirCondutores(textoChasis,textoNombreMarca, textoColorUno, textoColorDos, textoModelo, textoAnio)
  this.detalles=this.colocarValor();
}
colocarValor(){
   return this.chasis +'' + this.nombreMarca + '' +this.colorUno + ' '+this.colorDos+ ' '+this.nombreModelo+ ' '+this.anio;
}


}
