/* eslint-disable radix */
/* eslint-disable eqeqeq */
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
  selector: 'app-criancas',
  templateUrl: './criancas.page.html',
  styleUrls: ['./criancas.page.scss'],
})
export class CriancasPage implements OnInit {


  constructor(private loadingController: LoadingController, private router: Router,
    private route: ActivatedRoute, private Storage: Storage,
    private criancaSeervice: CriancasService
    ){}

  ngOnInit() {

  }

}
