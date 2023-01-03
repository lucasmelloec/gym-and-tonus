export default abstract class Database {
  abstract query(statement: string, params: (string | number | null)[]): Promise<unknown>;
  abstract close(): void;
  abstract purge(): void;

  protected runMigrations() { }
  protected runSeeds() { }
}
