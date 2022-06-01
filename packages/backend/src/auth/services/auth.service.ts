import { Injectable } from '@nestjs/common';
import { UserService } from '../../user/service/user.service';
import { LoginUserInput } from '../dto/login-User.input';

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}

  async validateUser(phone: string, password: string): Promise<any> {
    const user = await this.userService.findUserByPhone(phone);

    console.log(user);

    if (user && user.password === password) {
      const { ...result } = user;
      return result;
    }
    return null;
  }

  async login(loginUserInput: LoginUserInput) {
    const user = await this.userService.findUserByPhone(loginUserInput.phone);
    const { ...result } = user;
    return {
      access_Token: 'jwt',
      user: result,
    };
  }
}
