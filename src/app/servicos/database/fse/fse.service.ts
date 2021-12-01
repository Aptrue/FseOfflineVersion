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
export class FseService {

  private dbInstance: SQLiteObject;
  readonly db_table: string = "userUTableee";

  fse: Array <any> ;


  constructor(public database: DatabaseService,
              public toastcontroller: ToastController
    ) { }



  Connection(){

      this.database.databaseConn().then((sqLite: SQLiteObject) => {
        this.dbInstance = sqLite;
        sqLite.executeSql(

          `CREATE TABLE IF NOT EXISTS ${this.db_table} (
              id INTEGER,
              bairro varchar(255),
              contacto varchar(255) ,
              localizacao varchar(255) ,
              nome varchar(255),
              organizacao varchar(255),
              razao varchar(255)
            )`,

            [])
          .then((res) => {
            // alert(JSON.stringify(res));
          })
          .catch((error) => alert(JSON.stringify(error)));
      })
      .catch((error) => alert(JSON.stringify(error)));
  }


   /* ---------------Abaixo criacao das operacoes de crud pra o primeio formulario fse-------------------------------- */

    //  Insercao

    public addItem(id,b,c,l,n,o,r) {

      this.dbInstance.executeSql(`
      INSERT INTO ${this.db_table} (
              id,
              bairro,
              contacto,
              localizacao,
              nome,
              organizacao,
              razao
      )

      VALUES ('${id}','${b}', '${c}', '${l}','${n}','${o}','${r}')`, [])

        .then(() => {
          alert("Success");
          this.getAllUsers();
        }, (e) => {
          alert(JSON.stringify(e.err));
        });
    }


    //Obter todos da fse
    getAllUsers() {
      return this.dbInstance.executeSql(`SELECT * FROM ${this.db_table}`, []).then((res) => {
        this.fse = [];
        if (res.rows.length > 0) {
          for (let i = 0; i < res.rows.length; i++) {
            this.fse.push(res.rows.item(i));
          }
          return this.fse;
        }
      },(e) => {
        alert(JSON.stringify(e));
      });
    }

    // Obter apenas um com base no id

    getUser(id): Promise<any> {
      return this.dbInstance.executeSql(`SELECT * FROM ${this.db_table} WHERE id = ?`, [id])
      .then((res) => {
        return {
          user_id: res.rows.item(0).user_id,
          name: res.rows.item(0).name,
          email: res.rows.item(0).email
        }
      });
    }

    // Actualizar fse (um)

    updateUser(id, name, email) {
      let data = [name, email];
      return this.dbInstance.executeSql(`UPDATE ${this.db_table} SET

      bairro = ?,
      contacto = ? ,
      localizacao = ?,
      nome = ?,
      organizacao = ?,
      razao = ? WHERE id = ${id}`, data)
    }

    // Deletar fse
    deleteUser(id) {
      this.dbInstance.executeSql(`
      DELETE FROM ${this.db_table} WHERE id = ${id}`, [])
        .then(() => {
           this.deletedFamily();
          this.getAllUsers(); // obtendo todos responsaveis
        })
        .catch(e => {
          alert(JSON.stringify(e))
        });
    }


    /* fim das operacoes de crus para Fse primeiro formulario */


    //toast message indicando que a familia foi deleteada

    async deletedFamily() {
      const toast = await this.toastcontroller.create({
        message: 'Familia deletada',
        duration: 2000,
        color: 'success'
      });
      toast.present();
    }











}



