import { Router, ActivatedRoute } from '@angular/router';
import { LoginModelo } from './../../../../modelos/login,modelo';
import { SeguridadService } from './../../../../servicios/seguridad.service';
import { MascotaService } from './../../../../servicios/mascota.service';
import { MascotaModelo } from './../../../../modelos/mascota.modelo';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mas-listar',
  templateUrl: './mas-listar.component.html',
  styleUrls: ['./mas-listar.component.css']
})
export class MasListarComponent implements OnInit {
  
  listadoMascotas: MascotaModelo[] = [];
  enSesion: boolean = false;  
  kfoto: string=''
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

  selectedCard(kft: HTMLImageElement, ki:number) {
    
    this.kfoto = kft.src;
    localStorage.setItem('kimagen', JSON.stringify(kft.src));
    this.router.navigate(['/gestion/mascotas-editar',
        this.listadoMascotas[ki].id]);
  }

}
