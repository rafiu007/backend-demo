import { Injectable, Logger } from '@nestjs/common';
import { Repository, DataSource } from 'typeorm';
import { Poll } from './test.entity';
import { Form } from './forms.entity';

@Injectable()
export class FormRepository extends Repository<Form> {
  private readonly logger = new Logger(FormRepository.name);

  constructor(dataSource: DataSource) {
    super(Poll, dataSource.createEntityManager());
  }

  async getPolls(): Promise<Form[]> {
    try {
      const a = await this.find();
      if (a) {
        return a;
      }
      return [];
    } catch (e) {
      this.logger.error(e);
      throw e;
    }
  }
}
