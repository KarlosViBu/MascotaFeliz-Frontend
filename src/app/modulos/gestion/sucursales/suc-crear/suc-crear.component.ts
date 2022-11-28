import { SucursalModelo } from './../../../../modelos/sucursal.modelo';
import { Router } from '@angular/router';
import { SucursalService } from './../../../../servicios/sucursal.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-suc-crear',
  templateUrl: './suc-crear.component.html',
  styleUrls: ['./suc-crear.component.css']
})
export class SucCrearComponent implements OnInit {
  formSucursal: FormGroup = this.formBuilder.group({
    'direccion': ['', [Validators.required]],
    'telefono': ['', [Validators.required]],
    'ciudad': ['', [Validators.required]],
    'departamento': ['', [Validators.required]]
  });

  constructor(
    private formBuilder: FormBuilder,
    private sucursalService: SucursalService,
    private route: Router
  ) { }

  ngOnInit(): void {
    
  }

  guardarSucursal(){
    let direccion = this.formSucursal.controls['direccion'].value;
    let telefono = this.formSucursal.controls['telefono'].value;
    let ciudad = this.formSucursal.controls['ciudad'].value;
    let departamento = this.formSucursal.controls['departamento'].value;
    let sucur: SucursalModelo = {
      direccion: direccion,
      telefono: telefono,
      ciudad: ciudad,
      departamento: departamento
    }
    this.sucursalService.crearSucursal(sucur)
    .subscribe((datos) => {
      this.verSwal2('success', 'Registro Creado Exitosamente', 4000);
      this.route.navigate(['/gestion/sucursales-listar']);
    }, (error) => {
      this.verSwal2('error', 'Al Guardar Registro', 3000);
    });
    // this.verSwal('success', 'Proceso Ok', 'Se Guardo Exitosamente');
    // this.verSwal('error', 'Error', 'Al Guardar Registro');
    // console.log("se genero un error al guardar sucursal");
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
