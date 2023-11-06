import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SubmetaPageRoutingModule } from './submeta-routing.module';

import { SubmetaPage } from './submeta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SubmetaPageRoutingModule
  ],
  declarations: [SubmetaPage]
})
export class SubmetaPageModule {}
