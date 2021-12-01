import { Component, OnInit } from '@angular/core';
import { FseService } from 'src/app/servicos/database/fse/fse.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fse',
  templateUrl: './fse.page.html',
  styleUrls: ['./fse.page.scss'],
})
export class FsePage implements OnInit {

  camposfsc: any = {
    id: null,
    bairro: null,
    contacto: null,
    localizacao: null,
    nome: null,
    organizacao: null,
    razao: null
  };

  constructor(private fseservice: FseService,
              private router: Router

    ) { }

  ngOnInit() {
  }




  enviar(f: any){

          /**Inserindo dados no fse table */
          this.fseservice.addItem(
            this.camposfsc.id,
            this.camposfsc.bairro,
            this.camposfsc.contacto,
            this.camposfsc.localizacao,
            this.camposfsc.nome,
            this.camposfsc.organizacao,
            this.camposfsc.razao
          );

          this.router.navigate(['moradia']);
  }




}
