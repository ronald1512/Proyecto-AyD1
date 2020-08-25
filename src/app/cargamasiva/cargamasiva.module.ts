import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CargamasivaPageRoutingModule } from './cargamasiva-routing.module';

import { CargamasivaPage } from './cargamasiva.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CargamasivaPageRoutingModule
  ],
  declarations: [CargamasivaPage]
})
export class CargamasivaPageModule {}
