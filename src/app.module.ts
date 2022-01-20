import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppService } from './app.service';

import { AppController } from './app.controller';
import AuthController from './modules/auth/controller/auth.controller';

import AuthModule from './modules/auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    AuthModule
  ],
  controllers: [AppController, AuthController],
  providers: [AppService],
})

export class AppModule {
  constructor() {
  }
}
