/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable prefer-const */
/* eslint-disable arrow-body-style */
/* eslint-disable @typescript-eslint/semi */
/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/quotes */

import { Injectable } from '@angular/core';
import { DatabaseService } from '../database.service';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';

@Injectable({
  providedIn: 'root'
})
export class MoradiaService {

  private dbInstance: SQLiteObject;
  readonly db_table: string = "userMoradia";
  moradia: Array<any>;

  constructor(
    private database: DatabaseService
  ) { }


  coennection(){
    this.database.databaseConn().then((sqLite: SQLiteObject) => {
      this.dbInstance = sqLite;
      sqLite.executeSql(

        `CREATE TABLE IF NOT EXISTS ${this.db_table} (
            id INTEGER,
            abastecimento_de_agua varchar(255),
            destino_de_fezes varchar(255),
            destino_do_lixo varchar(255),
            em_caso_de_doenca varchar(255),
            energia varchar(255),
            meio_de_transporte varchar(255),
            numero_de_acomodacao varchar(255),
            tipo_de_casa varchar(255),
            tratamento_de_agua varchar(255)
          )`,

          [])
        .then((res) => {
          // alert(JSON.stringify(res));
        })
        .catch((error) => alert(JSON.stringify(error)));
    })
    .catch((error) => alert(JSON.stringify(error)));
  }




  /**Inserir moradia */

  public addItem(id,b,c,l,n,o,r,t,w,h) {

    this.dbInstance.executeSql(`
    INSERT INTO ${this.db_table} (
      id,
      abastecimento_de_agua,
      destino_de_fezes,
      destino_do_lixo,
      em_caso_de_doenca,
      energia,
      meio_de_transporte,
      numero_de_acomodacao,
      tipo_de_casa,
      tratamento_de_agua
    )

    VALUES ('${id}','${b}', '${c}', '${l}','${n}','${o}','${r}','${t}','${w}','${h}')`, [])

      .then(() => {
        alert("Success");
       // this.getAllUsers();
      }, (e) => {
        alert(JSON.stringify(e.err));
      });
  }


  /**Fim da insercao da moradia */


  /**Ontendo todas moradias */
  getAllUsers() {
    return this.dbInstance.executeSql(`SELECT * FROM ${this.db_table}`, []).then((res) => {
      this.moradia = [];
      if (res.rows.length > 0) {
        for (let i = 0; i < res.rows.length; i++) {
          this.moradia.push(res.rows.item(i));
        }
        return this.moradia;
      }
    },(e) => {
      alert(JSON.stringify(e));
    });
  }


}
