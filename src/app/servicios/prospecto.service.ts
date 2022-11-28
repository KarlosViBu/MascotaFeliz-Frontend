import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SeguridadService } from './seguridad.service';
import { Injectable } from '@angular/core';
import { ProspectoModelo } from '../modelos/prospecto.modelo';

@Injectable({
  providedIn: 'root'
})
export class ProspectoService {

  token:string = '';
  url: string = 'http://localhost:3000'

  constructor(
    private seguridadService: SeguridadService,
    private http: HttpClient
  ) {
    this.token = this.seguridadService.obtenerToken();
   }

    obtenerProspectos(): Observable<ProspectoModelo[]>{
      return this.http.get<ProspectoModelo[]>(`${this.url}/prospectos`,{
        headers: new HttpHeaders({
          'Authorization': `Bearer ${this.token}`
        })
      });
    }

    crearProspecto(prospecto: ProspectoModelo): Observable<ProspectoModelo>{
      return this.http.post<ProspectoModelo>(`${this.url}/prospectos`,prospecto,{
        headers: new HttpHeaders({
          'Authorization': `Bearer ${this.token}`
        })
      });
    }
  
    actualizarProspecto(prospecto: ProspectoModelo): Observable<ProspectoModelo>{
      return this.http.put<ProspectoModelo>(`${this.url}/prospectos/${prospecto.id}`,prospecto,{
        headers: new HttpHeaders({
          'Authorization': `Bearer ${this.token}`
        })
      });
    }
    
    eliminarProspecto( id: string): Observable<any> {
      return this.http.delete(`${this.url}/prospectos/${id}`,{
        headers: new HttpHeaders({
          'Authorization' : `Bearer ${this.token}`
        })
      })
    }

    getProspectoXId( id: string): Observable<ProspectoModelo>{
      return this.http.get<ProspectoModelo>(`${this.url}/prospectos/${id}`,{
        headers: new HttpHeaders({
          'Authorization' : `Bearer ${this.token}`
        })
      })
    }

}
