import { Component, OnInit } from '@angular/core';
import { PlanService } from './../../../../servicios/plan.service';
import { PlanModelo } from './../../../../modelos/plan.modelo';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-pla-crear',
  templateUrl: './pla-crear.component.html',
  styleUrls: ['./pla-crear.component.css']
})
export class PlaCrearComponent implements OnInit {
  
  formPlan: FormGroup = this.formBuilder.group({
    'nombre': ['', [Validators.required]],
    'descripcion': ['', [Validators.required]],
    'precio': ['', [Validators.required]],
  });

  constructor(
    private formBuilder: FormBuilder,
    private planService: PlanService,
    private router: Router
  ) { }

  ngOnInit(): void {
    
  }

  guardarPlan(){
    let nombre = this.formPlan.controls['nombre'].value;
    let descripcion = this.formPlan.controls['descripcion'].value;
    let precio = parseInt(this.formPlan.controls['precio'].value);
    let kplan: PlanModelo = {
      nombre: nombre,
      precio: precio,
      descripcion: descripcion
    }
    this.planService.crearPlan(kplan)
    .subscribe((datos) => {
      this.verSwal2('success', 'Registro Creado Exitosamente', 4000);
      this.router.navigate(['/gestion/planes-listar']);
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
