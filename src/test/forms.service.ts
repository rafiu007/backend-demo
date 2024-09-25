import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TestRepository } from './test.repository';
import { Form } from './forms.entity';
import { ClaimForm } from './interface';
import { FormRepository } from './forms.repository';

@Injectable()
export class FormService {
  private readonly logger = new Logger(FormService.name);

  constructor(
    @InjectRepository(FormRepository)
    private formRepository: FormRepository,
  ) {}

  async addForm(claimForm: ClaimForm): Promise<Form> {
    try {
      const form = this.formRepository.create({
        name: claimForm.name,
        email: claimForm.email,
        amount: claimForm.amount,
        description: claimForm.description,
        dateOfIncident: claimForm.dateOfIncident,
        type: claimForm.claimType,
      });
      return this.formRepository.save(form);
    } catch (e) {
      this.logger.error(e);
      throw e;
    }
  }

  async getForms(): Promise<Form[]> {
    try {
      return this.formRepository.find();
    } catch (e) {
      this.logger.error(e);
      throw e;
    }
  }
}
