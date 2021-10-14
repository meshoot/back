import { Model } from "mongoose";
import CreateUserDto from './dto/create-user.dto';
import { User, UserDocument } from './schemas/user.schema';
export default class AuthorizationService {
    private userModel;
    constructor(userModel: Model<UserDocument>);
    createUser(userDto: CreateUserDto): Promise<User>;
}
