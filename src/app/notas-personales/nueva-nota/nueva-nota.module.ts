import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NuevaNotaPageRoutingModule } from './nueva-nota-routing.module';

import { NuevaNotaPage } from './nueva-nota.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NuevaNotaPageRoutingModule
  ],
  declarations: [NuevaNotaPage]
})
export class NuevaNotaPageModule {}
