import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  { path: "", redirectTo: "slide", pathMatch: "full" },
  {
    path: "slide",
    loadChildren: () =>
      import("./slide/slide.module").then(m => m.SlidePageModule)
  },
  {
    path: "",
    loadChildren: () => import("./home/home.module").then(m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then( m => m.UserPageModule)
  },
  {
    path: 'cargamasiva',
    loadChildren: () => import('./cargamasiva/cargamasiva.module').then( m => m.CargamasivaPageModule)
  },
  {
    path: 'carga-cursos-aprobados',
    loadChildren: () => import('./carga-cursos-aprobados/carga-cursos-aprobados.module').then( m => m.CargaCursosAprobadosPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'cursos-pendientes',
    loadChildren: () => import('./cursos-pendientes/cursos-pendientes.module').then( m => m.CursosPendientesPageModule)
  },{
    path: 'cursos-aprobados',
    loadChildren: () => import('./cursos-aprobados/cursos-aprobados.module').then( m => m.CursosAprobadosPageModule)
  },  {
    path: 'crear-horario',
    loadChildren: () => import('./crear-horario/crear-horario.module').then( m => m.CrearHorarioPageModule)
  },
  {
    path: 'modal-detalle-sitio',
    loadChildren: () => import('./modal-detalle-sitio/modal-detalle-sitio.module').then( m => m.ModalDetalleSitioPageModule)
  }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
