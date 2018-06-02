import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ConductorService} from "../conductor.service";

@Component({
  selector: 'app-grilla',
  templateUrl: './grilla.component.html',
  styleUrls: ['./grilla.component.css']
})
export class GrillaComponent implements OnInit {

  constructor(private conductor:ConductorService) {

  }
  @Input() nombres:string;
  @Input() apellidos: string;
  @Input() fechaNacimiento: string;
  @Input() numeroAutos: number;
  @Input() licenciaValida: boolean;
  @Input() chasis:number;
  @Input() nombreMarca: string;
  @Input() colorUno: string;
  @Input() colorDos: string;
  @Input() nombreModelo:string;
  @Input() anio: number;
  @Input() idConductor:number;
  @Input() urlImagen:string;
  @Input() valorBotonCrear='';
  @Output() dioClickEnEstado: EventEmitter<boolean> = new EventEmitter();
    contador:number;


  ngOnInit() {
    this.cargarDescripciones();
  }

  public crearConductores(nombresForm, apellidosForm, fechaForm, numeroAutosForm, licenciaForm){
    this.contador++;
    this.nombres=nombresForm;
    this.apellidos= apellidosForm;
    this.fechaNacimiento=fechaForm;
    this.numeroAutos=numeroAutosForm;
    this.licenciaValida=licenciaForm;
    this.conductor.anadirCondutores(this.nombres, this.apellidos, this.fechaNacimiento, this.numeroAutos, this.licenciaValida, this.contador);
    console.log(this.conductor.conductoresArreglo);
  }

  cargarDescripciones(){
   this.valorBotonCrear=this.conductor.conductoresArreglo.toString();
  }

  hizoClickEnEstado() {
    this.dioClickEnEstado.emit(true);
  }

}
