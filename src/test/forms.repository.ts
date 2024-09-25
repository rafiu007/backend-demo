import { Injectable, Logger } from '@nestjs/common';
import { Repository, DataSource } from 'typeorm';
import { Poll } from './test.entity';

@Injectable()
export class TestRepository extends Repository<Poll> {
  private readonly logger = new Logger(TestRepository.name);

  constructor(dataSource: DataSource) {
    super(Poll, dataSource.createEntityManager());
  }

  async getPolls(): Promise<Poll[]> {
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

  async savePoll() {
    try {
      const poll = this.create({
        question: 'What is your favorite color?',
        options: ['Red', 'Blue', 'Green'],
      });
      return this.save(poll);
    } catch (e) {
      this.logger.error(e);
      throw e;
    }
  }
}
