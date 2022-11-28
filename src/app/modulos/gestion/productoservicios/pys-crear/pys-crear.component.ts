import { Component, OnInit } from '@angular/core';
import { ProdServiModelo } from './../../../../modelos/prodservi.modelo';
import { ProdserviService } from './../../../../servicios/prodservi.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-pys-crear',
  templateUrl: './pys-crear.component.html',
  styleUrls: ['./pys-crear.component.css']
})
export class PysCrearComponent implements OnInit {
  
  formProdServi: FormGroup = this.formBuilder.group({
    'tipo': ['', [Validators.required]],
    'foto': ['', [Validators.required]],
    'nombre': ['', [Validators.required]],
    'descripcion': ['', [Validators.required]],
    'precio': ['', [Validators.required]],
  });

  constructor(
    private formBuilder: FormBuilder,
    private prodservService: ProdserviService,
    private router: Router
  ) { }

  ngOnInit(): void {
    
  }

  guardarProdServi(){
    let foto = this.formProdServi.controls['foto'].value;
    let tipo = this.formProdServi.controls['tipo'].value;
    let nombre = this.formProdServi.controls['nombre'].value;
    let descripcion = this.formProdServi.controls['descripcion'].value;
    let precio = parseInt(this.formProdServi.controls['precio'].value);
    let kpys: ProdServiModelo = {
      foto: foto,
      tipo: tipo,
      nombre: nombre,
      precio: precio,
      descripcion: descripcion
    }
    this.prodservService.crearProdServi(kpys)
    .subscribe((datos) => {
      this.verSwal2('success', 'Registro Creado Exitosamente', 4000);
      this.router.navigate(['/gestion/productosyservicios-listar']);
    }, (error) => {
      this.verSwal2('error', 'Al Guardar Registro', 3000);
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
