import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AutorizadoGuard } from './guards/autorizado.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule),
    canActivate: [AutorizadoGuard]
  },

  {
    path: 'registro',
    loadChildren: () => import('./pages/registro/registro.module').then( m => m.RegistroPageModule)
    ,canActivate: [AutorizadoGuard]
  },
  {
    path: 'informacion',
    loadChildren: () => import('./pages/informacion/informacion.module').then( m => m.InformacionPageModule)
    ,canActivate: [AutorizadoGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registrodocente',
    loadChildren: () => import('./pages/registrodocente/registrodocente.module').then( m => m.RegistrodocentePageModule)
  },
  {
    path: 'anuncios',
    loadChildren: () => import('./pages/anuncios/anuncios.module').then( m => m.AnunciosPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
