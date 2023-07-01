import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterTestingModule } from "@angular/router/testing";
import { SignInComponent } from './security/pages/sign-in/sign-in.component';
import {MatCardModule} from "@angular/material/card";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatToolbarModule} from "@angular/material/toolbar";
import { SettingsComponent } from './side-nav/settings/settings.component';
import {NgOptimizedImage} from "@angular/common";
import {MatIconModule} from "@angular/material/icon";
import {MatMenuModule} from "@angular/material/menu";
import {MatListModule} from "@angular/material/list";
import { MatPaginatorModule } from "@angular/material/paginator";
import {AgregarProductoModalComponent } from './side-nav/dashboard/agregar-producto-modal/agregar-producto-modal.component';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatSidenavModule} from "@angular/material/sidenav";
import { MatTableModule } from '@angular/material/table';
import { BodyComponent } from './side-nav/body/body.component';
import { SidenavComponent } from './side-nav/sidenav/sidenav.component';
import { DashboardComponent } from './side-nav/dashboard/dashboard.component';
import { ProductsComponent } from './side-nav/products/products.component';
import { StatisticsComponent } from './side-nav/statistics/statistics.component';
import { VentasComponent } from './side-nav/ventas/ventas.component';
import {ReportesComponent} from './side-nav/reportes/reportes.component';
import { NotificacionesComponent } from './side-nav/notificaciones/notificaciones.component';
import { FiltrarProductoModalComponent } from './side-nav/dashboard/filtrar-producto-modal/filtrar-producto-modal.component';
import { FiltrarProveedoresComponent } from './side-nav/products/filtrar-proveedores/filtrar-proveedores.component';
import { AgregarSolicitudModalComponent } from './side-nav/statistics/agregar-solicitud-modal/agregar-solicitud-modal.component';
import { Body2Component } from './side-nav/body/body2/body2.component'

import { NotificacionesComponentProovedor } from './side-nav/prov-notificaciones/notificacionesprov.component';
import { SettingsComponentProovedor } from './side-nav/prov-settings/prov-settings.component';
import { FiltrarVentasComponent } from './side-nav/ventas/filtrar-ventas/filtrar-ventas.component';
import { FiltrarProveedoComponent } from './side-nav/prov-solicitudes/filtrar-proveedores/filtrar-proveedo.component';
import { inventarioComponentProovedor } from './side-nav/prov-inventario/inventario.component';
import { SolicitudesComponent } from './side-nav/prov-solicitudes/solicitudes.component';
import { AgregarIventarioModalComponent } from './side-nav/prov-inventario/agregar-iventario-modal/agregar-iventario-modal.component';
import {FarmaciasComponent} from "./side-nav/prov-farmacias/farmacias.component";
import { MatDialogModule } from '@angular/material/dialog';
import {MatSortModule} from "@angular/material/sort";
import {MatCheckboxModule} from "@angular/material/checkbox";
@NgModule({
  declarations: [
    SignInComponent,
    AppComponent,
    SidenavComponent,
    BodyComponent,
    DashboardComponent,
VentasComponent,
    ProductsComponent,
    StatisticsComponent,
    ReportesComponent,
    NotificacionesComponent,
    SettingsComponent,
    Body2Component,
    AgregarProductoModalComponent,
    FiltrarProductoModalComponent,
    FiltrarProveedoresComponent,
    AgregarSolicitudModalComponent,
    NotificacionesComponentProovedor,
    SettingsComponentProovedor,
    FiltrarVentasComponent,
    FiltrarProveedoComponent,
    AgregarIventarioModalComponent,
    inventarioComponentProovedor,
    SolicitudesComponent,
    FarmaciasComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    MatCardModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    RouterTestingModule,
    AppRoutingModule,
    NgOptimizedImage,
    MatIconModule,
    MatMenuModule,
    MatGridListModule,
    MatListModule,
    FormsModule,
    MatSidenavModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
    MatSortModule,
    MatCheckboxModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
