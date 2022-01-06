/* eslint-disable radix */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CriancasService } from 'src/app/servicos/database/criancas/criancas.service';
import { FseService } from 'src/app/servicos/database/fse/fse.service';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-fse-responsavel',
  templateUrl: './fse-responsavel.page.html',
  styleUrls: ['./fse-responsavel.page.scss'],
})
export class FseResponsavelPage implements OnInit {

  id: any = null;
  camposfsc: any = {
    id: null,
    bairro: null,
    contacto: null,
    localizacao: null,
    nome: null,
    organizacao: null,
    razao: null
  };

  constructor(private activatedroute: ActivatedRoute, private router: Router,
    public fseservice: FseService,
    public criancaService: CriancasService,
    public actionSheetController: ActionSheetController) {



      this.activatedroute.params.subscribe((id)=>{
       this.id =Number.parseInt(id.id);
     });

     }


  ngOnInit() {
  }

  ionViewDidEnter(){
    this.getResponsavel(this.id);
 }




async   getResponsavel(a){
 await  this.fseservice.getUser(a).then(
     (res)=>{

         this.camposfsc.  id =           res.id;
         this.camposfsc.  bairro =       res.bairro;
         this.camposfsc.  contacto =     res.contacto;
         this.camposfsc.  localizacao =  res.localizacao;
         this.camposfsc.  nome =         res.nome;
         this.camposfsc.  organizacao =  res. organizacao;
         this.camposfsc.  razao =        res.razao;
     }
     );
  }

  enviar(id){

   this.router.navigate(['detalhes',id]);

  }


}
