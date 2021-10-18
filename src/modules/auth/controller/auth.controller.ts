import { Controller, Post, Request } from '@nestjs/common';

import AuthService from '../service/auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Request() req) {
    return await this.authService.validateUser(req.login)
  }
}
