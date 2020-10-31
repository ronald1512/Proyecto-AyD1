import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NotasPersonalesPageRoutingModule } from './notas-personales-routing.module';

import { NotasPersonalesPage } from './notas-personales.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NotasPersonalesPageRoutingModule
  ],
  declarations: [NotasPersonalesPage]
})
export class NotasPersonalesPageModule {}
