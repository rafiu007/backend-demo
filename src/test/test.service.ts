import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TestRepository } from './test.repository';

const END_POINT =
  'https://us-central1-claimsorted-interviews.cloudfunctions.net/fetchClaims';

const AUTH_HEADER = 'Bearer claims_are_fun';

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

  async postHello(): Promise<string> {
    const resp = await this.testRepository.savePoll();
    return resp.question;
  }

  async fetchClaims(body: any): Promise<any> {
    const response = await fetch(END_POINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: AUTH_HEADER,
      },
      body: JSON.stringify(body),
    });

    console.log('response', response);

    const data = await response.json();
    return data;
  }

  async getClaims(): Promise<any> {
    this.logger.log('Fetching claims');

    let claims: any[] = [];

    let pagination = true;
    let page = 1;
    while (pagination) {
      console.log('Fetching claims');
      const body = {
        page_number: page,
      };
      const response = await this.fetchClaims(body);
      claims = claims.concat(response.claims);

      this.logger.log(JSON.stringify(response, null, 2));
      pagination = response.has_more;
      page++;
    }

    // get largest claim

    const largestClaim = claims.reduce((prev, current) =>
      prev.amount > current.amount ? prev : current,
    );

    return largestClaim;
  }
}
