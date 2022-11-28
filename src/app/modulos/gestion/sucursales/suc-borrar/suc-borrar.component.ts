import { SucursalService } from './../../../../servicios/sucursal.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-suc-borrar',
  templateUrl: './suc-borrar.component.html',
  styleUrls: ['./suc-borrar.component.css']
})

export class SucBorrarComponent implements OnInit {

  id:string = '';
  constructor(
    private sucursalService: SucursalService,
    private router: Router, 
    private route: ActivatedRoute ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
    this.verSwal2('success', 'Esto no se puede revertir!');
  }
  
  verSwal2 = (icon:any, text:string) => {
    Swal.fire({
      title: 'Esta Seguro?',
      text,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#ff4500',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Ok, Borrarlo!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.sucursalService.eliminarSucursal(this.id)
        .subscribe((datos) => {
          this.router.navigate(['/gestion/sucursales-listar']);
        }, (error) => {
          this.verSwal3('error', 'Al Eliminar Registro', 3000);
        });

        Swal.fire(
          'Eliminado!',
          'Su Registro fue Borrado.',
          'success',
        )
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
