import { Component, OnInit } from '@angular/core';
import { ProdServiModelo } from './../../../../modelos/prodservi.modelo';
import { ProdserviService } from './../../../../servicios/prodservi.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-pys-editar',
  templateUrl: './pys-editar.component.html',
  styleUrls: ['./pys-editar.component.css']
})
export class PysEditarComponent implements OnInit {

  id:string = '';
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
    private router: Router,
    private route: ActivatedRoute ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"]
    this.getPyS();
  }

  getPyS(){
    this.prodservService.getProdServiXId(this.id)
    .subscribe((kpys: ProdServiModelo) => {
      this.formProdServi.controls['tipo'].setValue(kpys.tipo);
      this.formProdServi.controls['nombre'].setValue(kpys.nombre);
      this.formProdServi.controls['descripcion'].setValue(kpys.descripcion);
      this.formProdServi.controls['foto'].setValue(kpys.foto);
      this.formProdServi.controls['precio'].setValue(kpys.precio);
    });
  }

  ActualizarProdServi(){
    let tipo = this.formProdServi.controls['tipo'].value;
    let nombre = this.formProdServi.controls['nombre'].value;
    let descripcion = this.formProdServi.controls['descripcion'].value;
    let foto = this.formProdServi.controls['foto'].value;
    let precio = parseInt(this.formProdServi.controls['precio'].value);
    let kpys: ProdServiModelo = {
      id: this.id,
      tipo: tipo,
      nombre: nombre,
      descripcion:descripcion,
      foto: foto,
      precio: precio,
    }
    this.prodservService.actualizarProdServi(kpys)
    .subscribe((datos) => {
      this.verSwal2('success', 'Registro Actualizado Exitosamente', 3000);
      this.router.navigate(['/gestion/productosyservicios-listar']);
    }, (error) => {
        this.verSwal2('error', 'Al Actualizar Registro', 2000);
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
