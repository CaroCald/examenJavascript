import {Injectable} from "@angular/core";
@Injectable()
export class ConductorService {

  constructor() {}

  conductoresArreglo: Conductor[]=[];
  detallesArreglo: Detalles[]=[];
  conductor1=Conductor;
  anadirCondutores( nombre, apellido, fecha, num, licencia, id){
    this.conductoresArreglo.push(new Conductor(''+nombre, ''+apellido, ''+fecha, num, licencia, id));
    return this.conductoresArreglo;
  }

  anadirDetalles(nombre, chasis, marca, colorUno, colorDos, modelo,anio){
    this.detallesArreglo.push(new Detalles(nombre, chasis,marca, colorUno, colorDos, modelo, anio));
    return this.detallesArreglo;
  }

  devolverArreglo(){

    console.log(this.conductoresArreglo);
    return this.conductoresArreglo;

  }

    colocarDescripcion(){

    }

}
export class Conductor {

  constructor( public nombre: string,
  public apellido: string,
  public fechaNacmiento: string,
  public numAutos: number,
  public licencia: boolean,
  public id:number) {


  }

}
export class Detalles {
  constructor(public nombre:string,
              public chasis: string,
              public marca: string,
              public colorUno: string,
              public colorDos: string,
              public modelo: string,
              public anio: number){

  }
}
