import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-grilla',
  templateUrl: './grilla.component.html',
  styleUrls: ['./grilla.component.css']
})
export class GrillaComponent implements OnInit {
  @Input() nombres:string;
  @Input() apellidos: string;
  @Input() fechaNacimiento: string;
  @Input() numeroAutos: number;
  @Input() licenciaValida: boolean;
  constructor() { }

  ngOnInit() {
  }

  cargarDescripciones(){
    nom
  }
}
