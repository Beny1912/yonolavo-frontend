import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ApiService } from './services/api.service';
import { UsuarioService } from './services/usuario.service';
import { PedidoService } from './services/pedido.service';
import { PedidosComponent } from './pages/pedidos/pedidos.component';
import { RouterModule, Routes } from '@angular/router';
import{NgxDatatableModule } from '@swimlane/ngx-datatable'
const appRoutes: Routes = [
  { path: 'pedidos', component: PedidosComponent },


  {
    path: '',
    redirectTo: '/heroes',
    pathMatch: 'full'
  },
  { path: '**', component: PedidosComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    PedidosComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxDatatableModule
  ],
  providers: [
    ApiService,
    UsuarioService,
    PedidoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
