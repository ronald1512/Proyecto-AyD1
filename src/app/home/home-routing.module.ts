import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomePage } from "./home.page";

const routes: Routes = [
  {
    path: "home",
    component: HomePage,
    children: [
      {
        path: "tab1",
        children: [
          {
            path: "",
            loadChildren: () =>
              import("../delivery/delivery.module").then(
                m => m.DeliveryPageModule
              )
          }
        ]
      },
      {
        path: "tab2",
        children: [
          {
            path: "",
            loadChildren: () =>
              import("../user/user.module").then(
                m => m.UserPageModule
              )
          }
        ]
      },
      {
        path: "perfil",
        children: [
          {
            path: "",
            loadChildren: () =>
              import("../settings/settings.module").then(
                m => m.SettingsPageModule
              )
          }
        ]
      },
      {
        path: "carga-masiva",
        children: [
          {
            path: "",
            loadChildren: () =>
              import("../cargamasiva/cargamasiva.module").then(
                m => m.CargamasivaPageModule
              )
          }
        ]
      },
      {
        path: "carga-cursos-aprobados",
        children: [
          {
            path: "",
            loadChildren: () =>
              import("../carga-cursos-aprobados/carga-cursos-aprobados.module").then(
                m => m.CargaCursosAprobadosPageModule
              )
          }
        ]
      },
      {
        path: "cursos-aprobados",
        children: [
          {
            path: "",
            loadChildren: () =>
              import("../cursos-aprobados/cursos-aprobados.module").then(
                m => m.CursosAprobadosPageModule
              )
          }
        ]
      },
      {
        path: "",
        redirectTo: "/home/carga-masiva",
        pathMatch: "full"
      }
    ]
  },
  {
    path: "",
    redirectTo: "/home/carga-masiva",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
