/* eslint-disable radix */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CriancasService } from 'src/app/servicos/database/criancas/criancas.service';
import { FseService } from 'src/app/servicos/database/fse/fse.service';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.page.html',
  styleUrls: ['./detalhes.page.scss'],
})
export class DetalhesPage implements OnInit {


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

           this.chefe.  id =           res.id;
           this.chefe.  bairro =       res.bairro;
           this.chefe.  contacto =     res.contacto;
           this.chefe.  localizacao =  res.localizacao;
           this.chefe.  nome =         res.nome;
           this.chefe.  organizacao =  res. organizacao;
           this.chefe.  razao =        res.razao;
       }
       );
    }


async presentActionSheetRespon(id) {
  const actionSheet = await this.actionSheetController.create({
    header: this.chefe.nome,
    cssClass: 'sheet',
    buttons: [{
      text: 'Delete',
      role: 'destructive',
      icon: 'trash',
      handler: () => {
        console.log('Delete clicked');
      }
    }, {
      text: 'Editar',
      icon: 'create',
      role: 'edit',
      cssClass: 'editar',
      handler: () => {
        this.router.navigate(['fse-responsavel', id]);
      }
    }]

  });

  await actionSheet.present();
}

async presentActionSheetMoradia(id) {
  const actionSheet = await this.actionSheetController.create({
    header: this.chefe.nome,
    cssClass: 'sheet',
    buttons: [{
      text: 'Delete',
      role: 'destructive',
      icon: 'trash',
      handler: () => {
        console.log('Delete clicked');
      }
    }, {
      text: 'Editar',
      icon: 'create',
      role: 'edit',
      cssClass: 'editar',
      handler: () => {
        this.router.navigate(['edit-moradia', id]);
      }
    }]

  });

  await actionSheet.present();
}




}
