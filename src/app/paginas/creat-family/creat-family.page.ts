/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable radix */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable no-trailing-spaces */
import { Component, OnInit } from '@angular/core';
import { Contact } from '../../interface/contactos';
import { LocalDatabaseServiceService } from '../../servicos/localDatabaseService/local-database-service.service';
import { ToastController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-creat-family',
  templateUrl: './creat-family.page.html',
  styleUrls: ['./creat-family.page.scss'],
})
export class CreatFamilyPage implements OnInit {

  title: string = 'Novo contato';
  contact: Contact;

  constructor(
    private contactService: LocalDatabaseServiceService,
    private toastCtrl: ToastController,
    private route: ActivatedRoute,
    ) { }

    ngOnInit() {
      this.contact = new Contact();

      const idParam = this.route.snapshot.paramMap.get('id');
      if (idParam) {
        this.title = 'Editar contato';
        this.loadContact(parseInt(idParam));
      }
    }

    async loadContact(id: number) {
      this.contact = await this.contactService.getById(id);
    }

    async onSubmit() {
      try {
        const result = await this.contactService.save(this.contact);
        this.contact.id = result.insertId;

        const toast = await this.toastCtrl.create({
          header: 'Sucesso',
          message: 'Contato salvo com sucesso.',
          color: 'success',
          position: 'bottom',
          duration: 3000
        });

        toast.present();
      } catch (error) {
        const toast = await this.toastCtrl.create({
          header: 'Erro',
          message: 'Ocorreu um erro ao tentar salvar o Contato.',
          color: 'danger',
          position: 'bottom',
          duration: 3000
        });

        toast.present();
      }
    }


}
