import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ConductorService} from "../conductor.service";

@Component({
  selector: 'app-grilla',
  templateUrl: './grilla.component.html',
  styleUrls: ['./grilla.component.css']
})
export class GrillaComponent implements OnInit {
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

  constructor(private conductor:ConductorService) {

  }



  ngOnInit() {

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
