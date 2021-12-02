/* eslint-disable eqeqeq */
/* eslint-disable @typescript-eslint/no-inferrable-types */
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
import { Storage } from '@ionic/storage';
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import {ActivatedRoute} from "@angular/router";
import { CriancasService } from 'src/app/servicos/database/criancas/criancas.service';


@Component({
  selector: 'app-crianca',
  templateUrl: './crianca.page.html',
  styleUrls: ['./crianca.page.scss'],
})
export class CriancaPage implements OnInit {



  criancaArray = [];

  //inicio de variaveis pra loop de pagina
  criancaN: any;
  valorDacrianca: any;
  verificar: number = 1;
  irAdulto: boolean = false;
  tela: string ="Criança";

  key: any;


  //fim

  outrosCampos: boolean=true;
  verGravida: boolean=false;

//variavel para guaradar valor  de quantidade de adultos

nAdulto: number=0;


 //Objecto crianca contendo os campos do formulario

 crianca: any ={
  id: null,
  cartao_de_vacina: null,
  classe: null,
  conflito_com_a_lei: null,
  control_pre_natal: null,
  data_de_nascimento: null,
  deficiencia: null,
  doenca: null,
  estuda: null,
  gravida: null,
  material: null,
  nome_completo: null,
  orfao: null,
  rede_mosquiteira: null,
  registro_de_nascimento: null,
  sexo: null,
  tratamento: null,
  uniforme: null,
  vive_com_quem: null
}


  constructor(private loadingController: LoadingController, private router: Router,
    private route: ActivatedRoute, private Storage: Storage, private criancaService: CriancasService
    ){
            //Pegando a chave da familia do storage

    }


    ngOnInit() {



         // tslint:disable-next-line: deprecation
      // recpecao de valores da crianca e adulto via parametro.

      this.route.params.subscribe((data) => {
        this.valorDacrianca=data;
        console.log(this.valorDacrianca);
    });

    //Atribuindo o valor do parametro para Crianca pra um numero N

       this.criancaN=Number.parseInt(this.valorDacrianca.id0);
       this.nAdulto=Number.parseInt(this.valorDacrianca.id1);

       console.log("Crianca "+this.criancaN);
       console.log("Adulto "+this.nAdulto);

       //Funcao em caso de crianca  ser igual a zero(0)




    }



  enviarpara(cr){

    console.log(cr.value);



    // Condicao para ir pra numero de formulario.
   this.verificar=this.verificar+1;

  // inserir dados na bela

  this.criancaService.addItem(
    this.crianca.id,
    this.crianca.cartao_de_vacina,
    this.crianca.classe,
    this.crianca.conflito_com_a_lei,
    this.crianca.control_pre_natal,
    this.crianca.data_de_nascimento,
    this.crianca.deficiencia,
    this.crianca.doenca,
    this.crianca.estuda,
    this.crianca.gravida,
    this.crianca.material,
    this.crianca.nome_completo,
    this.crianca.orfao,
    this.crianca.rede_mosquiteira,
    this.crianca.registro_de_nascimento,
    this.crianca.sexo,
    this.crianca.tratamento,
    this.crianca.uniforme,
    this.crianca.vive_com_quem,
  );



   //loop de insercao d dados
   if(this.verificar==this.criancaN+1){

    this.verificar=1;
    console.log("ja esta")
    this.irAdulto=true;

    //fim
  if(this.nAdulto!=0){
    this.router.navigate(['adultos'+'/'+this.nAdulto]);
  }else{
     this.router.navigate(['confirmar'])
  }


   } else if(this.criancaArray!=null){
         cr.reset()
   }



//fim de loop



  }


//funcao para pegar valor se estuda ou nao

mudar(valor: any) {

  if(valor=="sim"){
    this.outrosCampos=true;
    this.verGravida=true;
    console.log(this.outrosCampos);
    console.log(valor);
  } else{
    this.outrosCampos=false;
    console.log(this.outrosCampos);
    console.log(valor);
  }
}

mudargravida(v: any){

  if(v=="Sim"){
    this.verGravida=true;
  } else if(v=="Não") {
    this.verGravida=false;
  }

}

//fim da tentativa


limparStorage(){

  this.Storage.remove('adultos');
  this.Storage.remove('criancas');
}






}
