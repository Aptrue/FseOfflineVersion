/* eslint-disable @typescript-eslint/no-shadow */

import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { FseService } from '../servicos/database/fse/fse.service';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {



  selectedSegment = 'local'; // para mudar o segmento

  constructor(
    public fseService: FseService,
    private toastCtrl: ToastController,
    private alertCtrl: AlertController,
    private router: Router,
    private storage: Storage,) {

           console.log(this.fseService.fse);

    }

    ionViewWillEnter() {

      this.fseService.getAllUsers();

    }




    async presentAlertConfirm(id) { // deletar familia

      const alert = await this.alertCtrl.create({
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

              this.fseService.deleteUser(id); //funcao delete do fseService
            }
          }
        ]
      });

      await alert.present();
    }



   editar(id){

     this.router.navigate(['oque-deseja-editar', id]);

   }




}
