import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CursosAprobadosPageRoutingModule } from './cursos-aprobados-routing.module';

import { CursosAprobadosPage } from './cursos-aprobados.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CursosAprobadosPageRoutingModule
  ],
  declarations: [CursosAprobadosPage]
})
export class CursosAprobadosPageModule {}
