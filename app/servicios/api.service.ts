import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Anuncios, Users } from '../pages/interfaces/interfaces';
import { environment } from 'src/environments/environment';

@Injectable({ 
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpclient: HttpClient) { }

  crearUsuario(newUsuario: Users): Observable<Users>{
    return this.httpclient.post<Users>(`${environment.apiUrl}/usuarios`, newUsuario);
  }

  listarAnuncios():Observable<Anuncios>{
    return this.httpclient.get<Anuncios>(`${environment.apiUrl}/anuncios`);
  }
}
