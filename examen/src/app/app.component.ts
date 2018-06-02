import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  @Input() chasis:number;
  @Input() nombreMarca: string;
  @Input() colorUno: string;
  @Input() colorDos: string;
  @Input() nombreModelo:string;
  @Input() anio: number;
  @Input() idConductor:number;
  @Input() urlImagen:string;

}
