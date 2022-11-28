import { ProdserviService } from './../../../../servicios/prodservi.service';
import { ProdServiModelo } from './../../../../modelos/prodservi.modelo';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pys-listar',
  templateUrl: './pys-listar.component.html',
  styleUrls: ['./pys-listar.component.css']
})
export class PysListarComponent implements OnInit {

  listadoPyS: ProdServiModelo[] = []
  constructor(
    private prodservService: ProdserviService,
  ) { this.getListadoPyS(); }

  ngOnInit(): void {
  }

  getListadoPyS(){
    this.prodservService.obtenerProdServis()
    .subscribe( (kpys: ProdServiModelo[]) => {
      this.listadoPyS = kpys;
      console.log("Total de Productos y Servicios " + this.listadoPyS.length);
      console.log(this.listadoPyS)
      }, (error) => {
        console.log("Se genero un erro al consultar el listado de Productos y Servicios");
    })
  }

}
