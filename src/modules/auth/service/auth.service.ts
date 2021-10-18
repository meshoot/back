import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { User } from '../../users/model/user.entity';

@Injectable()
export default class AuthService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>
  ) {}

  async validateUser(login: string): Promise<User | null> {
    const user: User = await this.usersRepository.findOne({where: {login}});

    if (user) {
      const { password, ...secureUser } = user;

      return  secureUser;
    }

    return null;
  }
}