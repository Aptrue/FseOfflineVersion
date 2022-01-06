/* eslint-disable radix */
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
import { ActivatedRoute, Router } from '@angular/router';
import { MoradiaService } from 'src/app/servicos/database/moradia/moradia.service';
@Component({
  selector: 'app-edit-moradia',
  templateUrl: './edit-moradia.page.html',
  styleUrls: ['./edit-moradia.page.scss'],
})
export class EditMoradiaPage implements OnInit {

  id: any = null;
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

  constructor(private activatedroute: ActivatedRoute, private router: Router, private moradiaservice: MoradiaService) {
          this.activatedroute.params.subscribe((id)=>{
          this.id =Number.parseInt(id.id);

          this.moradiaservice.getUser(id.id).then((res)=>{
            let a = JSON.stringify(res);

            alert(a);

            this.moradia.id=res.id;
      this.moradia.abastecimento_de_agua=res.abastecimento_de_agua;
      this.moradia.destino_de_fezes=res.destino_de_fezes;
      this.moradia.destino_do_lixo=res.destino_do_lixo;
      this.moradia.em_caso_de_doenca=res.em_caso_de_doenca;
      this.moradia.energia=res.energia;
      this.moradia.meio_de_transporte=res.meio_de_transporte;
      this.moradia.numero_de_acomodacao=res.numero_de_acomodacao;
      this.moradia.tipo_de_casa=res.tipo_de_casa;
      this.moradia.tratamento_de_agua=res.tratamento_de_agua;


          })
    });
   }

  ngOnInit() {
  }

}
