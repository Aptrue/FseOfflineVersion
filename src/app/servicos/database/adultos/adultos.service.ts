/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable prefer-const */
/* eslint-disable arrow-body-style */
/* eslint-disable @typescript-eslint/semi */
/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/quotes */

import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { DatabaseService } from '../database.service';
import { ToastController } from '@ionic/angular';


@Injectable({
  providedIn: 'root'
})
export class AdultosService {

  private dbInstance: SQLiteObject;
  readonly db_table: string = "userCriancadulto";
  crianca: Array <any> ;
  criancaPorId: any [];

  constructor(
    public database: DatabaseService,
              public toastcontroller: ToastController) {

              }



              Connection(){

                this.database.databaseConn().then((sqLite: SQLiteObject) => {
                  this.dbInstance = sqLite;
                  sqLite.executeSql(

                    `CREATE TABLE IF NOT EXISTS ${this.db_table} (
                      id INTEGER,
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
                       //alert("wow cool");
                    })
                    .catch((error) => alert(JSON.stringify(error)));
                })
                .catch((error) => alert(JSON.stringify(error)));
            }




    //  Insercao de criancas;

    public addItem(id,cart,cl,con,clr,data,def,doe,es,gr,ma,nome,or,re,reg) {

      this.dbInstance.executeSql(`
      INSERT INTO ${this.db_table} (
    id,
    acamado,
    alfabetizado,
    bilhete_de_identidade,
    control_pre_natal,
    data_de_nascimento,
    deficiencia,
    doenca,
    fonte_de_rendimento,
    gravida,
    nivel_escolar,
    nome_do_adulto,
    sexo,
    tem_contracto,
    zona_com_calamidade,
      )

      VALUES ('${id}','${cart}', '${cl}', '${con}','${clr}','${data}','${def}','${doe}','${es}',
      '${gr}','${ma}','${nome}','${or}','${re}','${reg}')`, [])

        .then(() => {
          alert("Success");
        }, (e) => {
          alert(JSON.stringify(e.err));
        });
    }


    
}
