import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Poll } from './test.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'traactlocal',
      entities: [Poll],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Poll]),
  ],
  providers: [],
  controllers: [],
})
export class AppModule {}
