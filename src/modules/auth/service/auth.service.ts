import { Injectable } from '@nestjs/common';
import Admin from '../../admin/model/admin';
import AdminRepository from '../../admin/service/admin.repository';

@Injectable()
export default class AuthService {
  constructor(private adminRepository: AdminRepository) {
  }

  async validateAdmin(login: string, pass: string): Promise<Admin> | null {
    const admin = await this.adminRepository.findByLogin(login);

    if (admin && admin.password === pass) {
      const { password, ...secureAdmin } = admin;

      // @ts-ignore
      return secureAdmin;
    }
  }
}