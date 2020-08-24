import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomePage } from "./home.page";
import { DeliveryPageModule } from "../delivery/delivery.module";

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
        path: "tab3",
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
        path: "",
        redirectTo: "/home/tab1",
        pathMatch: "full"
      }
    ]
  },
  {
    path: "",
    redirectTo: "/home/tab1",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
