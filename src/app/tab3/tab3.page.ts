
import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {



  selectedSegment = 'local'; // para mudar o segmento

  constructor(
    private toastCtrl: ToastController,
    private alertCtrl: AlertController) {


    }

    ionViewWillEnter() {

    }







}
