import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

import CreateUserDto from './dto/create-user.dto';
import { User, UserDocument } from './schemas/user.schema';


@Injectable()
export default class AuthorizationService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {
  }

  async createUser(userDto: CreateUserDto): Promise<User> {
    const newUser = new this.userModel(userDto);

    return newUser.save();
  }
}