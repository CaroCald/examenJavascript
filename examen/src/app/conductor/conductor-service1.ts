import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({providedIn: 'root'})

export class ConductorService1 {

  private fuenteMensaje = new BehaviorSubject<any>([]);

  private fuenteMensaje2 = new BehaviorSubject<any>([]);

  private fuenteMensaje3 = new BehaviorSubject<any>([]);

  mensajeActual = this.fuenteMensaje.asObservable();
  mensajeActual2 = this.fuenteMensaje2.asObservable();
  mensajeActual3 = this.fuenteMensaje3.asObservable();
  constructor() { }


  cambiarMensaje(mensaje) {
    this.fuenteMensaje.next(mensaje);
  }

  cambiarMensaje2(mensaje) {
    this.fuenteMensaje2.next(mensaje);
  }

  cambiarMensaje3(mensaje) {
    this.fuenteMensaje3.next(mensaje);
  }

}
