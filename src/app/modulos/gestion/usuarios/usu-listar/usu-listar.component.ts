import { UsuarioService } from './../../../../servicios/usuario.service';
import { UsuarioModelo } from './../../../../modelos/usuario.modelo';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usu-listar',
  templateUrl: './usu-listar.component.html',
  styleUrls: ['./usu-listar.component.css']
})
export class UsuListarComponent implements OnInit {
  
  listadoUsuarios: UsuarioModelo[] = []
  constructor(
    private usuarioService: UsuarioService
  ) { 
    this.getListadoUsuarios();
  }

  ngOnInit(): void {
  }

  getListadoUsuarios(){
    this.usuarioService.obtenerUsuarios()
     .subscribe( (usuarios: UsuarioModelo[] ) =>{
       this.listadoUsuarios = usuarios;
       console.log("Total de usuarios " + this.listadoUsuarios.length);
     }, (error) => {
       console.log("Se genero un erro al consultar el listado de usuarios");
     } )
 }
}
