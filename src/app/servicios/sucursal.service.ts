import { SucursalModelo } from './../modelos/sucursal.modelo';
import { Observable } from 'rxjs';
import { SeguridadService } from './seguridad.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SucursalService {
  token:string = '';
  //url base del servicio de propuietarios de la inmobiliaria
  url: string = 'http://localhost:3000'

  constructor(
    private seguridadService: SeguridadService,
    private http: HttpClient
  ) {
    this.token = this.seguridadService.obtenerToken();
   }

  //obtenerSucursals(): Observable<any[]>{
    obtenerSucursales(): Observable<SucursalModelo[]>{
      return this.http.get<SucursalModelo[]>(`${this.url}/sucursales`,{
        headers: new HttpHeaders({
          'Authorization': `Bearer ${this.token}`
        })
      });
    }

    crearSucursal(sucursal: SucursalModelo): Observable<SucursalModelo>{
      return this.http.post<SucursalModelo>(`${this.url}/sucursales`,sucursal,{
        headers: new HttpHeaders({
          'Authorization': `Bearer ${this.token}`
        })
      });
    }
  
    actualizarSucursal(sucursal: SucursalModelo): Observable<SucursalModelo>{
      return this.http.put<SucursalModelo>(`${this.url}/sucursales/${sucursal.id}`,sucursal,{
        headers: new HttpHeaders({
          'Authorization': `Bearer ${this.token}`
        })
      });
    }
    
    eliminarSucursal( id: string): Observable<any> {
      return this.http.delete(`${this.url}/sucursales/${id}`,{
        headers: new HttpHeaders({
          'Authorization' : `Bearer ${this.token}`
        })
      })
    }

    //buscar propoetarios por ID
    getSucursalXId( id: string): Observable<SucursalModelo>{
      return this.http.get<SucursalModelo>(`${this.url}/sucursales/${id}`,{
        headers: new HttpHeaders({
          'Authorization' : `Bearer ${this.token}`
        })
      })
    }

}
