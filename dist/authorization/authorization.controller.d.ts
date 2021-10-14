import { User } from './schemas/user.schema';
import CreateUserDto from './dto/create-user.dto';
import AuthorizationService from './authorization.service';
export declare class AuthorizationController {
    private readonly authorizationService;
    constructor(authorizationService: AuthorizationService);
    createUser(createUserDto: CreateUserDto): Promise<User>;
}
