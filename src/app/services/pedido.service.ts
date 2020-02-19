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

  patch(params) {
    return new Promise<any>((resolve, reject) => {
      this.api.patch("pedidos/" + params.id, params).subscribe(res => {
        resolve(res)
      }, error => {
        reject(error)
      }
      )
    })
  }

  getByFilter(filter: string) {
    return new Promise<any>((res, rej) => {
      this.api.get('pedidos?filter={"include":{"relation":"user","scope":{"include":"identities"}}}').subscribe(
        data => {

          res(data);
        },
        error => {
          rej(error);
        }
      );
    });
  }


  post(params) {
    return new Promise<any>((res, rej) => {
      this.api.post("pedidos", params).subscribe(result => {
        res(result)
      }, err => {
        rej(err)
      })


    })
  }
}
