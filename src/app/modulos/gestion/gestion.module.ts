import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionRoutingModule } from './gestion-routing.module';
import { UsuCrearComponent } from './usuarios/usu-crear/usu-crear.component';
import { UsuEditarComponent } from './usuarios/usu-editar/usu-editar.component';
import { UsuBuscarComponent } from './usuarios/usu-buscar/usu-buscar.component';
import { UsuListarComponent } from './usuarios/usu-listar/usu-listar.component';
import { MasListarComponent } from './mascotas/mas-listar/mas-listar.component';
import { MasCrearComponent } from './mascotas/mas-crear/mas-crear.component';
import { MasEditarComponent } from './mascotas/mas-editar/mas-editar.component';
import { MasBuscarComponent } from './mascotas/mas-buscar/mas-buscar.component';
import { PlaBuscarComponent } from './planes/pla-buscar/pla-buscar.component';
import { PlaCrearComponent } from './planes/pla-crear/pla-crear.component';
import { PlaEditarComponent } from './planes/pla-editar/pla-editar.component';
import { PlaListarComponent } from './planes/pla-listar/pla-listar.component';
import { SucListarComponent } from './sucursales/suc-listar/suc-listar.component';
import { SucCrearComponent } from './sucursales/suc-crear/suc-crear.component';
import { SucEditarComponent } from './sucursales/suc-editar/suc-editar.component';
import { SucBuscarComponent } from './sucursales/suc-buscar/suc-buscar.component';
import { ProBuscarComponent } from './prospectos/pro-buscar/pro-buscar.component';
import { ProCrearComponent } from './prospectos/pro-crear/pro-crear.component';
import { ProEditarComponent } from './prospectos/pro-editar/pro-editar.component';
import { ProListarComponent } from './prospectos/pro-listar/pro-listar.component';
import { PysListarComponent } from './productoservicios/pys-listar/pys-listar.component';
import { PysCrearComponent } from './productoservicios/pys-crear/pys-crear.component';
import { PysEditarComponent } from './productoservicios/pys-editar/pys-editar.component';
import { PysBuscarComponent } from './productoservicios/pys-buscar/pys-buscar.component';
import { PysBorrarComponent } from './productoservicios/pys-borrar/pys-borrar.component';
import { ProBorrarComponent } from './prospectos/pro-borrar/pro-borrar.component';
import { SucBorrarComponent } from './sucursales/suc-borrar/suc-borrar.component';
import { PlaBorrarComponent } from './planes/pla-borrar/pla-borrar.component';
import { MasBorrarComponent } from './mascotas/mas-borrar/mas-borrar.component';
import { UsuBorrarComponent } from './usuarios/usu-borrar/usu-borrar.component';


@NgModule({
  declarations: [
    UsuCrearComponent,
    UsuEditarComponent,
    UsuBuscarComponent,
    UsuListarComponent,
    MasListarComponent,
    MasCrearComponent,
    MasEditarComponent,
    MasBuscarComponent,
    PlaBuscarComponent,
    PlaCrearComponent,
    PlaEditarComponent,
    PlaListarComponent,
    SucListarComponent,
    SucCrearComponent,
    SucEditarComponent,
    SucBuscarComponent,
    ProBuscarComponent,
    ProCrearComponent,
    ProEditarComponent,
    ProListarComponent,
    PysListarComponent,
    PysCrearComponent,
    PysEditarComponent,
    PysBuscarComponent,
    PysBorrarComponent,
    ProBorrarComponent,
    SucBorrarComponent,
    PlaBorrarComponent,
    MasBorrarComponent,
    UsuBorrarComponent
  ],
  imports: [
    CommonModule,
    GestionRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class GestionModule { }
