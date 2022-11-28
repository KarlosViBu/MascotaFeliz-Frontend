import { LoginModelo } from './../../../../modelos/login,modelo';
import { SeguridadService } from './../../../../servicios/seguridad.service';
import { MascotaService } from './../../../../servicios/mascota.service';
import { MascotaModelo } from './../../../../modelos/mascota.modelo';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mas-buscar',
  templateUrl: './mas-buscar.component.html',
  styleUrls: ['./mas-buscar.component.css']
})
export class MasBuscarComponent implements OnInit {

  listadoMascotas: MascotaModelo[] = [];
  enSesion: boolean = false;  
  constructor(
    private mascotaService: MascotaService,
    private seguridadService: SeguridadService,
    private router: Router, 
    private route: ActivatedRoute)  {   }

  ngOnInit(): void {
    this.getMascotas();
    this.getSesion();
  }
  
  getSesion(){
    this.seguridadService.obtenerDatosUsuarioEnSesion()
      .subscribe( (datos: LoginModelo ) => {
        this.enSesion = datos.enSesion != null ? datos.enSesion : false;
      });
  }

  getMascotas(){
    this.mascotaService.obtenerMascotas()
    .subscribe((mascotas) => {
        this.listadoMascotas = mascotas;
      });
  }

  CambioEstado(i:number, kestado: string){
    // alert(this.listadoMascotas[i].id);
    this.listadoMascotas[i].estado = kestado;
    let datam: MascotaModelo = {
      id: this.listadoMascotas[i].id,
      especie: this.listadoMascotas[i].especie,
      nombre: this.listadoMascotas[i].nombre,
      foto: this.listadoMascotas[i].foto,
      planId: this.listadoMascotas[i].planId,
      usuarioId: this.listadoMascotas[i].usuarioId,
      estado: kestado,
      comentario: this.listadoMascotas[i].comentario
    }
    this.mascotaService.actualizarMascota(datam)
    .subscribe((datos) => {
      this.router.navigate(['/gestion/mascotas-procesar']);
    }, (error) => {
        // this.verSwal2('error', 'Al Guardar Registro', 2000);
        console.log("Error al consultar la lista de Usuarios");
    });
    
  }

  
}
