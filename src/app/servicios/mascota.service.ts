import { Observable } from 'rxjs';
import { MascotaModelo } from './../modelos/mascota.modelo';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SeguridadService } from './seguridad.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MascotaService {
  token:string = '';
  //url base del servicio de mascotas
  url: string = 'http://localhost:3000'

  constructor(
    private seguridadService: SeguridadService,
    private http: HttpClient ) 
  {
      this.token = this.seguridadService.obtenerToken();
  }

  obtenerMascotas(): Observable<MascotaModelo[]>{
    return this.http.get<MascotaModelo[]>(`${this.url}/mascotas`,{
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    });
  }

  crearMascota(usuario: MascotaModelo): Observable<MascotaModelo>{
    return this.http.post<MascotaModelo>(`${this.url}/mascotas`,usuario,{
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    });
  }

  actualizarMascota(usuario: MascotaModelo): Observable<MascotaModelo>{
    return this.http.put<MascotaModelo>(`${this.url}/mascotas/${usuario.id}`,usuario,{
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    });
  }

  eliminarMascota( id: string): Observable<any> {
    return this.http.delete(`${this.url}/mascotas/${id}`,{
      headers: new HttpHeaders({
        'Authorization' : `Bearer ${this.token}`
      })
    })
  }
  
  //buscar mascotas por ID
  getMascotaXId( id: string): Observable<MascotaModelo>{
    return this.http.get<MascotaModelo>(`${this.url}/mascotas/${id}`,{
      headers: new HttpHeaders({
        'Authorization' : `Bearer ${this.token}`
      })
    })
  }

}
