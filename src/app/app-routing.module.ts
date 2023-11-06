import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'confirmacionco',
    loadChildren: () => import('./confirmacionco/confirmacionco.module').then( m => m.ConfirmacioncoPageModule)
  },
  {
    path: 'main',
    loadChildren: () => import('./main/main.module').then( m => m.MainPageModule)
  },
  {
    path: 'island',
    loadChildren: () => import('./island/island.module').then( m => m.IslandPageModule)
  },
  {
    path: 'submeta',
    loadChildren: () => import('./submeta/submeta.module').then( m => m.SubmetaPageModule)
  },
  {
    path: 'buscador',
    loadChildren: () => import('./buscador/buscador.module').then( m => m.BuscadorPageModule)
  },
  {
    path: 'listausuario',
    loadChildren: () => import('./listausuario/listausuario.module').then( m => m.ListausuarioPageModule)
  },
  {
    path: 'perfilmeta',
    loadChildren: () => import('./perfilmeta/perfilmeta.module').then( m => m.PerfilmetaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
