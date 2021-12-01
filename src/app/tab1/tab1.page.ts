/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/no-shadow */
import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import * as uuid from 'uuid';
import { AlertController } from '@ionic/angular';
import { AuthenticationService } from '../servicos/authentication/authentication.service';
import { ServidorService } from '../servicos/service/service.service';




@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  public bg = 'bg';
  nome: any;
  logoutimg = '/assets/logout';

  constructor(
    private Storage: Storage,
    private Router: Router,
    public alertController: AlertController,
    private authService: AuthenticationService,
    private servidor: ServidorService,


  ) {


    /**Obtendo dados do utilizador */

    this.Storage.get('usuario').then((data)=>{
      this.nome=data.name;
      console.log(this.nome);
    });

    /**Funcao token interceptor pra requisicoes Http -- Passsando Token */
    this.servidor.tokenInterceptor();

  }




  async logout() { // Logout
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Sair',
      message: 'Tem Certeza que quer sair?',
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
            this.authService.logout(); //sair logout
          }
        }
      ]
    });

    await alert.present();
  }





}
