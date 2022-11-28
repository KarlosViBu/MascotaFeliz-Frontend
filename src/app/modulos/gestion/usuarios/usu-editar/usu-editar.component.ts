import { UsuarioModelo } from './../../../../modelos/usuario.modelo';
import { Router, ActivatedRoute } from '@angular/router';
import { UsuarioService } from './../../../../servicios/usuario.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
const cryptoJS = require('crypto-js');
import Swal from 'sweetalert2';

@Component({
  selector: 'app-usu-editar',
  templateUrl: './usu-editar.component.html',
  styleUrls: ['./usu-editar.component.css']
})
export class UsuEditarComponent implements OnInit {

  id:string = '';
  formUsuario: FormGroup = this.formBuilder.group({
    'id': ['', [Validators.required]],
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
    private router: Router, 
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"]
    this.getUsuario(); 
  }
  
  getUsuario(){
    this.usuarioService.getUsuarioXId(this.id)
    .subscribe((usuario: UsuarioModelo) => {
      this.formUsuario.controls['id'].setValue(usuario.id);
      this.formUsuario.controls['cedula'].setValue(usuario.cedula);
      this.formUsuario.controls['nombre'].setValue(usuario.nombre);
      this.formUsuario.controls['apellido'].setValue(usuario.apellido);
      this.formUsuario.controls['telefono'].setValue(usuario.telefono);
      this.formUsuario.controls['correo'].setValue(usuario.correo);
      this.formUsuario.controls['contrasena'].setValue(usuario.contrasena);
      this.formUsuario.controls['rol'].setValue(usuario.rol);
    });

  }
    
  ActualizarUsuario(){
    let cedula = this.formUsuario.controls['cedula'].value;
    let nombre = this.formUsuario.controls['nombre'].value;
    let apellido = this.formUsuario.controls['apellido'].value;
    let telefono = this.formUsuario.controls['telefono'].value;
    let correo = this.formUsuario.controls['correo'].value;
    let contrasena = this.formUsuario.controls['contrasena'].value;
    let rol = this.formUsuario.controls['rol'].value;
    let datam: UsuarioModelo = {
      id: this.id,
      cedula: cedula,
      nombre: nombre,
      apellido: apellido, 
      telefono: telefono,
      correo: correo,
      contrasena: cryptoJS.MD5(contrasena).toString(),
      rol: rol
    }
    // console.log(datam);
    this.usuarioService.actualizarUsuario(datam)
    .subscribe((datos) => {
      this.verSwal2('success', 'Registro Actualizado Exitosamente', 3000);
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
