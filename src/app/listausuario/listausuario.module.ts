import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListausuarioPageRoutingModule } from './listausuario-routing.module';

import { ListausuarioPage } from './listausuario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListausuarioPageRoutingModule
  ],
  declarations: [ListausuarioPage]
})
export class ListausuarioPageModule {}
