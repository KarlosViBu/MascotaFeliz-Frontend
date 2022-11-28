import { ProspectoService } from './../../../../servicios/prospecto.service';
import { ProspectoModelo } from './../../../../modelos/prospecto.modelo';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pro-listar',
  templateUrl: './pro-listar.component.html',
  styleUrls: ['./pro-listar.component.css']
})
export class ProListarComponent implements OnInit {
  
  listadoProspectos: ProspectoModelo[] = [];
  constructor(
    private prospectoService: ProspectoService
  ) { 
    this.getListadoProspectos();
  }

  ngOnInit(): void {
  }

  getListadoProspectos(){
     this.prospectoService.obtenerProspectos()
      .subscribe( (prospectos: ProspectoModelo[] ) =>{
        this.listadoProspectos = prospectos;
        console.log("Total de Prospectos " + this.listadoProspectos.length);
      }, (error) => {
        console.log("Se genero un erro al consultar el listado de Prospectos");
      } )
  }

}
