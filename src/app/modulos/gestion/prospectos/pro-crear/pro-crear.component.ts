import { ProspectoModelo } from './../../../../modelos/prospecto.modelo';
import { ProspectoService } from './../../../../servicios/prospecto.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-pro-crear',
  templateUrl: './pro-crear.component.html',
  styleUrls: ['./pro-crear.component.css']
})
export class ProCrearComponent implements OnInit {

  formProspecto: FormGroup = this.formBuilder.group({
    'nombre': ['', [Validators.required]],
    'apellido': ['', [Validators.required]],
    'correo': ['', [Validators.required]],
    'celular': ['', [Validators.required]],
    'comentario': ['', [Validators.required]]
  });

  constructor(
    private formBuilder: FormBuilder,
    private prospectoService: ProspectoService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  guardarProspecto(){
    let nombre = this.formProspecto.controls['nombre'].value;
    let apellido = this.formProspecto.controls['apellido'].value;
    let celular = this.formProspecto.controls['celular'].value;
    let correo = this.formProspecto.controls['correo'].value;
    let comentario = this.formProspecto.controls['comentario'].value;
    let estado = 'Pendiente';
    let datam: ProspectoModelo = {
      nombre: nombre,
      apellido: apellido,
      celular: celular,
      correo: correo,
      comentario: comentario,
      estado: estado
    }
    this.prospectoService.crearProspecto(datam)
    .subscribe((datos) => {
      this.verSwal2('success', 'Registro Creado Exitosamente', 3000);
      this.router.navigate(['/gestion/prospectos-listar']);
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
