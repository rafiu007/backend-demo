import { Injectable, Logger } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { Poll } from './test.entity';

@Injectable()
export class TestRepository extends Repository<Poll> {
  constructor(
    private dataSource: DataSource,
    private readonly logger = new Logger(TestRepository.name),
  ) {
    super(Poll, dataSource.createEntityManager());
  }

  async getPolls(): Promise<Poll[]> {
    try {
      return this.find();
    } catch (e) {
      this.logger.error(e);
      throw e;
    }
  }
}
