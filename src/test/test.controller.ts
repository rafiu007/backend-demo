import { Controller, Get, Post } from '@nestjs/common';
import { TestService } from './test.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('test')
@ApiTags('test')
export class TestsController {
  constructor(private testService: TestService) {}

  @Get()
  getHello(): Promise<string> {
    return this.testService.getHello();
  }

  @Post()
  postHello(): Promise<string> {
    return this.testService.postHello();
  }
}
