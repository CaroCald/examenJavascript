import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Conductor, ConductorService} from "./conductor.service";
import {ConductorService1} from "./conductor/conductor-service1";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
constructor(private condutor: ConductorService1){
}
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
  @Input() chasis:number;
  @Input() nombreMarca: string;
  @Input() colorUno: string;
  @Input() colorDos: string;
  @Input() nombreModelo:string;
  @Input() anio: number;
  @Input() idConductor:number;
  card:string;
  arregloNuevo: Conductor[];
  mensaje=[];
  arregloConductores=[];
  arregloDetalles=[];
  detalles:string;
  chasisDetalle=this.chasis;
  nombreMarcaAuto=this.nombreMarca;
  colorUnoAuto=this.colorUno;

  ngOnInit() {
    this.condutor.mensajeActual.subscribe(mensaje => this.mensaje = mensaje);

  }

  mostrarInformacion(event, formData) {
    console.log(event);
    console.log(formData.value);

  }

  agregarDatos(nombre, apellidos, fecha, num, licencia) {
    this.arregloConductores.push(
      {
        'nombres': nombre.value,
        'apellidos': apellidos.value,
        'fechaNacimiento': fecha.value,
        'numeroAutos': num.value,
        'licenciaAutos':licencia,
        'autos': []
      });

    this.mandarDatos();
    this.card=nombre.value;
    console.log(this.arregloConductores);
  }
  clickEnBoton(){
    this.detalles=this.nombres;
    console.log(this.detalles);
  }

  colocarDetalles(textoChasis,textoNombreMarca, textoColorUno, textoColorDos, textoModelo, textoAnio){
    this.arregloDetalles.push(textoChasis,textoNombreMarca, textoColorUno, textoColorDos, textoModelo, textoAnio);
    this.chasisDetalle=textoChasis;
    this.nombreMarcaAuto=textoNombreMarca;
    this.colorUnoAuto=textoColorUno;
  }
  mandarDatos() {

    this.condutor.cambiarMensaje(this.arregloConductores);
  }


  alertar(evento) {
    console.log('Evento: ', evento); // true
    alert('DIO CLICK EN ES ESTRENO!!!!!!!!!');
  }

  llenarDescripcion(){

  }

  limpiar(){
    this.nombres='';
    this.apellidos='';
    this.numeroAutos=0;
    this.licenciaValida=false;
  }
}


