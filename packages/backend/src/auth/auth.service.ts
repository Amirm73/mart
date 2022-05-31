import { Injectable } from '@nestjs/common';
import { UserService } from '../user/service/user.service';

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}

  async validateUser(phone: string): Promise<any> {
    const user = await this.userService.findUserByPhone(phone);

    console.log(user.password);

    // if (user && user.password === password) {
    //   const { password, ...result } = user;
    //   return result;
    // }

    // return null;
  }
}
