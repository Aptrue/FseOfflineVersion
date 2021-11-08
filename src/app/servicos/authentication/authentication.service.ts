/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/dot-notation */

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Platform} from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { Storage } from '@ionic/storage';
import { ServidorService } from '../service/service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  url: string = "https://fse.sumburero.org/api/login";
  url2: string = "https://fse.sumburero.org/api/logout";                           //"http://127.0.0.1:8000/api/login";

  authenticationState = new BehaviorSubject(false); // guarda o estado da autenticacao
  token: any;
  infoUsuario: any;

  nao_verificado: boolean =false;

  constructor(private Storage: Storage,
    private servidor: ServidorService,
    private plt: Platform,
     private HttpClient: HttpClient) {


    //Verificando se ha token assim que a plataforma for iniciada
     this.plt.ready().then( ( ) => {
       this.checkToken();
     });


  }

  login(usuario){

    this.HttpClient.post(this.url,usuario).subscribe(

                      (res) => {

                                   let Storage =this.Storage.create();

                                   let a ="Bearer ";


                                  this.infoUsuario=res['user'];

                                  this.token=a+res['access_token'];
                                //  this.objToken.token=this.token;






                                    //Guardar Usuario
                                    this.Storage.set('usuario',this.infoUsuario);

                                    //Guardar token do usuario
                                    return this.Storage.set('Token',this.token).then((data)=>{
                                    this.authenticationState.next(true);
                                   });
                              },
                      (err) => {
                                  console.log(err);
                                  this.nao_verificado=true;
                                  this.servidor.login_internetCtrl(); // controler de erro popout
                              });

               }

               logout(){
                let Storage =this.Storage.create();
                this.Storage.remove('usuario');
                 return this.Storage.remove('Token').then( () => {
                   this.authenticationState.next(false);
                 } );
                      }

                 isAuthenticated(){

                        return this.authenticationState.value;
                                  }

                  checkToken(){

                                    let Storage =this.Storage.create();
                                    return this.Storage.get('Token').then( (res) => {

                                      if(res){
                                         this.authenticationState.next(true);

                                      }

                                    } );
                              }

}
