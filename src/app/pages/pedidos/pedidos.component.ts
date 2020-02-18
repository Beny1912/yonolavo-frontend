import { Component, OnInit, ViewChild } from '@angular/core';
import { PedidoService } from '../../services/pedido.service';
import { DatatableComponent, ColumnMode } from '@swimlane/ngx-datatable';
@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {

  temp = [];
  rows: any = [];
  columns = [{ prop: 'estado' }, { prop: 'fecha' }, { name: "Usuario", prop: 'user.username' }, { name: "Domicilio", prop: 'domicilio' }, {prop :"caracteristicas", name:"Caracteristicas"}];
  @ViewChild(DatatableComponent, { static: false }) table: DatatableComponent;

  ColumnMode = ColumnMode;
  constructor(private pedidosApi: PedidoService) { }

  ngOnInit() {
    this.pedidosApi.getByFilter("").then(data => {
 
      this.rows = data;
      this.rows.forEach(element => {
        element.caracteristicas=element.items[0].color+", "+element.items[0].peso+", "+element.items[0].forma
        if (element.user.domicilio){
          console.log("ENTRA")
          console.log(element.user)
          element.domicilio = element.user.domicilio.direccion + " " + element.user.domicilio.extra_direccion + ", " + element.user.domicilio.codigo_postal + " " + element.user.domicilio.ciudad       
        }
          else
          this.rows.domicilio=""
      });
      this.temp = [...this.rows];
    })
  }
  updateFilter(event) {
    const val = event.target.value.toLowerCase();

    // filter our data
    const temp = this.temp.filter(function (d) {
      return d.user.username.toLowerCase().indexOf(val) !== -1 || !val;
    });

    // update the rows
    this.rows = temp;
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }
}
