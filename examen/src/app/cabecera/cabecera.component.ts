import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {


  constructor() { }

  ngOnInit() {
  }
  arregloConductores=[
    {
      nombres:'Martin',
      apellidos: 'Paez',
      fechaNacimiento: '09-12-1980',
      numeroAutos: '1',
      licenciaValida: true,
      urlImagen: 'https://s3-us-west-1.amazonaws.com/suzukiautos/models/home/gallery/9f62e3b4a2825910542eb54e8a5c148bcc61df9e.png',

      detalles:[
        {
          chasis:1,
          nombreMarca: 'Ford',
          colorUno:'Rojo',
          colorDos: 'Negro',
          nombreModelo:'TGHY',
          anio: 2018,
          idConductor:1
        }
      ]
    },
    {
      nombres:'Martin',
      apellidos: 'Paez',
      fechaNacimiento: '09-12-1980',
      numeroAutos: '1',
      licenciaValida: true,
      urlImagen: 'http://www.todobateriastacna.pe/wp-content/uploads/2016/07/1-1.jpg',


      detalles:[
        {
          chasis:1,
          nombreMarca: 'Ford',
          colorUno:'Rojo',
          colorDos: 'Negro',
          nombreModelo:'TGHY',
          anio: 2018,
          idConductor:1
        }
      ]
    },
  ];
}
