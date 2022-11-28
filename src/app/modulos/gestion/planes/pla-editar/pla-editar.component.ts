import { Component, OnInit } from '@angular/core';
import { PlanService } from './../../../../servicios/plan.service';
import { PlanModelo } from './../../../../modelos/plan.modelo';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-pla-editar',
  templateUrl: './pla-editar.component.html',
  styleUrls: ['./pla-editar.component.css']
})
export class PlaEditarComponent implements OnInit {

  id:string = '';
  formPlan: FormGroup = this.formBuilder.group({
    'id': ['', [Validators.required]],
    'nombre': ['', [Validators.required]],
    'precio': ['', [Validators.required]],
    'descripcion': ['', [Validators.required]],
  });

  constructor(
    private formBuilder: FormBuilder,
    private planService: PlanService,
    private router: Router, 
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"]
    this.getPlan();
  }

  getPlan(){
    this.planService.getPlanXId(this.id)
    .subscribe((plan: PlanModelo) => {
      this.formPlan.controls['id'].setValue(plan.id);
      this.formPlan.controls['nombre'].setValue(plan.nombre);
      this.formPlan.controls['precio'].setValue(plan.precio);
      this.formPlan.controls['descripcion'].setValue(plan.descripcion);
    });
  }

  ActualizarPlan(){
    let nombre = this.formPlan.controls['nombre'].value;
    let descripcion = this.formPlan.controls['descripcion'].value;
    let precio = parseInt(this.formPlan.controls['precio'].value);
    let kplan: PlanModelo = {
      id: this.id,
      nombre: nombre,
      precio: precio,
      descripcion: descripcion
    }
    this.planService.actualizarPlan(kplan)
    .subscribe((datos) => {
      this.verSwal2('success', 'Registro Actualizado Exitosamente', 4000);
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
