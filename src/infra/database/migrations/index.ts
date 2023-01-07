type QueryBulk = (queryStatement: { statement: string; params: (string | number | null)[]; }[]) => Promise<unknown[]>;

const migrations = [
  {
    up: async (queryBulk: QueryBulk) => {
      await queryBulk([
        { statement: 'CREATE TABLE IF NOT EXISTS asd (id INTEGER PRIMARY KEY);', params: [] },
      ]);
    },
    down: async (_queryBulk: QueryBulk) => {
    },
  },
  {
    up: async (queryBulk: QueryBulk) => {
      await queryBulk([
        { statement: 'CREATE TABLE IF NOT EXISTS ddd (id INTEGER PRIMARY KEY);', params: [] },
      ]);
    },
    down: async (_queryBulk: QueryBulk) => {
    },
  },
];

export default migrations;
