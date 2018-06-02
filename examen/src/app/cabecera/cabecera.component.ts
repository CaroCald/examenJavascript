import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ConductorService} from "../conductor.service";

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {


  constructor(private conductor: ConductorService) { }

  ngOnInit() {
  }




}
