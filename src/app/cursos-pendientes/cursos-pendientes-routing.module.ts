import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CursosPendientesPage } from './cursos-pendientes.page';

const routes: Routes = [
  {
    path: '',
    component: CursosPendientesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CursosPendientesPageRoutingModule {}
