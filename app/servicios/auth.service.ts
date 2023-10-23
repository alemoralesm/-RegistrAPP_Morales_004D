import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Users } from '../pages/interfaces/interfaces';
import { Observable } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient,
              private httpclientmodule: HttpClientModule,
              private router: Router ) { }

  GetAllUsers():Observable<Users>{
    return this.httpClient.get<Users>(`${environment.apiUrl}/usuarios`);
  }

  GetUserById(codigo:any): Observable<Users>{
    return this.httpClient.get<Users>(`${environment.apiUrl}/usuarios/?username=${codigo}`);
  }

  IsLoggedIn() {
    return sessionStorage.getItem('username')!=null;
  }

  GetUserrole(){
    return sessionStorage.getItem('userrole')!=null?sessionStorage.getItem('userrole')?.toString():''
  }

  logout() {
    this.router.navigate(['/login']);
  }
}
