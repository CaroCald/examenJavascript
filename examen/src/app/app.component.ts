import {Component, Input} from '@angular/core';
import {ConductorService} from "./conductor.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
constructor(condutor: ConductorService
            ){

}
  arregloConductores=[
    {
      nombres:'',
      apellidos: '',
      fechaNacimiento:'',
      numeroAutos: '',
      licenciaValida: '',
      urlImagen: 'https://s3-us-west-1.amazonaws.com/suzukiautos/models/home/gallery/9f62e3b4a2825910542eb54e8a5c148bcc61df9e.png',
    },

  ];
  detalles=[
    {
      chasis:0,
      nombreMarca: '',
      colorUno:'',
      colorDos: '',
      nombreModelo:'',
      anio: 0,
      idConductor:0
    }
    ]

  alertar(evento) {
    console.log('Evento: ', evento); // true
    alert('DIO CLICK EN ES ESTRENO!!!!!!!!!');
  }

  llenarDescripcion(){

  }

}


