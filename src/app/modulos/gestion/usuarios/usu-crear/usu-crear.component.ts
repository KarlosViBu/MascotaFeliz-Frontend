import { UsuarioModelo } from './../../../../modelos/usuario.modelo';
import { UsuarioService } from './../../../../servicios/usuario.service';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-usu-crear',
  templateUrl: './usu-crear.component.html',
  styleUrls: ['./usu-crear.component.css']
})
export class UsuCrearComponent implements OnInit {
  formUsuario: FormGroup = this.formBuilder.group({
    'cedula': ['', [Validators.required]],
    'nombre': ['', [Validators.required]],
    'apellido': ['', [Validators.required]],
    'telefono': ['', [Validators.required]],
    'correo': ['', [Validators.required]],
    'contrasena': ['', [Validators.required]],
    'rol': ['', [Validators.required]]
  });

  constructor(
    private formBuilder: FormBuilder,
    private usuarioService: UsuarioService,
    private router: Router
  ) { }

  ngOnInit(): void {
    
  }

  guardarUsuario(){
    let cedula = this.formUsuario.controls['cedula'].value;
    let nombre = this.formUsuario.controls['nombre'].value;
    let apellido = this.formUsuario.controls['apellido'].value;
    let telefono = this.formUsuario.controls['telefono'].value;
    let correo = this.formUsuario.controls['correo'].value;
    let contrasena = this.formUsuario.controls['contrasena'].value;
    let rol = this.formUsuario.controls['rol'].value;
    let datam: UsuarioModelo = {
      cedula: cedula,
      nombre: nombre,
      apellido: apellido,
      telefono: telefono,
      correo: correo,
      contrasena: contrasena,
      rol: rol
    }
    this.usuarioService.crearUsuario(datam)
    .subscribe((datos) => {
      this.verSwal2('success', 'Registro Creado Exitosamente', 3000);
      this.router.navigate(['/gestion/usuarios-listar']);
    }, (error) => {
        this.verSwal2('error', 'Al Guardar Registro', 2000);
    });
  }

  verSwal2 = (icon:any, text:string, timer:number) => {
    Swal.fire({
      position: 'top-end',
      icon,
      text,
      showConfirmButton: false,
      timer
    })
  }

  verSwal = (icon:any, title:string, text:string) => {
    Swal.fire({
      icon,
      title,
      text
    });
  }
}
