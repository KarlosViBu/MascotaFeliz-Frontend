import { PlanService } from './../../../../servicios/plan.service';
import { PlanModelo } from './../../../../modelos/plan.modelo';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pla-listar',
  templateUrl: './pla-listar.component.html',
  styleUrls: ['./pla-listar.component.css']
})
export class PlaListarComponent implements OnInit {

  listadoPlanes: PlanModelo[] = [];
  constructor(
    private planeService: PlanService
  ) { 
    this.getListadoPlanes();
  }

  ngOnInit(): void {
  }

  getListadoPlanes(){
     this.planeService.obtenerPlanes()
      .subscribe( (planes: PlanModelo[] ) =>{
        this.listadoPlanes = planes;
        console.log("Total de Planes " + this.listadoPlanes.length);
      }, (error) => {
        console.log("Se genero un erro al consultar el listado de Planes");
      } )
  }

}
