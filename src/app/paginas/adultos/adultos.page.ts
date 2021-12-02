/* eslint-disable @typescript-eslint/quotes */
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

import { LoadingController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ActivatedRoute} from "@angular/router";
import { Storage } from '@ionic/storage';
import { AdultosService } from 'src/app/servicos/database/adultos/adultos.service';

@Component({
  selector: 'app-adultos',
  templateUrl: './adultos.page.html',
  styleUrls: ['./adultos.page.scss'],
})

export class AdultosPage implements OnInit {



  adultosArray = []; // guarada todos adultos

  key: any;

  numeroadulto: any;
  adulto: number;
  verificar: number=1;
  valoradulto: number;

  //variaveis pra formularios FSC e Moradia

  fsc: any = {};
  moradia: any[];

  verGravida: boolean=false;



  adultos: any={
    id: null,
    acamado: null,
    alfabetizado: null,
    bilhete_de_identidade: null,
    control_pre_natal: null,
    data_de_nascimento: null,
    deficiencia: null,
    doenca: null,
    fonte_de_rendimento: null,
    gravida: null,
    nivel_escolar: null,
    nome_do_adulto: null,
    sexo: null,
    tem_contracto: null,
    zona_com_calamidade: null,
  }


  constructor(private loadingController: LoadingController,private router: Router,
    private route: ActivatedRoute, private adultosservice: AdultosService,
    private Storage: Storage)
    {

    }


  ngOnInit() {


                            //Pegando dados via paramentro para adultos

                            this.route.params.subscribe((data) => {
                              this.numeroadulto=data;             //quantidade de adultos
                              // console.log(this.numeroadulto);
                          });

                          this.adulto=Number.parseInt(this.numeroadulto.id);
                          this.valoradulto=this.adulto;    //quantidade adulto ja convertida
                          //  console.log("Adulto "+this.valoradulto);



  }






  enviarpara(ad){


                                              //ir pra numero de formulario.
                                            this.verificar=this.verificar+1;

                                            //Atribuindo a chave ao campo key do adultos.


                                            console.log(ad.value)
                                            console.log(ad.controls)

                                            /**Inserindo Dados na tabela

                                            this.adultosservice.addItem(

                                             this.adultos.id,
                                             this.adultos.acamado,
                                             this.adultos.alfabetizado,
                                             this.adultos.bilhete_de_identidade,
                                             this.adultos.control_pre_natal,
                                             this.adultos.data_de_nascimento,
                                             this.adultos.deficiencia,
                                             this.adultos.doenca,
                                             this.adultos.fonte_de_rendimento,
                                             this.adultos.gravida,
                                             this.adultos.nivel_escolar,
                                             this.adultos.nome_do_adulto,
                                             this.adultos.sexo,
                                             this.adultos.tem_contracto,
                                             this.adultos.zona_com_calamidade,

                                            );*/

                                            //fim da insercao

                                            if(this.verificar==this.valoradulto+1){

                                              this.verificar=1;
                                              //Guardar no storage adultosArray.

                                              this.Storage.create();

                                              this.router.navigate(['/']);


                                            } else if(this.adultosArray!=null){
                                              ad.reset();
                                            }




                                            }


       // Para controlar o campo se esta gravida ou nao e fechar o pre_natal
                mudargravida(v: any){

                     if(v=="Sim"){
                     this.verGravida=true;
                        } else if(v=="Não") {
                           this.verGravida=false;
                   }
                                  } //fim




                                  //Limpar ao voltar ion-backbutton
                                  // caso o numero de crinac seja zero ao voltar executara esaa funcao

                                  limpar_ao_voltar(){

                                    this.Storage.remove('criancas'); // remover o antigo valor do storage

                                    this.Storage.get('numeroDacrianca').then((data)=>{



                                      if(data==0){
                                        console.log(data);
                                        console.log('zero');
                                        this.router.navigate(['numerodeformulario'])

                                      }

                                     })

                                  }




                                  limparStorage(){

                                    this.Storage.remove('adultos');
                                    this.Storage.remove('criancas');

                                  }



}
