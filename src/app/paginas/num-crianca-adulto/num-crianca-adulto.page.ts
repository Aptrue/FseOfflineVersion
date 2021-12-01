/* eslint-disable eqeqeq */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/no-inferrable-types */
import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-num-crianca-adulto',
  templateUrl: './num-crianca-adulto.page.html',
  styleUrls: ['./num-crianca-adulto.page.scss'],
})
export class NumCriancaAdultoPage implements OnInit {


  crianca: number = 0;
  adultos: number = 0;

  constructor(private Storage: Storage, private router: Router) { }

  ngOnInit() {
  }

 aumentarCrianca(){
        this.crianca=this.crianca+1;
 }

 diminuirCrianca(){
   if(this.crianca>0){
     this.crianca=this.crianca-1;
   }

}

aumentarAdulto(){
  this.adultos=this.adultos+1;
}

dimuirAdulto(){

  if(this.adultos>0){
    this.adultos=this.adultos-1;
  }

}


//Limpar ao voltar ion-backbutton

limpar_ao_voltar(){

  this.Storage.remove('moradia');

 }


ir(){

    this.router.navigate(['criancas']);

}


















}
