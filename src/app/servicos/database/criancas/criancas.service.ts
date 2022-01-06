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
export class CriancasService {

  private dbInstance: SQLiteObject;
  readonly db_table: string = "userCrianca";
  crianca: Array <any> ;


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
                      // alert(JSON.stringify(res));
                    })
                    .catch((error) => alert(JSON.stringify(error)));
                })
                .catch((error) => alert(JSON.stringify(error)));
            }




    //  Insercao de criancas;

    public addItem(id,cart,cl,con,clr,data,def,doe,es,gr,ma,nome,or,re,reg,sex,tra,uni,vive) {

      this.dbInstance.executeSql(`
      INSERT INTO ${this.db_table} (
        id,
        cartao_de_vacina,
        classe,
        conflito_com_a_lei,
        control_pre_natal,
        data_de_nascimento,
        deficiencia,
        doenca,
        estuda,
        gravida,
        material,
        nome_completo,
        orfao,
        rede_mosquiteira,
        registro_de_nascimento,
        sexo,
        tratamento,
        uniforme,
        vive_com_quem
      )

      VALUES ('${id}','${cart}', '${cl}', '${con}','${clr}','${data}','${def}','${doe}','${es}',
      '${gr}','${ma}','${nome}','${or}','${re}','${reg}','${sex}','${tra}','${uni}','${vive}')`, [])

        .then(() => {
          alert("Success");
         // this.getAllUsers();
        }, (e) => {
          alert(JSON.stringify(e.err));
        });
    }



    getAllUsers() {
      return this.dbInstance.executeSql(`SELECT * FROM ${this.db_table}`, []).then((res) => {
        this.crianca = [];
        if (res.rows.length > 0) {
          for (let i = 0; i < res.rows.length; i++) {
            this.crianca.push(res.rows.item(i));
          }
          return this.crianca;
        }
      },(e) => {
        alert(JSON.stringify(e));
      });
    }

     // Get user
     getUser(id): Promise<any> {
      return this.dbInstance.executeSql(`SELECT * FROM ${this.db_table} WHERE id = ?`, [id])
      .then((res) => {
        return {
          id: res.rows.item(0).id,
          bairro: res.rows.item(0).bairro,
          contacto: res.rows.item(0).contacto,
          localizacao: res.rows.item(0).localizacao,
          nome: res.rows.item(0).nome,
          organizacao: res.rows.item(0).organizacao,
          razao: res.rows.item(0).razao,
        }
      });
    }
}
