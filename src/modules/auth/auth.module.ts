import { Module } from '@nestjs/common';

import AuthService from './service/auth.service';

import { AuthController } from './controller/auth.controller';

import UsersModule from '../users/users.module';

@Module({
  imports: [UsersModule],
  controllers: [AuthController],
  providers: [AuthService],
  exports: []
})

export default class AuthModule {

}