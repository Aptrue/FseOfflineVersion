/* eslint-disable quote-props */
/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-shadow */

import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Injectable, Injector} from '@angular/core';
import { ServidorService } from '../service/service.service';



@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService  implements HttpInterceptor{

  constructor(private Injector: Injector) {

   }


  intercept(req, next){
    let servidor = this.Injector.get(ServidorService);
    let tokenizedReq = req.clone(
      {
       setHeaders: {
          'Content-Type': "aplication/json",
          'Authorization': `${servidor.objToken.token}`

       }
      }
      );
     return next.handle(tokenizedReq);
  }




}
