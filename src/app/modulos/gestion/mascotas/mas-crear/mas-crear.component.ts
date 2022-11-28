import { PlanService } from './../../../../servicios/plan.service';
import { UsuarioService } from './../../../../servicios/usuario.service';
import { PlanModelo } from './../../../../modelos/plan.modelo';
import { UsuarioModelo } from './../../../../modelos/usuario.modelo';
import { MascotaModelo } from './../../../../modelos/mascota.modelo';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'
import { MascotaService } from 'src/app/servicios/mascota.service';

@Component({
  selector: 'app-mas-crear',
  templateUrl: './mas-crear.component.html',
  styleUrls: ['./mas-crear.component.css']
})
export class MasCrearComponent implements OnInit {
  
  listadoUsuarios: UsuarioModelo[] = [];
  listadoUsuarios2: UsuarioModelo[] = [];
  listadoPlanes: PlanModelo[] = [];
  
  formMascota: FormGroup = this.formBuilder.group({
    'especie': ['', [Validators.required]],
    'nombre': ['', [Validators.required]],
    'foto': ['', [Validators.required]],
    'plan': ['', [Validators.required]],
    'propietario': ['', [Validators.required]],
    'comentario': ['', [Validators.required]]
  });

  constructor(
    private formBuilder: FormBuilder,
    private mascotaService: MascotaService,
    private usuarioService: UsuarioService,
    private planService: PlanService,
    private router: Router
  ) {
    this.getUsuarios(); 
    this.getPlanes();
   }

  ngOnInit(): void {
    
  }

  getPlanes(){
    this.planService.obtenerPlanes()
      .subscribe ({
        next: ( planes ) => {
          this.listadoPlanes = planes;
        },
        error: (error) => {
          console.log("Error al consultar la lista de Planes");
        }
      });
  }


  getUsuarios(){
    this.usuarioService.obtenerUsuarios()
      .subscribe ({
        next: ( usuarios ) => {
          this.listadoUsuarios = usuarios;
        },
        error: (error) => {
          console.log("Error al consultar la lista de Usuarios");
        }
      });
  }

  guardarMascota(){
    let especie = this.formMascota.controls['especie'].value;
    let nombre = this.formMascota.controls['nombre'].value;
    let foto = this.formMascota.controls['foto'].value;
    let plan = this.formMascota.controls['plan'].value;
    let propietario = this.formMascota.controls['propietario'].value;
    let comentario = this.formMascota.controls['comentario'].value;
    let datam: MascotaModelo = {
      especie: especie,
      nombre: nombre,
      planId: plan,
      usuarioId: propietario,
      foto: foto,
      estado: 'Pendiente',
      comentario: comentario
    }
    this.mascotaService.crearMascota(datam)
    .subscribe((datos) => {
      this.verSwal2('success', 'Registro Creado Exitosamente', 3000);
      this.router.navigate(['/gestion/mascotas-listar']);
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
