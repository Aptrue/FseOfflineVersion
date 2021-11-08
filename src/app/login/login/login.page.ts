/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/servicos/authentication/authentication.service';
import { LoadingController, ToastController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {


  usuario = {
    email: null,
    password: null
  };

  nao_verificado: boolean;


  constructor(private router: Router,
    private authService: AuthenticationService ,
    private loadingController: LoadingController,) { }

  ngOnInit() {

  }

   login(){




  this.presentLoadingWithOptions();


   }

   async presentLoadingWithOptions() {

    const loading = await this.loadingController.create({
      spinner: 'circles',
      duration: 2500,
      message: 'Autenticando',
      translucent: true,
      cssClass: 'custom-class custom-loading',
      backdropDismiss: true,
    });
    await loading.present();

    setTimeout(()=>{
       loading.dismiss();
       this.authService.login(this.usuario);
       this.nao_verificado=this.authService.nao_verificado;
    }, 5000);


  }


}
