import migrations from './migrations';

export interface QueryStatement {
  statement: string;
  params: (string | number | null)[];
}

export default abstract class Database {
  abstract queryBulk(queryStatement: QueryStatement[]): Promise<unknown>;
  abstract query({ statement, params }: QueryStatement): Promise<unknown>;
  abstract close(): void;
  abstract purge(): void;

  async runMigrations() {
    await this.queryBulk([{
      statement: `CREATE TABLE IF NOT EXISTS versions (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        version INTEGER NOT NULL UNIQUE
      );`,
      params: [],
    },
    {
      statement: 'CREATE INDEX IF NOT EXISTS version_idx ON versions (version);',
      params: [],
    },
    {
      statement: 'INSERT OR IGNORE INTO versions (version) VALUES (0);',
      params: [],
    },
    ]);
    const versionRows = await this.query({ statement: 'SELECT version FROM versions ORDER BY version DESC LIMIT 1;', params: [] }) as { version: number; }[];
    let currentVersion = versionRows[0].version;
    while (migrations[currentVersion]) {
      const { up, down } = migrations[currentVersion];
      try {
        await up(this.queryBulk.bind(this));
        await this.query({
          statement: 'INSERT OR IGNORE INTO versions (version) VALUES (?);',
          params: [++currentVersion],
        });
      } catch (_error) {
        await down(this.queryBulk.bind(this));
      }
    }
  }

  runSeeds() { }
}
