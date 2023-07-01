import {RouterModule, Routes} from "@angular/router";
import {SignInComponent} from "./security/pages/sign-in/sign-in.component";
import { AuthGuard } from './security/auth.guard';

//sidenav1
import { VentasComponent } from './side-nav/ventas/ventas.component';
import { DashboardComponent } from './side-nav/dashboard/dashboard.component';
import { NotificacionesComponent } from './side-nav/notificaciones/notificaciones.component';
import { ReportesComponent } from './side-nav/reportes/reportes.component';
import { ProductsComponent } from './side-nav/products/products.component';
import { SettingsComponent } from './side-nav/settings/settings.component';
import { StatisticsComponent } from './side-nav/statistics/statistics.component';
import { SidenavComponent } from './side-nav/sidenav/sidenav.component';
import {BodyComponent} from "./side-nav/body/body.component";

//sidenav2


import { inventarioComponentProovedor } from './side-nav/prov-inventario/inventario.component';
import { NotificacionesComponentProovedor } from './side-nav/prov-notificaciones/notificacionesprov.component';

import { FarmaciasComponent } from './side-nav/prov-farmacias/farmacias.component';
import { SettingsComponentProovedor } from './side-nav/prov-settings/prov-settings.component';
import { SolicitudesComponent } from './side-nav/prov-solicitudes/solicitudes.component';





import {NgModule} from "@angular/core";

const routes: Routes = [
  { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
  { path: 'sign-in', component: SignInComponent },
  { path: 'home',
    component: BodyComponent, canActivate: [AuthGuard],
  children:[
    {path: 'inventario', component: DashboardComponent},
    {path: 'proovedores', component: ProductsComponent},
    {path: 'abastecimiento', component: StatisticsComponent},
    {path: 'ventas', component: VentasComponent},
    {path: 'reportes', component: ReportesComponent},
    {path: 'notificaciones', component: NotificacionesComponent},
    {path: 'settings', component: SettingsComponent},
    //povedoores
    {path: 'inventario-prov', component: inventarioComponentProovedor},
    {path: 'farmacias-prov', component: FarmaciasComponent},
    {path: 'solicitudes-prov', component: SolicitudesComponent},
    {path: 'notificaciones-prov', component: NotificacionesComponentProovedor},
    {path: 'settings-prov', component: SettingsComponentProovedor},
  ]
  },
];

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})

export class AppRoutingModule{

}

