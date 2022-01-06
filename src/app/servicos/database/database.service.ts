/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable @typescript-eslint/naming-convention */

import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  readonly db_name: string = "remoteste.db";

  constructor(
    private sqlite: SQLite
  ) {
    this.databaseConn();
  }



     // Create SQLite database
     databaseConn() {

      return this.sqlite.create({
              name: this.db_name,
              location: 'default'
            });
    }

}
