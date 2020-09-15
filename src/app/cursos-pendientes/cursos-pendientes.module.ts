import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CursosPendientesPageRoutingModule } from './cursos-pendientes-routing.module';

import { CursosPendientesPage } from './cursos-pendientes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CursosPendientesPageRoutingModule
  ],
  declarations: [CursosPendientesPage]
})
export class CursosPendientesPageModule {}
