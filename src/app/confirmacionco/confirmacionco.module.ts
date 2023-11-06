import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfirmacioncoPageRoutingModule } from './confirmacionco-routing.module';

import { ConfirmacioncoPage } from './confirmacionco.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfirmacioncoPageRoutingModule
  ],
  declarations: [ConfirmacioncoPage]
})
export class ConfirmacioncoPageModule {}
