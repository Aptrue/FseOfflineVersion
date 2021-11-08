/* eslint-disable @typescript-eslint/dot-notation */
import { Component, OnInit } from '@angular/core';
import { LocalDatabaseServiceService } from 'src/app/servicos/localDatabaseService/local-database-service.service';
import { AlertController, ToastController } from '@ionic/angular';
import { Contact } from 'src/app/interface/contactos';

@Component({
  selector: 'app-local',
  templateUrl: './local.component.html',
  styleUrls: ['./local.component.scss'],
})
export class LocalComponent implements OnInit {


  constructor() {}

    ngOnInit() {
    }


}
