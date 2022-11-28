import { Component, OnInit } from '@angular/core';
import { ProspectoModelo } from './../../../../modelos/prospecto.modelo';
import { ProspectoService } from './../../../../servicios/prospecto.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pro-borrar',
  templateUrl: './pro-borrar.component.html',
  styleUrls: ['./pro-borrar.component.css']
})
export class ProBorrarComponent implements OnInit {

  id:string = '';
  formProspecto: FormGroup = this.formBuilder.group({
    'id': ['', [Validators.required]],
    'nombre': ['', [Validators.required]],
    'apellido': ['', [Validators.required]],
    'correo': ['', [Validators.required]],
    'celular': ['', [Validators.required]],
    'comentario': ['', [Validators.required]]
  });

  constructor(
    private formBuilder: FormBuilder,
    private prospectoService: ProspectoService,
    private router: Router, 
    private route: ActivatedRoute) { }  

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"]
    this.getProspecto(); 
    this.verSwal2('success', 'Esto no se puede revertir!');
  }

  getProspecto(){
    this.prospectoService.getProspectoXId(this.id)
    .subscribe((prospecto: ProspectoModelo) => {
      this.formProspecto.controls['id'].setValue(prospecto.id);
      this.formProspecto.controls['nombre'].setValue(prospecto.nombre);
      this.formProspecto.controls['apellido'].setValue(prospecto.apellido);
      this.formProspecto.controls['celular'].setValue(prospecto.celular);
      this.formProspecto.controls['correo'].setValue(prospecto.correo);
      this.formProspecto.controls['comentario'].setValue(prospecto.comentario);
    });
  }

  BorrarProspecto(){
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
        this.prospectoService.eliminarProspecto(this.id)
        .subscribe((datos) => {
          this.router.navigate(['/gestion/prospectos-listar']);
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
        this.router.navigate(['/gestion/prospectos-listar']);
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
