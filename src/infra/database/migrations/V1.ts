import Migration from './Migration';

export default class V1 implements Migration {
  async up(queryBulk: (statement: string, params: (string | number | null)[]) => void): Promise<void> {
    throw new Error('Method not implemented.');
  }

  async down(queryBulk: (statement: string, params: (string | number | null)[]) => void): Promise<void> {
    throw new Error('Method not implemented.');
  }

}
