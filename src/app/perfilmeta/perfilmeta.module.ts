import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilmetaPageRoutingModule } from './perfilmeta-routing.module';

import { PerfilmetaPage } from './perfilmeta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilmetaPageRoutingModule
  ],
  declarations: [PerfilmetaPage]
})
export class PerfilmetaPageModule {}
