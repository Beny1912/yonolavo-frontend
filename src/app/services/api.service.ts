import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import * as constants from './../constants';
//import { StorageService } from '../storage/storage.service';
//import { DEV } from '../../constants';

@Injectable()
export class ApiService {

  url: String = constants.API_URL;
  
  constructor(public http: HttpClient)
  {
  }

  // const headers = new HttpHeaders({ 'Content-Type':'application/json','Authorization':this.token});

  getOptions(params: any = {}, reqOpts: any = {})
  {
    reqOpts.params = new HttpParams();
   /* if(this.storage.getToken())
      reqOpts.params = reqOpts.params.set('access_token', this.storage.getToken().id);*/

    for (let k in params)
    {
      let param = params[k];
      if(typeof param == 'object')
        param = JSON.stringify(param);

      reqOpts.params = reqOpts.params.set(k,param);
    }

    return reqOpts;
  }

  getExternal(endpoint: string, params?: any, reqOpts?: any)
  {
    this.message('GET EXTERNAL', endpoint);
    reqOpts = this.getOptions(params, reqOpts);
    return this.http.get(endpoint, reqOpts);
  }

  get(endpoint: string, params?: any, reqOpts?: any)
  {
    this.message('GET', endpoint);
    reqOpts = this.getOptions(params, reqOpts);
    return this.http.get(this.url  + endpoint, reqOpts);
  }

  post(endpoint: string, body: any, reqOpts?: any)
  {
    this.message('POST', endpoint);
    reqOpts = this.getOptions({}, reqOpts);
    return this.http.post(this.url  + endpoint, body, reqOpts);
  }

  multipartPost(endpoint: string, body: any, reqOpts?: any)
  {
    this.message('POST', endpoint);
    reqOpts = this.getOptions({}, reqOpts);
    reqOpts.reportProgress = true;
    reqOpts.observe = 'events';
    // reqOpts.headers = new HttpHeaders({ "Content-Type": "multipart/form-data" });
    return this.http.post(this.url  + endpoint, body, reqOpts);
  }

  multipartPatch(endpoint: string, body: any, reqOpts?: any)
  {
    this.message('PATCH', endpoint);
    reqOpts = this.getOptions({}, reqOpts);
    reqOpts.reportProgress = true;
    reqOpts.observe = 'events';
    // reqOpts.headers = new HttpHeaders({ "Content-Type": "multipart/form-data" });
    return this.http.patch(this.url  + endpoint, body, reqOpts);
  }

  put(endpoint: string, body: any, reqOpts?: any)
  {
    this.message('PUT', endpoint);
    reqOpts = this.getOptions({}, reqOpts);
    return this.http.put(this.url  + endpoint, body, reqOpts);
  }
 
  delete(endpoint: string, reqOpts?: any)
  {
    this.message('DELETE', endpoint);
    reqOpts = this.getOptions({}, reqOpts);
    return this.http.delete(this.url  + endpoint, reqOpts);
  }

  patch(endpoint: string, body: any, reqOpts?: any)
  {
    this.message('PATCH', endpoint);
    reqOpts = this.getOptions({}, reqOpts);
    return this.http.patch(this.url  + endpoint, body, reqOpts);
  }

  message(method:string, endpoint:string)
  {
   /* if(DEV)
      console.log("Request", method, endpoint);*/
  }
}
