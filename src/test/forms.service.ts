import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TestRepository } from './test.repository';
import { Form } from './forms.entity';

@Injectable()
export class TestService {
  private readonly logger = new Logger(TestService.name);

  constructor(
    @InjectRepository(TestRepository)
    private formRepository: Form,
  ) {}
}
