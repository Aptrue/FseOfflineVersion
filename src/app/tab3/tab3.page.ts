
import { Component, OnInit } from '@angular/core';
import { LocalDatabaseServiceService } from 'src/app/servicos/localDatabaseService/local-database-service.service';
import { AlertController, ToastController } from '@ionic/angular';
import { Contact } from 'src/app/interface/contactos';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  contacts: Contact[] = [];

  selectedSegment = 'local'; // para mudar o segmento

  constructor(private contactService: LocalDatabaseServiceService,
    private toastCtrl: ToastController,
    private alertCtrl: AlertController) {
      this.loadContacts();
    }

    ionViewWillEnter() {
      this.loadContacts();
    }

    async loadContacts() {
      this.contacts = await this.contactService.getAll();
    }

    doSerchClear() {
      this.loadContacts();
    }

    async doSerchBarChange($event: any) {
      const value = $event.target.value;
      if (value && value.length >= 2) {
        this.contacts = await this.contactService.filter(value);
      }
    }

    async delete(contact: Contact) {
      const alert = await this.alertCtrl.create({
        header: 'Deletar?',
        message: `Deseja excluir o contato: ${contact.name}?`,
        buttons: [
          {
            text: 'Cancelar',
            role: 'cancel'
          },
          {
            text: 'Excluir',
            handler: () => {
              this.executeDelete(contact);
            }
          }
        ]
      });

      alert.present();
    }

    async executeDelete(contact: Contact) {
      try {
        // Removendo do banco de dados
        await this.contactService.delete(contact.id);

        // Removendo do array
        const index = this.contacts.indexOf(contact);
        this.contacts.splice(index, 1);

        const toast = await this.toastCtrl.create({
          header: 'Sucesso',
          message: 'Contato excluído com sucesso.',
          color: 'success',
          position: 'bottom',
          duration: 3000
        });

        toast.present();
      } catch (error) {
        const toast = await this.toastCtrl.create({
          header: 'Erro',
          message: 'Ocorreu um erro ao tentar excluir o Contato.',
          color: 'danger',
          position: 'bottom',
          duration: 3000
        });

        toast.present();
      }
    }





}
