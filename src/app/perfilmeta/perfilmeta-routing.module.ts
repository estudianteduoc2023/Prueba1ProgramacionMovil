import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerfilmetaPage } from './perfilmeta.page';

const routes: Routes = [
  {
    path: '',
    component: PerfilmetaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerfilmetaPageRoutingModule {}
