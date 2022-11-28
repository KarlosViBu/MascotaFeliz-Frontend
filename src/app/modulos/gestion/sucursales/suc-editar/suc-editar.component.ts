import { SucursalModelo } from './../../../../modelos/sucursal.modelo';
import { ActivatedRoute, Router } from '@angular/router';
import { SucursalService } from './../../../../servicios/sucursal.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import  Swal  from 'sweetalert2';

@Component({
  selector: 'app-suc-editar',
  templateUrl: './suc-editar.component.html',
  styleUrls: ['./suc-editar.component.css']
})
export class SucEditarComponent implements OnInit {
  
  id:string = '';
  formSucursal: FormGroup = this.formBuilder.group({
    'id': ['', [Validators.required]],
    'direccion': ['', [Validators.required]],
    'telefono': ['', [Validators.required]],
    'ciudad': ['', [Validators.required]],
    'departamento': ['', [Validators.required]]
  });

  constructor(
    private formBuilder: FormBuilder,
    private sucursalService: SucursalService,
    private router: Router, 
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"]
    this.getSucursal();
    
  }

  getSucursal(){
    this.sucursalService.getSucursalXId(this.id)
    .subscribe((sucursal: SucursalModelo) => {
      this.formSucursal.controls['id'].setValue(sucursal.id);
      this.formSucursal.controls['direccion'].setValue(sucursal.direccion);
      this.formSucursal.controls['telefono'].setValue(sucursal.telefono);
      this.formSucursal.controls['ciudad'].setValue(sucursal.ciudad);
      this.formSucursal.controls['departamento'].setValue(sucursal.departamento);
    });
  }

  editarSucursal(){
    let direccion = this.formSucursal.controls['direccion'].value;
    let telefono = this.formSucursal.controls['telefono'].value;
    let ciudad = this.formSucursal.controls['ciudad'].value;
    let departamento = this.formSucursal.controls['departamento'].value;
    let sucur: SucursalModelo = {
      id: this.id,
      direccion: direccion,
      telefono: telefono,
      ciudad: ciudad,
      departamento: departamento
    }
    this.sucursalService.actualizarSucursal(sucur)
    .subscribe((datos) => {
      this.verSwal2('success', 'Registro Actualizado Correctamente', 4000);
      this.router.navigate(['/gestion/sucursales-listar']);
    }, (error) => {
      this.verSwal2('error', 'Al Guardar Registro', 3000);
    });
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
