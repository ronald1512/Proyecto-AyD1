import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotasPersonalesPage } from './notas-personales.page';

const routes: Routes = [
  {
    path: '',
    component: NotasPersonalesPage
  },
  {
    path: 'nueva-nota',
    loadChildren: () => import('./nueva-nota/nueva-nota.module').then( m => m.NuevaNotaPageModule)
  },
  {
    path: 'ver-nota',
    loadChildren: () => import('./ver-nota/ver-nota.module').then( m => m.VerNotaPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotasPersonalesPageRoutingModule {}
