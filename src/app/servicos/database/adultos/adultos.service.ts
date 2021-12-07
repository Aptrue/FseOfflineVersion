/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable @typescript-eslint/quotes */
import { Injectable } from '@angular/core';
import { DatabaseService } from '../database.service';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AdultosService {
  private dbInstance: SQLiteObject;
  readonly dbtable: string = "aat";
  adulto: Array <any> ;

  constructor(
    public database: DatabaseService,
              public toastcontroller: ToastController) {

              }



              Connection(){

                this.database.databaseConn().then((sqLite: SQLiteObject) => {
                  this.dbInstance = sqLite;
                  sqLite.executeSql(

                    `CREATE TABLE IF NOT EXISTS ${this.dbtable} (
                      id INTEGER,
                      id varchar(255),
                      acamado varchar(255),
                      alfabetizado varchar(255),
                      bilhete_de_identidade varchar(255),
                      control_pre_natal varchar(255),
                      data_de_nascimento varchar(255),
                      deficiencia varchar(255),
                      doenca varchar(255),
                      fonte_de_rendimento varchar(255),
                      gravida varchar(255),
                      nivel_escolar varchar(255),
                      nome_do_adulto varchar(255),
                      sexo varchar(255),
                      tem_contracto varchar(255),
                      zona_com_calamidade varchar(255)
                      )`,

                      [])
                    .then((res) => {
                      alert('Wow cool');
                    })
                    .catch((error) => alert(JSON.stringify(error)));
                })
                .catch((error) => alert(JSON.stringify(error)));
            }







}
