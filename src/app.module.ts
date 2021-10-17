import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { AuthorizationModule } from './services/authorization/authorization.module';
import { ProductsModule } from './services/products/products.module';

import { DB_HOST, DB_PASSWORD, DB_PORT, DB_USER, DB_NAME } from './config/main';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: DB_HOST,
    port: DB_PORT,
    username: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
    entities: [],
    synchronize: true,
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
