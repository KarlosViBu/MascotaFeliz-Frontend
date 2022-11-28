import { Component, OnInit } from '@angular/core';
import { PlanService } from './../../../../servicios/plan.service';
import { PlanModelo } from './../../../../modelos/plan.modelo';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-pla-borrar',
  templateUrl: './pla-borrar.component.html',
  styleUrls: ['./pla-borrar.component.css']
})
export class PlaBorrarComponent implements OnInit {
  
  
  id:string = '';
  constructor(
    private planService: PlanService,
    private router: Router, 
    private route: ActivatedRoute) { }

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
        this.planService.eliminarPlan(this.id)
        .subscribe((datos) => {
          this.router.navigate(['/gestion/planes-listar']);
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
