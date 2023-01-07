type QueryBulkFunc = (
  statement: string,
  params: (string | number | null)[]
) => void;

export default interface Migration {
  up(queryBulk: QueryBulkFunc): Promise<void>;
  down(queryBulk: QueryBulkFunc): Promise<void>;
}
