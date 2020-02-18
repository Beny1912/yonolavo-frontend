import { Injectable } from '@angular/core';
import { ApiService } from "./api.service";


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(public api: ApiService) { }

  getAllOrdersByUser(id) {
    return new Promise((res, rej) => {
      this.api.get("users/"+id+"/pedidos").subscribe(
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
