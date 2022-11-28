import { ProdServiModelo } from '../modelos/prodservi.modelo';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SeguridadService } from './seguridad.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProdserviService {

  token:string = '';
  url: string = 'http://localhost:3000'

  constructor(
    private seguridadService: SeguridadService,
    private http: HttpClient) { 
      this.token = this.seguridadService.obtenerToken();
  }

  obtenerProdServis(): Observable<ProdServiModelo[]>{
    return this.http.get<ProdServiModelo[]>(`${this.url}/productos-servicios`,{
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    });
  }

  crearProdServi(prodserv: ProdServiModelo): Observable<ProdServiModelo>{
    return this.http.post<ProdServiModelo>(`${this.url}/productos-servicios`,prodserv,{
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    });
  }

  actualizarProdServi(prodserv: ProdServiModelo): Observable<ProdServiModelo>{
    return this.http.put<ProdServiModelo>(`${this.url}/productos-servicios/${prodserv.id}`,prodserv,{
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    });
  }
  
  eliminarProdServi( id: string): Observable<any> {
    return this.http.delete(`${this.url}/productos-servicios/${id}`,{
      headers: new HttpHeaders({
        'Authorization' : `Bearer ${this.token}`
      })
    })
  }

  getProdServiXId( id: string): Observable<ProdServiModelo>{
    return this.http.get<ProdServiModelo>(`${this.url}/productos-servicios/${id}`,{
      headers: new HttpHeaders({
        'Authorization' : `Bearer ${this.token}`
      })
    })
  }

}
