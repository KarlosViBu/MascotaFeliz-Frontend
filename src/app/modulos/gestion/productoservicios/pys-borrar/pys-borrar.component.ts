import { Component, OnInit } from '@angular/core';
import { ProdServiModelo } from './../../../../modelos/prodservi.modelo';
import { ProdserviService } from './../../../../servicios/prodservi.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-pys-borrar',
  templateUrl: './pys-borrar.component.html',
  styleUrls: ['./pys-borrar.component.css']
})
export class PysBorrarComponent implements OnInit {

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
    this.verSwal2('success', 'Esto no se puede revertir!');
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

  BorrarProdServi(){
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
        this.prodservService.eliminarProdServi(this.id)
        .subscribe((datos) => {
          this.router.navigate(['/gestion/productosyservicios-listar']);
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
        this.router.navigate(['/gestion/productosyservicios-listar']);
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
