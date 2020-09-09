import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CargaCursosAprobadosPage } from './carga-cursos-aprobados.page';

const routes: Routes = [
  {
    path: '',
    component: CargaCursosAprobadosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CargaCursosAprobadosPageRoutingModule {}
