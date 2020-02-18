import { Injectable } from '@angular/core';
import { ApiService } from "./api.service";

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  constructor(public api: ApiService) { }

  getAll() {
    return new Promise((res, rej) => {
      this.api.get("pedidos").subscribe(
        data => {
          res(data);
        },
        error => {
          rej(error);
        }
      );
    });
  }

}
