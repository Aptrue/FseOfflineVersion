/* eslint-disable no-trailing-spaces */
/* eslint-disable @typescript-eslint/no-inferrable-types */

import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { SQLitePorter } from '@ionic-native/sqlite-porter/ngx';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  db: SQLiteObject;
  databaseName: string = 'contatos.db';

  constructor(
    private sqlite: SQLite,
    private sqlitePorter: SQLitePorter,
    private toastController: ToastController
    ) { }

    async openDatabase() {
      try {
        this.db = await this.sqlite.create({ name: this.databaseName, location: 'default' });
        await this.createDatabase();

          const toast = await this.toastController.create({
            header: 'Base de dados',
            message: 'Base de dados criado com sucesso.',
            color: 'success',
            position: 'top',
            duration: 8000
          });
          toast.present();

      } catch (error) {
        console.error('Ocorreu um erro ao criar o banco de dados', error);
      }
    }

    async createDatabase() {
      const sqlCreateDatabase = this.getCreateTable();
      const result = await this.sqlitePorter.importSqlToDb(this.db, sqlCreateDatabase);
      return result ? true : false;
    }

    getCreateTable() {
      const sqls = [];
      sqls.push('CREATE TABLE IF NOT EXISTS contacts (id integer primary key AUTOINCREMENT, name varchar(100));');
      return sqls.join('\n');
    }

    executeSQL(sql: string, params?: any[]) {
      return this.db.executeSql(sql, params);
    }



}
