import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CargamasivaPage } from './cargamasiva.page';

const routes: Routes = [
  {
    path: '',
    component: CargamasivaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CargamasivaPageRoutingModule {}
