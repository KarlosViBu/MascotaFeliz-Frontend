import { PlanModelo } from './../modelos/plan.modelo';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SeguridadService } from './seguridad.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlanService {

  token:string = '';
  url: string = 'http://localhost:3000'

  constructor(
    private seguridadService: SeguridadService,
    private http: HttpClient
  ) {
    this.token = this.seguridadService.obtenerToken();
   }

    obtenerPlanes(): Observable<PlanModelo[]>{
      return this.http.get<PlanModelo[]>(`${this.url}/planes`,{
        headers: new HttpHeaders({
          'Authorization': `Bearer ${this.token}`
        })
      });
    }

    crearPlan(plan: PlanModelo): Observable<PlanModelo>{
      return this.http.post<PlanModelo>(`${this.url}/planes`,plan,{
        headers: new HttpHeaders({
          'Authorization': `Bearer ${this.token}`
        })
      });
    }
  
    actualizarPlan(plan: PlanModelo): Observable<PlanModelo>{
      return this.http.put<PlanModelo>(`${this.url}/planes/${plan.id}`,plan,{
        headers: new HttpHeaders({
          'Authorization': `Bearer ${this.token}`
        })
      });
    }
    
    eliminarPlan( id: string): Observable<any> {
      return this.http.delete(`${this.url}/planes/${id}`,{
        headers: new HttpHeaders({
          'Authorization' : `Bearer ${this.token}`
        })
      })
    }

    getPlanXId( id: string): Observable<PlanModelo>{
      return this.http.get<PlanModelo>(`${this.url}/planes/${id}`,{
        headers: new HttpHeaders({
          'Authorization' : `Bearer ${this.token}`
        })
      })
    }
}
