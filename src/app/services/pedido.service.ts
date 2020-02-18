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

  getByFilter(filter:string){
    return new Promise<any>((res, rej) => {
      this.api.get('pedidos?filter={"include":{"relation":"user","scope":{"include":"identities"}}}').subscribe(
        data => {
          console.log(data)
          res(data);
        },
        error => {
          rej(error);
        }
      );
    });
  }

}
