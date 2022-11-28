import { MascotaModelo } from './../../../../modelos/mascota.modelo';
import { MascotaService } from './../../../../servicios/mascota.service';
import { PlanService } from './../../../../servicios/plan.service';
import { PlanModelo } from './../../../../modelos/plan.modelo';
import { UsuarioService } from './../../../../servicios/usuario.service';
import { UsuarioModelo } from './../../../../modelos/usuario.modelo';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-mas-editar',
  templateUrl: './mas-editar.component.html',
  styleUrls: ['./mas-editar.component.css']
})
export class MasEditarComponent implements OnInit {
  
  listadoUsuarios: UsuarioModelo[] = [];
  listadoPlanes: PlanModelo[] = [];
  kMascota: MascotaModelo[] = [];
  uFoto = "./assets/images/sinFondo/labrador1.png";

  kfoto: string = '';
  id:string = '';
  @ViewChild('asFoto') kFoto?: ElementRef;

  formMascota: FormGroup = this.formBuilder.group({
    'id': ['', [Validators.required]],
    'especie': ['', [Validators.required]],
    'nombre': ['', [Validators.required]],
    'foto': ['', [Validators.required]],
    'estado': ['', [Validators.required]],
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
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"]
    this.getMascota(); 
    this.getUsuarios(); 
    this.getPlanes();
    
    let suFoto = localStorage.getItem("kimagen");
    if (suFoto){
      this.uFoto = JSON.parse(suFoto);
    }

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
    const asFoto = this.kFoto?.nativeElement;
    this.mascotaService.getMascotaXId(this.id)
    .subscribe((mascota: MascotaModelo) => {
      this.formMascota.controls['id'].setValue(mascota.id);
      this.formMascota.controls['nombre'].setValue(mascota.nombre);
      this.formMascota.controls['especie'].setValue(mascota.especie);
      this.formMascota.controls['plan'].setValue(mascota.planId);
      this.formMascota.controls['propietario'].setValue(mascota.usuarioId);
      this.formMascota.controls['foto'].setValue(mascota.foto);
      this.formMascota.controls['estado'].setValue(mascota.estado);
      this.formMascota.controls['comentario'].setValue(mascota.comentario);
    });

  }
  
  ActualizarMascota(){
    let especie = this.formMascota.controls['especie'].value;
    let nombre = this.formMascota.controls['nombre'].value;
    let foto = this.formMascota.controls['foto'].value;
    let plan = this.formMascota.controls['plan'].value;
    let estado = this.formMascota.controls['estado'].value;
    let propietario = this.formMascota.controls['propietario'].value;
    let comentario = this.formMascota.controls['comentario'].value;
    let datam: MascotaModelo = {
      id: this.id,
      especie: especie,
      nombre: nombre,
      foto: foto,
      planId: plan,
      usuarioId: propietario,
      estado: estado,
      comentario: comentario
    }
    this.mascotaService.actualizarMascota(datam)
    .subscribe((datos) => {
      this.verSwal2('success', 'Registro Actualizado Exitosamente', 3000);
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
