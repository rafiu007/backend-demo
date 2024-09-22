import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config'; // Add this for .env support
import { Poll } from './test.entity';
import { TestRepository } from './test.repository';
import { TestService } from './test.service';
import { TestsController } from './test.controller';

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
      entities: [Poll],
      synchronize: true, // Set to false in production
    }),
    TypeOrmModule.forFeature([Poll]),
  ],
  providers: [TestRepository, TestService],
  exports: [TestRepository, TestService],
  controllers: [TestsController],
})
export class TestModule {}
