import { SucursalService } from './../../../../servicios/sucursal.service';
import { SucursalModelo } from './../../../../modelos/sucursal.modelo';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-suc-listar',
  templateUrl: './suc-listar.component.html',
  styleUrls: ['./suc-listar.component.css']
})
export class SucListarComponent implements OnInit {

  listadoSucursales: SucursalModelo[] = []
  constructor(
    private sucursaleService: SucursalService
  ) { 
    this.getListadoSucursales();
  }

  ngOnInit(): void {
  }

  getListadoSucursales(){
     this.sucursaleService.obtenerSucursales()
      .subscribe( (sucursales: SucursalModelo[] ) =>{
        this.listadoSucursales = sucursales;
        console.log("Total de Sucursales " + this.listadoSucursales.length);
      }, (error) => {
        console.log("Se genero un erro al consultar el listado de Sucursales");
      } )
  }
}
