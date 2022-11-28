import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { UsuarioModelo } from './../../../../modelos/usuario.modelo';
import { Router, ActivatedRoute } from '@angular/router';
import { UsuarioService } from './../../../../servicios/usuario.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-usu-borrar',
  templateUrl: './usu-borrar.component.html',
  styleUrls: ['./usu-borrar.component.css']
})
export class UsuBorrarComponent implements OnInit {

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
    private route: ActivatedRoute ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
    this.getUsuario();
    this.verSwal2('success', 'Esto no se puede revertir!');
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

  BorrarUsuario(){
    this.verSwal2('success', 'Esto no se puede revertir!');
  }

  verSwal2 = (icon:any, text:string) => {
    Swal.fire({
      position: 'top-end',
      title: 'Esta Seguro?',
      text,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#ff4500',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Ok, Borrarlo!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.usuarioService.eliminarUsuario(this.id)
        .subscribe((datos) => {
          this.router.navigate(['/gestion/usuarios-listar']);
        }, (error) => {
          this.verSwal3('error', 'Al Eliminar Registro', 3000);
        });

        Swal.fire(
          'Eliminado!',
          'Su Registro fue Borrado.',
          'success',
        )
      }
      else{
        this.router.navigate(['/gestion/usuarios-listar']);
      }
    })
  }

  verSwal3 = (icon:any, text:string, timer:number) => {
    Swal.fire({
      position: 'top-end',
      icon,
      text,
      showConfirmButton: false,
      timer
    })
  }
}
