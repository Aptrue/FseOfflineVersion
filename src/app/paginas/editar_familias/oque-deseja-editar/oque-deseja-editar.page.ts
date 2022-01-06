/* eslint-disable radix */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CriancasService } from 'src/app/servicos/database/criancas/criancas.service';
import { FseService } from 'src/app/servicos/database/fse/fse.service';

@Component({
  selector: 'app-oque-deseja-editar',
  templateUrl: './oque-deseja-editar.page.html',
  styleUrls: ['./oque-deseja-editar.page.scss'],
})
export class OqueDesejaEditarPage implements OnInit {

   valorDoparms: any;
  id: any = null;

  chefe = {
    id: null,
    bairro:  null,
    contacto:  null,
    localizacao:  null,
    nome:  null,
    organizacao:  null,
    razao:  null,
  };

  respo = {
    id: null,
    nome: null
  };

  constructor(private activatedroute: ActivatedRoute,
    public fseservice: FseService,
    public criancaService: CriancasService) {

     }

  ngOnInit() {

       this.activatedroute.params.subscribe((id)=>{
          const a =Number.parseInt(id.id);
          this.id=a;
          this.fseservice.getUser(a);


       });

  }








}
