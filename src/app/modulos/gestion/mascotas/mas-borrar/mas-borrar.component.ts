import { MascotaModelo } from './../../../../modelos/mascota.modelo';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'
import { MascotaService } from 'src/app/servicios/mascota.service';
import { PlanService } from './../../../../servicios/plan.service';
import { PlanModelo } from './../../../../modelos/plan.modelo';
import { UsuarioService } from './../../../../servicios/usuario.service';
import { UsuarioModelo } from './../../../../modelos/usuario.modelo';

@Component({
  selector: 'app-mas-borrar',
  templateUrl: './mas-borrar.component.html',
  styleUrls: ['./mas-borrar.component.css']
})
export class MasBorrarComponent implements OnInit {


  uFoto = "./assets/images/sinFondo/labrador1.png";
  listadoUsuarios: UsuarioModelo[] = [];
  listadoPlanes: PlanModelo[] = [];
  id:string = '';

  formMascota: FormGroup = this.formBuilder.group({
    'id': ['', [Validators.required]],
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
    private router: Router, 
    private route: ActivatedRoute ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"]
    this.getMascota(); 
    this.getUsuarios(); 
    this.getPlanes();
    this.verSwal2('success', 'Esto no se puede revertir!');
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

  getMascota(){
    this.mascotaService.getMascotaXId(this.id)
    .subscribe((mascota: MascotaModelo) => {
      this.formMascota.controls['id'].setValue(mascota.id);
      this.formMascota.controls['nombre'].setValue(mascota.nombre);
      this.formMascota.controls['especie'].setValue(mascota.especie);
      this.formMascota.controls['plan'].setValue(mascota.planId);
      this.formMascota.controls['propietario'].setValue(mascota.usuarioId);
      this.formMascota.controls['foto'].setValue(mascota.foto);
      this.formMascota.controls['comentario'].setValue(mascota.comentario);
    });
  }

  BorrarMascota(){
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
        this.mascotaService.eliminarMascota(this.id)
        .subscribe((datos) => {
          this.router.navigate(['/gestion/mascotas-listar']);
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
        this.router.navigate(['/gestion/mascotas-listar']);
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
