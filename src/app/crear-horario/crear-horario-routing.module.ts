import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrearHorarioPage } from './crear-horario.page';

const routes: Routes = [
  {
    path: '',
    component: CrearHorarioPage
  },
  {
    path: 'add-curso',
    loadChildren: () => import('./add-curso/add-curso.module').then( m => m.AddCursoPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrearHorarioPageRoutingModule {}
