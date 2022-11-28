import { SucursalService } from './../../../../servicios/sucursal.service';
import { SucursalModelo } from './../../../../modelos/sucursal.modelo';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-suc-buscar',
  templateUrl: './suc-buscar.component.html',
  styleUrls: ['./suc-buscar.component.css']
})
export class SucBuscarComponent implements OnInit {

  listadoSucursales: SucursalModelo[] = []
  constructor(
    private sucursalService: SucursalService
  ) { 
    this.getListadoSucursales();
  }

  ngOnInit(): void {
  }

  getListadoSucursales(){
     this.sucursalService.obtenerSucursales()
      .subscribe( (Sucursales: SucursalModelo[] ) =>{
        this.listadoSucursales = Sucursales;
        console.log("Total de Sucursales " + this.listadoSucursales.length);
      }, (error) => {
        console.log("Se genero un erro al consultar el listado de Sucursales");
      } )
  }
}
