import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfirmacioncoPage } from './confirmacionco.page';

const routes: Routes = [
  {
    path: '',
    component: ConfirmacioncoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfirmacioncoPageRoutingModule {}
