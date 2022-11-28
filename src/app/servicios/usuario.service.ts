import { UsuarioModelo } from './../modelos/usuario.modelo';
import { Observable } from 'rxjs';
import { SeguridadService } from './seguridad.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  token:string = '';
  //url base del servicio de usuarios
  url: string = 'http://localhost:3000'

  constructor(
    private seguridadService: SeguridadService,
    private http: HttpClient
  ) {
    this.token = this.seguridadService.obtenerToken();
   }

  //obtenerUsuarios(): Observable<any[]>{
    obtenerUsuarios(): Observable<UsuarioModelo[]>{
      return this.http.get<UsuarioModelo[]>(`${this.url}/usuarios`,{
        headers: new HttpHeaders({
          'Authorization': `Bearer ${this.token}`
        })
      });
    }

    crearUsuario(usuario: UsuarioModelo): Observable<UsuarioModelo>{
      return this.http.post<UsuarioModelo>(`${this.url}/usuarios`,usuario,{
        headers: new HttpHeaders({
          'Authorization': `Bearer ${this.token}`
        })
      });
    }
  
    actualizarUsuario(usuario: UsuarioModelo): Observable<UsuarioModelo>{
      return this.http.put<UsuarioModelo>(`${this.url}/usuarios/${usuario.id}`,usuario,{
        headers: new HttpHeaders({
          'Authorization': `Bearer ${this.token}`
        })
      });
    }

    eliminarUsuario( id: string): Observable<any> {
      return this.http.delete(`${this.url}/usuarios/${id}`,{
        headers: new HttpHeaders({
          'Authorization' : `Bearer ${this.token}`
        })
      })
    }
    
    //buscar usuarios por ID
    getUsuarioXId( id: string): Observable<UsuarioModelo>{
      return this.http.get<UsuarioModelo>(`${this.url}/usuarios/${id}`,{
        headers: new HttpHeaders({
          'Authorization' : `Bearer ${this.token}`
        })
      })
    }

    
    getUsuariosXRol( rol: string): Observable<UsuarioModelo>{
      return this.http.get<UsuarioModelo>(`${this.url}/usuarios-xRol/${rol}`,{
        headers: new HttpHeaders({
          'Authorization' : `Bearer ${this.token}`
        })
      })
    }

}
