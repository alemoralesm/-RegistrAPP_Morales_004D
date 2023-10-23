import { Component } from '@angular/core';

interface Componente{
  name: string;
  icon: string;
  redirecTo: string; 
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {}

  componentes: Componente[]=[
    {
      name:'Inicio',
      icon:'apps-outline',
      redirecTo:'/inicio'
    },
    {
      name:'Login',
      icon:'person-outline',
      redirecTo:'/login'
    },
    {
      name:'Registro',
      icon:'id-card-outline',
      redirecTo:'/registro'
    },
    {
      name:'Informacion',
      icon:'information-outline',
      redirecTo:'/informacion'
    },
    {
      name:'Registrodocente',
      icon:'id-card-outline',
      redirecTo:'/registrodocente'
    },
    {
      name:'Anuncios',
      icon:'clipboard-outline',
      redirecTo:'/anuncios'
    }

  ]
}
