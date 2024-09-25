import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config'; // Add this for .env support

import { Form } from './forms.entity';
import { FormService } from './forms.service';
import { FormRepository } from './forms.repository';
import { Poll } from './test.entity';

@Module({
  imports: [
    ConfigModule.forRoot(), // Load .env file
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT, 10),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [Poll, Form],
      synchronize: true, // Set to false in production
    }),
    TypeOrmModule.forFeature([Poll, Form]),
  ],
  providers: [, , FormService, FormRepository],
  exports: [, , FormService, FormRepository],
  controllers: [],
})
export class TestModule {}
