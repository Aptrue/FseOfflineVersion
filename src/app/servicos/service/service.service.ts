/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable @typescript-eslint/no-unused-expressions */

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { stringify } from '@angular/compiler/src/util';
import { AlertController } from '@ionic/angular';


@Injectable({
  providedIn: 'root'
})

export class ServidorService {

  url ='https://fse.sumburero.org/api/fse';



  objToken ={
    token: null
  };



  constructor(private httpClient: HttpClient,
    public alertController: AlertController,
    private Storage: Storage) {


   }


  enviarDados(v: any){// for onlie use

     return this.httpClient.post(this.url,JSON.stringify(v));

  }

  getFamilias(){// for onlie use

    return this.httpClient.get(this.url);
  }

  getFamiliabyKey(key){// for onlie use

    return this.httpClient.get(this.url+'/'+key);
  }

  removerFamilia(key,valor){ // for onlie use

    //acrescentar o method delete no json como atributo
    return this.httpClient.delete(this.url+'/'+key,valor);

  }

  updateFamilia(key,valor){

    return this.httpClient.post(this.url+'/'+key,valor);
  }

  tokenInterceptor(){

    this.Storage.get('Token').then((data)=>{
      this.objToken.token=data;
    });

  }




  async internetCtrl(){

    const alert = this.alertController.create({
      header: 'Verifique a Conexão  da internet',
      message:'Sem Conexão',
      buttons: [{
        text: 'Está bem',
        handler: ()=>{

        }
      }]
    });

    await (await alert).present();
   }


   async login_internetCtrl(){



    const alert = this.alertController.create({
      header: 'Erro de Autenticação',
      message:'Verifique o email ou a senha: Caso o erro persista contacte a Administração ',
      buttons: [
        {
        text: 'Tentar Novamente',
        handler: ()=>{

                      }
         }

              ]
    });

    await (await alert).present();
   }





}
