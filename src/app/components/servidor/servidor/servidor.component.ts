/* eslint-disable @typescript-eslint/dot-notation */
/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable @typescript-eslint/no-shadow */


import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ServidorService } from 'src/app/servicos/service/service.service';
import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

import { LoadingController, ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { Network } from '@ionic-native/network/ngx';

@Component({
  selector: 'app-servidor',
  templateUrl: './servidor.component.html',
  styleUrls: ['./servidor.component.scss'],
})
export class ServidorComponent implements OnInit {

  va=0;
  deletado: boolean=false;

  inquerido=[]; //array para iterar no html

  constructor(
    private Storage: Storage, private servidor: ServidorService,
     private HttpClient: HttpClient, private router: Router,
     private loadingController: LoadingController,
     private ToastController: ToastController,
     public alertController: AlertController,
     private network: Network
  ) {

         this.ObterFamilia();
  }

  ngOnInit() {}


 async ObterFamilia(){

    this.servidor.getFamilias().subscribe((familia)=>{ //obtendo todas familias

      this.va=familia['data'].length;
      console.log(familia);



      let tamanho = familia['data'].length;

      let arrayFamilia=familia['data'];



      let i=0;

      while(i<tamanho){

        this.inquerido.push(arrayFamilia[i]);

        i=i+1;
      }


      },

      (error)=>{

        console.log("erro");

        this.servidor.internetCtrl(); // controle de alerta de internet
      }

      );
   }



   doRefresh(event) {  // funcao para refrescar e buscar familia

      while(this.inquerido.length > 0) {
        this.inquerido.pop();
      }


    this.aguardToast();   // aguard toast funcao
    this.ObterFamilia(); // obter familia

    setTimeout(() => {

      this.presentToast(); // toast familia actualuzada


      event.target.complete();
    }, 2000);

  }

  async presentToast() {     // para exibir que nao tem mais famalia
    const toast = await this.ToastController.create({
      message: 'Familia Actualizada',
      duration: 2000
    });
    toast.present();
  }

  async aguardToast() { // Para aguardar enquanto busca familia
    const toast = await this.ToastController.create({
      message: 'Aguarde.....',
      duration: 2000
    });
    toast.present();
  }


async presentAlertConfirm(key,valor) { // deletar familia

  const alert = await this.alertController.create({
    cssClass: 'my-custom-class',
    header: 'Confirmar',
    message: 'Tem Certeza que quer deletar?',
    buttons: [
      {
        text: 'Cancelar',
        role: 'cancel',
        cssClass: 'secondary',
        handler: (blah) => {
          console.log('Confirm Cancel: blah');
        }
      }, {
        text: 'Sim',
        handler: () => {
          console.log('Confirm Okay');
          this.inquerido.splice(valor);

          this.servidor.removerFamilia(key,valor).subscribe(()=>{ //chamando o servico

             this.ObterFamilia();  //obendo familias

          },
          (err)=>{console.log(err);
          });
        }
      }
    ]
  });

  await alert.present();
}


}
