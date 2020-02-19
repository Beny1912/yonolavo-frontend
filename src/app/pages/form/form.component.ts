import { Component, OnInit, ModuleWithComponentFactories } from '@angular/core';
import * as moment from 'moment'
import { PedidoService } from 'src/app/services/pedido.service';
import { Route, Router } from '@angular/router';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  peso: string = "";
  color: string = "";
  tipo: string = "normal"
  constructor(private pedidosApi: PedidoService, private router: Router) { }

  ngOnInit() {
  }
  submit() {
    let data = {
      fecha: moment().format("YYYY/MM/DD"),
      estado: "Recibido",
      email: "ernesto.robles@guadaltech.es",
      items: [{
        color:this.color, peso:this.peso, forma:this.tipo
      }],
 
      userId: "5e4c0650a046aa6be84238dd"
    }
    this.pedidosApi.post(data).then(res=>{
      if(res)
      this.router.navigateByUrl('/pedidos');
    })
    console.log(this.peso, this.color, this.tipo)
  }
}
