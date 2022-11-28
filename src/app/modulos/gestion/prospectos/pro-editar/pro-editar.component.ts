import { Component, OnInit } from '@angular/core';
import { ProspectoModelo } from './../../../../modelos/prospecto.modelo';
import { ProspectoService } from './../../../../servicios/prospecto.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pro-editar',
  templateUrl: './pro-editar.component.html',
  styleUrls: ['./pro-editar.component.css']
})
export class ProEditarComponent implements OnInit {

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

  ActualizarProspecto(){
    let nombre = this.formProspecto.controls['nombre'].value;
    let apellido = this.formProspecto.controls['apellido'].value;
    let celular = this.formProspecto.controls['celular'].value;
    let correo = this.formProspecto.controls['correo'].value;
    let comentario = this.formProspecto.controls['comentario'].value;
    let estado = 'Pendiente';
    let datam: ProspectoModelo = {
      id: this.id,
      nombre: nombre,
      apellido: apellido,
      celular: celular,
      correo: correo,
      comentario: comentario,
      estado: estado
    }
    this.prospectoService.actualizarProspecto(datam)
    .subscribe((datos) => {
      this.verSwal2('success', 'Registro Actualizado Exitosamente', 3000);
      this.router.navigate(['/gestion/prospectos-listar']);
    }, (error) => {
        this.verSwal2('error', 'Al Guardar Registro', 2000);
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
