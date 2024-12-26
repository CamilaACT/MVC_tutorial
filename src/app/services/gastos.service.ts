import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GastosService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {} // HttpClient inyectado correctamente

  grabarFechas(fechas: { fech_ini: string; fech_fina: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}Gasto/grabar`, fechas);
  }
}