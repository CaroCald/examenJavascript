import { Component, OnInit } from '@angular/core';
import {ConductorService} from "../conductor.service";
import {ConductoresInterface} from "./conductores.interface";

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {
conductoresInterface:ConductoresInterface[];
  constructor(private conductorSevice: ConductorService) { }

  ngOnInit() {
    this.conductoresInterface=[
      {
        nombre:'Arturo',
        apellido:'Perez',
        fechaNacimiento:'03-09-1990',
        numeroAutos:1,
        licenciaValida:'No',
      },
      {
        nombre:'Luis',
        apellido:'Gonzales',
        fechaNacimiento:'07-09-1980',
        numeroAutos:1,
        licenciaValida:'No',
      },
      {
        nombre:'Jose',
        apellido:'Castro',
        fechaNacimiento:'09-04-1999',
        numeroAutos:1,
        licenciaValida:'No',
      },
      {
        nombre:'Arturo',
        apellido:'Perez',
        fechaNacimiento:'09-09-1990',
        numeroAutos:1,
        licenciaValida:'No',
      }
    ]
  }

}
