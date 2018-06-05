import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {Conductor, ConductorService} from "../conductor.service";
import {ConductorService1} from "../conductor/conductor-service1";

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

  textoGrilla:string;

arregloDatos=[];
  mensajeDatos = [];
  datosConductores = [];

  constructor(private condutorservicio: ConductorService1) {
  }
  ngOnInit() {
    this.condutorservicio.mensajeActual.subscribe(mensaje => this.mensajeDatos = mensaje);
    this.mostrarElementos();
  }

  ngOnChanges(propiedadesActualizadas) {
    console.log('Algo', propiedadesActualizadas);
  }

  clickEnBoton(){
    this.textoGrilla='aaaa';
  }

  enviarDatos(index) {
    this.datosConductores = [];
    this.datosConductores.push(this.mensajeDatos[index]);
    this.condutorservicio.cambiarMensaje2(this.datosConductores);
    this.mostrarElementos();
  }

  mostrarElementos() {

    const mostrarTarjeta = <HTMLFormElement>document.getElementById('card');
    return mostrarTarjeta;


  }
}
