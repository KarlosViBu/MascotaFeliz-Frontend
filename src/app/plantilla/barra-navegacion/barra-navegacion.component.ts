import { LoginModelo } from './../../modelos/login,modelo';
import { SeguridadService } from './../../servicios/seguridad.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-barra-navegacion',
  templateUrl: './barra-navegacion.component.html',
  styleUrls: ['./barra-navegacion.component.css']
})
export class BarraNavegacionComponent implements OnInit {

  seInicioSesion: boolean = false;
  subs: Subscription = new Subscription();
  
  constructor(
    private SeguridadService: SeguridadService,
    private route: Router
  ) { }

  ngOnInit(): void {
    this.subs = this.SeguridadService.obtenerDatosUsuarioEnSesion()
      .subscribe( (datos:LoginModelo) => {
        this.seInicioSesion = datos.enSesion;
        this.route.navigate(['/inicio']);
      });
  }

  cerrarSesion(){
    this.SeguridadService.eliminarSesion();
    this.seInicioSesion = false;
    this.route.navigate(['/inicio']);
  }

}
