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
                      cartao_de_vacina varchar(255),
                      classe varchar(255),
                      conflito_com_a_lei varchar(255),
                      control_pre_natal varchar(255),
                      data_de_nascimento varchar(255),
                      deficiencia varchar(255),
                      doenca varchar(255),
                      estuda varchar(255),
                      gravida varchar(255),
                      material varchar(255),
                      nome_completo varchar(255),
                      orfao varchar(255),
                      rede_mosquiteira varchar(255),
                      registro_de_nascimento varchar(255),
                      sexo varchar(255),
                      tratamento varchar(255),
                      uniforme varchar(255),
                      vive_com_quem varchar(255)
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
