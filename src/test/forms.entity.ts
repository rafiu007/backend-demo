import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';
import { ClaimType } from './interface';

@Entity('claims_form')
export class Form {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  name: string;

  @Column({ nullable: false })
  email: string;

  // stores *100 for floating points
  @Column({ nullable: false })
  amount: number;

  @Column({ nullable: false })
  description: string;

  @Column({ nullable: false })
  type: ClaimType;

  @Column({ nullable: false, type: 'date' })
  dateOfIncident: string;

  @CreateDateColumn()
  createdAt: Date;
}
