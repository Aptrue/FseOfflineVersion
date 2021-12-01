/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable prefer-const */
/* eslint-disable arrow-body-style */
/* eslint-disable @typescript-eslint/semi */
/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/quotes */

import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { MoradiaService } from '../../servicos/database/moradia/moradia.service';


@Component({
  selector: 'app-moradia',
  templateUrl: './moradia.page.html',
  styleUrls: ['./moradia.page.scss'],
})
export class MoradiaPage implements OnInit {



  key: any;
  constructor(private loadingController: LoadingController,
    private router: Router,
    private storage: Storage,
    public moradiaService: MoradiaService
  ) {




  }

  ngOnInit() {


    //Tirando a key do Storage

    this.storage.create();
    this.storage.get("key").then(
      (data) => {
        this.key = data;
      }
    )


  }


  //obejcto dos compos do formulario moradia
  moradia: any = {
    id: null,
    abastecimento_de_agua: null,
    destino_de_fezes: null,
    destino_do_lixo: null,
    em_caso_de_doenca: null,
    energia: null,
    meio_de_transporte: null,
    numero_de_acomodacao: null,
    tipo_de_casa: null,
    tratamento_de_agua: null
  };

  //Fim do  obejcto
  //inicio da funcao enviar para sotorage

  enviarpara(m) {


    this.moradiaService.addItem(
      this.moradia.id,
      this.moradia.abastecimento_de_agua,
      this.moradia.destino_de_fezes,
      this.moradia.destino_do_lixo,
      this.moradia.em_caso_de_doenca,
      this.moradia.energia,
      this.moradia.meio_de_transporte,
      this.moradia.numero_de_acomodacao,
      this.moradia.tipo_de_casa,
      this.moradia.tratamento_de_agua
    );

    this.router.navigate(['num-crianca-adulto'])

  }



  //Limpar ao voltar ion-backbutton

  limpar_ao_voltar() {

    this.storage.remove('fse');

  }


}




