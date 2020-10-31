import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NuevaNotaPage } from './nueva-nota.page';

const routes: Routes = [
  {
    path: '',
    component: NuevaNotaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NuevaNotaPageRoutingModule {}
