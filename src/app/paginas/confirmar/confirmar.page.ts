import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServidorService } from 'src/app/servico/servico.service';
import { Storage } from '@ionic/storage';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-confirmar',
  templateUrl: './confirmar.page.html',
  styleUrls: ['./confirmar.page.scss'],
})
export class ConfirmarPage implements OnInit {

   //Json geral que sera enviado ao servidor

   jsonGeral: any ={
    fse: null,
    moradia: null,
    adultos: null,
    criancas: null

  };

  constructor(private router: Router,private Storage: Storage,
    private servidor: ServidorService, private ToastController: ToastController) {

   }

  ngOnInit() {
   this.enviarDados();
  }


  //Funcao para enviar todos dados ao servidor

  enviarDados(){

    this.Storage.create();

    //Atribui o formulario Fse como atributo do jsonGeral
    this.Storage.get('fse').then(
      (data)=> {
        this.jsonGeral.fse=data;
      }
    );

    //Atribui o formulario moradia como atributo do jsonGeral
    this.Storage.get('moradia').then(
      (data)=> {
        this.jsonGeral.moradia=data;
      }
    );


    //Atribui o formulario adultos como atributo do jsonGeral
    this.Storage.get('adultos').then(
      (data)=> {
        this.jsonGeral.adultos=data;
      }
    );

    //Atribui o formulario criancas como atributo do jsonGeral

    this.Storage.get('criancas').then(
      (data)=> {
        this.jsonGeral.criancas=data;
      }
    );

    //console.log(this.jsonGeral);


  }

  voltarHome(){


    this.servidor.enviarDados(this.jsonGeral).subscribe(
      (response)=>{

        console.log('Resposta do server');
        console.log(response);

        if(response==201){

          this.Storage.remove('adultos');// Limpar o storage depois de enviar os dados.
          this.Storage.remove('criancas');
          this.Storage.remove('fse');
          this.Storage.remove('moradia');
        }

      },
      (err)=>{
        console.log(err);
      }
    );



    this.router.navigate(['home']);




  }

  limpar_ao_voltar(){
    this.Storage.remove('adultos');
  }




}
