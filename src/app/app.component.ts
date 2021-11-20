/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/type-annotation-spacing */
/* eslint-disable @typescript-eslint/no-shadow */


import { Component } from '@angular/core';
import {Platform} from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { AuthenticationService } from './servicos/authentication/authentication.service';
import { DatabaseService } from './servicos/database/database.service';
import { ServidorService } from './servicos/service/service.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  login:boolean=false;
  constructor(
    private Storage : Storage,
    private Platform: Platform,
    private authService: AuthenticationService,
    private router: Router,
    private db: DatabaseService,
    private ServidorService: ServidorService
  ) {

    this.initializeApp();
  }



  initializeApp(){

    this.Platform.ready().then(

                        () => {
                                      this.db.openDatabase();

                                      this.ServidorService.getFamilias();
                                      this.authService.authenticationState.subscribe( estado =>
                                        {
                                                  if(estado){
                                                      this.login=true;
                                                      this.router.navigate(['']);
                                                  } else {
                                                      this.login=false;
                                                      this.router.navigate(['login']);
                                                  }
                                        });
                        });




}



}
