import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {Conductor, ConductorService} from "../conductor.service";

@Component({
  selector: 'app-grilla',
  templateUrl: './grilla.component.html',
  styleUrls: ['./grilla.component.css']
})
export class GrillaComponent implements OnInit, OnChanges{
  @Input() nombreDescripcion:string;
  @Input() apellidoDescripcion:string;
  @Output() dioClickEnEstado: EventEmitter<boolean> = new EventEmitter();
  @Input() nombres:string;
  @Input() apellidos: string;
  @Input() fechaNacimiento: string;
  @Input() numeroAutos: number;
  @Input() licenciaValida: boolean;
  @Input() urlImagen:string;
  @Input() valorBotonCrear='';
  contador:number;
  card:string;
  arregloNuevo: Conductor[];
  constructor(private conductor:ConductorService) {
  }
  ngOnInit() {

  }
  ngOnChanges(propiedadesActualizadas) {
    console.log('Algo', propiedadesActualizadas);
  }
  crearConductores(nombresForm, apellidosForm, fechaForm, numeroAutosForm, licenciaForm){
    this.conductor.anadirCondutores(nombresForm, apellidosForm, fechaForm, numeroAutosForm, licenciaForm, 1);
    console.log(this.conductor.conductoresArreglo);
    this.card=this.colocarValor();
    this.arregloNuevo=this.conductor.devolverArreglo();
    this.clickEnBoton();
  }
  limpiar() {
    this.nombres="";
    this.apellidos="";
    this.numeroAutos=0;
    this.fechaNacimiento="";
    this.licenciaValida=false;
  }
  hizoClickEnEstado() {
    this.dioClickEnEstado.emit(true);
  }
  colocarValor(){
    return this.nombres+'  '+ this.apellidos+ '  ';
  }

  clickEnBoton(){
    return this.nombres;
  }
}
