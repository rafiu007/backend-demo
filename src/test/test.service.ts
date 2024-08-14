import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TestRepository } from './test.repository';

@Injectable()
export class TestService {
  private readonly logger = new Logger(TestService.name);

  constructor(
    @InjectRepository(TestRepository)
    private testRepository: TestRepository,
  ) {}

  async getHello(): Promise<string> {
    await this.testRepository.getPolls();

    return 'Polls';
  }
}
