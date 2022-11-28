import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecuperarClaveComponent } from './recuperar-clave/recuperar-clave.component';
import { CambioClaveComponent } from './cambio-clave/cambio-clave.component';

const routes: Routes = [
  {
    path: 'identificar',
    component: LoginComponent
  },
  {
    path: 'recuperarClave',
    component: RecuperarClaveComponent
  },
  {
    path: 'cambiarClave',
    component: CambioClaveComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeguridadRoutingModule { }
