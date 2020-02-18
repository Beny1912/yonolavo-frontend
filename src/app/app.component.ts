import { Component, OnInit } from '@angular/core';
import { PedidoService } from './services/pedido.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'yonolavo-frontend';
  pedidos: any;
  constructor(public pedidoAPI: PedidoService) { }
  ngOnInit() {
    this.getAllOrders();
  }

  getAllOrders(){
    this.pedidoAPI.getAll().then(
      apiData => {
        this.pedidos = apiData;
        console.log("pedidos:",this.pedidos);
      },
      error =>{
        console.log(error)
      });

  }
}
