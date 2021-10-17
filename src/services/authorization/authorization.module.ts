import { Injectable, Module } from '@nestjs/common';

import AuthorizationService from './authorization.service';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './schemas/user.schema';
import { AuthorizationController } from './authorization.controller';

@Module({
  providers: [AuthorizationService],
  controllers: [AuthorizationController],
  imports: [MongooseModule.forFeature([{
    name: User.name, schema: UserSchema
  }])]
})

@Injectable()
export class AuthorizationModule {

}
