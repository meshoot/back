import { Body, Controller, HttpCode, HttpStatus } from '@nestjs/common';
import {Post} from '@nestjs/common';
import { User } from './schemas/user.schema';
import CreateUserDto from './dto/create-user.dto';
import AuthorizationService from './authorization.service';

@Controller('authorization')
export class AuthorizationController {
  constructor(private readonly authorizationService: AuthorizationService) {
  }

  @Post('registration')
  createUser(@Body() createUserDto: CreateUserDto ): Promise<User> {
    return this.authorizationService.createUser(createUserDto);
  }
}
