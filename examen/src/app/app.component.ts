import {Component, Input} from '@angular/core';
import {ConductorService} from "./conductor.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
constructor(condutor: ConductorService){
}

  arregloConductores=[
    {
      nombres: 'Arturo Perez',
      apellidos:'',
      fechaNacimiento:'',
      numeroAutos:'',
      licenciaValida:'',
      detalles: [
        {
          chasis: 122,
          nombreMarca: 'Honda',
          colorUno: 'Rojo',
          colorDos: 'Verde',
          nombreModelo: 'X199',
          anio: 2015,
          idConductor: 1
        }
      ]
    },
];



  alertar(evento) {
    console.log('Evento: ', evento); // true
    alert('DIO CLICK EN ES ESTRENO!!!!!!!!!');
  }

  llenarDescripcion(){

  }

}


