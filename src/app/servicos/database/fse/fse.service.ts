/* eslint-disable @typescript-eslint/prefer-for-of */
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
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Injectable({
  providedIn: 'root'
})
export class FseService {

  private dbInstance: SQLiteObject;
  readonly db_table: string = "userUTableee";

  fse: Array <any> ;
<<<<<<< HEAD
  //db: SQLiteObject;

  camposfsc: any = {
    id: null,
    bairro: null,
    contacto: null,
    localizacao: null,
    nome: null,
    organizacao: null,
    razao: null
  };

=======
  fsePorId: Array<any>;
>>>>>>> e1401d2f9d88a9bf6985284440f96337788951c4


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


    getAllUsers() {
      return this.dbInstance.executeSql(`SELECT * FROM ${this.db_table}`, []).then((res) => {
        this.fse.pop();
        if (res.rows.length > 0) {
          for (let i = 0; i < res.rows.length; i++) {
            this.fse.push(res.rows.item(0));
          }
          return this.fse;
        }
      },(e) => {
        alert(JSON.stringify(e));
      });
    }

<<<<<<< HEAD
    // Get user
  async  getUser(id): Promise<any> {
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

=======
    // Obter apenas um com base no id


 getUser(id): Promise<any> {
  return this.dbInstance.executeSql(`SELECT * FROM ${this.db_table} WHERE id = ?`, [id])
  .then((res) => {

    this.fsePorId = [];

    if (res.rows.length > 0) {
      for (let i = 0; i < res.rows.length; i++) {
        this.fsePorId.push(res.rows.item(0));
      }
      return this.fsePorId;
    }

  });
}

    // Actualizar fse (um)
>>>>>>> e1401d2f9d88a9bf6985284440f96337788951c4

    //Filtrar

    async filter(text: string) {
      const sql = 'select * from contacts where name like ?';
      const data = [`%${text}%`];
      const result = await this.executeSQL(sql, data);
      const contacts = this.fillContacts(result.rows);
      return contacts;
    }

    executeSQL(sql: string, params?: any[]) {
      return this.dbInstance.executeSql(sql, params);
    }

    private fillContacts(rows: any) {
      this.fse = [];

      for (let i = 0; i < rows.length; i++) {
        this.camposfsc. id= rows.item(i).id;
        this.camposfsc. bairro= rows.item(i).bairro;
        this.camposfsc.  contacto= rows.item(i).contacto;
        this.camposfsc. localizacao= rows.item(i).localizacao;
        this.camposfsc. nome= rows.item(i).nome;
        this.camposfsc. organizacao= rows.item(i).organizacao;
        this.camposfsc. razao= rows.item(i).razao;
        this.fse.push(this.camposfsc);
      }

      return this.fse;
    }



    //fim do filtro

    // Update
    updateUser(id, name, email) {
      let data = [name, email];
      return this.dbInstance.executeSql(`UPDATE ${this.db_table} SET name = ?, email = ? WHERE id = ${id}`, data)
    }

    // Delete
    deleteUser(user) {
      this.dbInstance.executeSql(`
      DELETE FROM ${this.db_table} WHERE id = ${user}`, [])
        .then(() => {

          this.deletedFamily();
          this.getAllUsers();
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



