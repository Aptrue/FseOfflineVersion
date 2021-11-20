/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable radix */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable no-trailing-spaces */
import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { CrudService } from 'src/app/servicos/database/crud.service';

@Component({
  selector: 'app-creat-family',
  templateUrl: './creat-family.page.html',
  styleUrls: ['./creat-family.page.scss'],
})
export class CreatFamilyPage implements OnInit {


  nameVal: string = '';
  emailVal: string = '';

  constructor(
    private toastCtrl: ToastController,
    private route: ActivatedRoute,
    public crud: CrudService
    ) { }

    ngOnInit() { }

  ionViewDidEnter() {
    this.crud.getAllUsers();
  }

  createUser(){
    this.crud.addItem(this.nameVal, this.emailVal);
  }

  remove(user) {
    this.crud.deleteUser(user);
  }



}
