import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CargaCursosAprobadosPageRoutingModule } from './carga-cursos-aprobados-routing.module';

import { CargaCursosAprobadosPage } from './carga-cursos-aprobados.page';
import { AngularFireAuth } from '@angular/fire/auth';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CargaCursosAprobadosPageRoutingModule,
    AngularFireAuth
  ],
  declarations: [CargaCursosAprobadosPage]
})
export class CargaCursosAprobadosPageModule {}
