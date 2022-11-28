import { SeguridadService } from './../../../servicios/seguridad.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2'
const cryptoJS = require('crypto-js');

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup = this.formBuilder.group({ 
    'correo':['', [Validators.required, Validators.email]],
    'contrasena' : ['',[Validators.required]] 
  });
  constructor(
    private formBuilder: FormBuilder,
    private seguridadService: SeguridadService
    ) { }

  ngOnInit(): void {
  }

  login(){
    let correo = this.formLogin.controls["correo"].value;
    let contrasena = this.formLogin.controls["contrasena"].value;
    // alert("Iniciamos Sesion " + correo + ' '+contrasena);
    contrasena = cryptoJS.MD5(contrasena).toString();
    this.seguridadService.validarUsuario(correo, contrasena)
      .subscribe( (datos:any) => {
        this.seguridadService.almacenarSesion(datos);
      }, (error:any) => {
        this.verSwal('error', 'Error', 'al Validar las credenciales'+ error);
      });
  }

  verSwal = (icon:any, title:string, text:string) => {
    Swal.fire({
      icon,
      title,
      text
    });
   }

}
