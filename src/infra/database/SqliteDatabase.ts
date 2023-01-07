import * as SQLite from 'expo-sqlite';

import Database, { QueryStatement } from './Database';

export default class SqliteDatabase extends Database {
  private readonly db;

  constructor() {
    super();
    this.db = SQLite.openDatabase('GymAndTonus.db');
  }

  queryBulk(queryStatements: QueryStatement[]): Promise<unknown[]> {
    return new Promise((resolveTx, rejectTx) => {
      this.db.transaction((tx) => {
        Promise.all(queryStatements.map((query) => {
          return new Promise((resolveSql, rejectSql) => {
            tx.executeSql(query.statement, query.params,
              (_tx, { rows }) => resolveSql(rows._array),
              (_tx, error) => {
                rejectSql(error);
                return true;
              });
          });
        })).then(resolveTx).catch(rejectTx);
      });
    });
  }

  async query({ statement, params }: QueryStatement): Promise<unknown> {
    return this.queryBulk([{ statement, params }])
      .then((rows) => rows[0])
      .catch((error) => {
        throw error;
      });
  }

  close(): void {
    this.db.closeAsync();
  }

  purge(): void {
    this.db.deleteAsync();
  }
}
