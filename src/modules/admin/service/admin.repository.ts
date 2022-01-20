import { Injectable } from '@nestjs/common';
import Admin from './../model/admin';

@Injectable()
export default class AdminRepository {
  constructor(private admins: Admin[]) {
    this.admins = [
      {
        id: 1,
        login: 'admin',
        password: 'root'
      }
    ];
  }

  async findByLogin(login: string): Promise<Admin> | undefined {
    return this.admins.find(admin => admin.login === login);
  }
}