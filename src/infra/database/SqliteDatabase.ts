import * as SQLite from 'expo-sqlite';

import Database from './Database';

export default class SqliteDatabase extends Database {
  private readonly db;

  constructor() {
    super();
    this.db = SQLite.openDatabase('GymAndTonus.db');
  }

  query(statement: string, params: (string | number | null)[]): Promise<unknown> {
    return new Promise((resolve, reject) => {
      this.db.transaction((tx) => {
        tx.executeSql(statement, params, (_, { rows }) => {
          resolve(rows._array);
        }, (_, sqlError) => {
          reject(sqlError);
          return true;
        });
      }, (txError) => {
        reject(txError);
      });
    });
  }

  close(): void {
    this.db.closeAsync();
  }

  purge(): void {
    this.db.deleteAsync();
  }
}
