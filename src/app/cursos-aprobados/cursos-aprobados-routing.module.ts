import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CursosAprobadosPage } from './cursos-aprobados.page';

const routes: Routes = [
  {
    path: '',
    component: CursosAprobadosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CursosAprobadosPageRoutingModule {}
