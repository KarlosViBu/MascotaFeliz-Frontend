import { PlaBuscarComponent } from './planes/pla-buscar/pla-buscar.component';
import { MasBuscarComponent } from './mascotas/mas-buscar/mas-buscar.component';
import { MasEditarComponent } from './mascotas/mas-editar/mas-editar.component';
import { MasCrearComponent } from './mascotas/mas-crear/mas-crear.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MasListarComponent } from './mascotas/mas-listar/mas-listar.component';
import { PlaCrearComponent } from './planes/pla-crear/pla-crear.component';
import { PlaEditarComponent } from './planes/pla-editar/pla-editar.component';
import { PlaListarComponent } from './planes/pla-listar/pla-listar.component';
import { PysCrearComponent } from './productoservicios/pys-crear/pys-crear.component';
import { PysEditarComponent } from './productoservicios/pys-editar/pys-editar.component';
import { PysBuscarComponent } from './productoservicios/pys-buscar/pys-buscar.component';
import { PysListarComponent } from './productoservicios/pys-listar/pys-listar.component';
import { ProCrearComponent } from './prospectos/pro-crear/pro-crear.component';
import { ProEditarComponent } from './prospectos/pro-editar/pro-editar.component';
import { ProBuscarComponent } from './prospectos/pro-buscar/pro-buscar.component';
import { ProListarComponent } from './prospectos/pro-listar/pro-listar.component';
import { SucCrearComponent } from './sucursales/suc-crear/suc-crear.component';
import { SucEditarComponent } from './sucursales/suc-editar/suc-editar.component';
import { SucBuscarComponent } from './sucursales/suc-buscar/suc-buscar.component';
import { SucListarComponent } from './sucursales/suc-listar/suc-listar.component';
import { UsuCrearComponent } from './usuarios/usu-crear/usu-crear.component';
import { UsuEditarComponent } from './usuarios/usu-editar/usu-editar.component';
import { UsuBuscarComponent } from './usuarios/usu-buscar/usu-buscar.component';
import { UsuListarComponent } from './usuarios/usu-listar/usu-listar.component';
import { MasBorrarComponent } from './mascotas/mas-borrar/mas-borrar.component';
import { PlaBorrarComponent } from './planes/pla-borrar/pla-borrar.component';
import { PysBorrarComponent } from './productoservicios/pys-borrar/pys-borrar.component';
import { ProBorrarComponent } from './prospectos/pro-borrar/pro-borrar.component';
import { SucBorrarComponent } from './sucursales/suc-borrar/suc-borrar.component';
import { UsuBorrarComponent } from './usuarios/usu-borrar/usu-borrar.component';

const routes: Routes = [
  {
    path: 'mascotas-crear',
    component: MasCrearComponent
  },
  {
    path: 'mascotas-editar/:id',
    component: MasEditarComponent
  },
  {
    path: 'mascotas-buscar/:id',
    component: MasBuscarComponent
  },
  {
    path: 'mascotas-listar',
    component: MasListarComponent
  },
  {
    path: 'mascotas-borrar/:id',
    component: MasBorrarComponent
  },
  {
    path: 'mascotas-procesar',
    component: MasBuscarComponent
  },
  {
    path: 'planes-crear',
    component: PlaCrearComponent
  },
  {
    path: 'planes-editar/:id',
    component: PlaEditarComponent
  },
  {
    path: 'planes-buscar/:id',
    component: PlaBuscarComponent
  },
  {
    path: 'planes-listar',
    component: PlaListarComponent
  },
  {
    path: 'planes-borrar/:id',
    component: PlaBorrarComponent
  },
  {
    path: 'productosyservicios-crear',
    component: PysCrearComponent
  },
  {
    path: 'productosyservicios-editar/:id',
    component: PysEditarComponent
  },
  {
    path: 'productosyservicios-buscar/:id',
    component: PysBuscarComponent
  },
  {
    path: 'productosyservicios-listar',
    component: PysListarComponent
  },
  {
    path: 'productosyservicios-borrar/:id',
    component: PysBorrarComponent
  },
  {
    path: 'prospectos-crear',
    component: ProCrearComponent
  },
  {
    path: 'prospectos-editar/:id',
    component: ProEditarComponent
  },
  {
    path: 'prospectos-buscar/:id',
    component: ProBuscarComponent
  },
  {
    path: 'prospectos-listar',
    component: ProListarComponent
  },
  {
    path: 'prospectos-borrar/:id',
    component: ProBorrarComponent
  },
  {
    path: 'sucursales-crear',
    component: SucCrearComponent
  },
  {
    path: 'sucursales-editar/:id',
    component: SucEditarComponent
  },
  {
    path: 'sucursales-buscar/:id',
    component: SucBuscarComponent
  },
  {
    path: 'sucursales-listar',
    component: SucListarComponent
  },
  {
    path: 'sucursales-borrar/:id',
    component: SucBorrarComponent
  },
  {
    path: 'usuarios-crear',
    component: UsuCrearComponent
  },
  {
    path: 'usuarios-editar/:id',
    component: UsuEditarComponent
  },
  {
    path: 'usuarios-buscar/:id',
    component: UsuBuscarComponent
  },
  {
    path: 'usuarios-listar',
    component: UsuListarComponent
  },
  {
    path: 'usuarios-borrar/:id',
    component: UsuBorrarComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionRoutingModule { }
