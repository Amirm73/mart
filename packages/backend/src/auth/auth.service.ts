import { Injectable } from '@nestjs/common';
import { UserService } from "../user/services/user.service";


@Injectable()
export class AuthService {
  constructor(private userService: UserService) { }



  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.userService.findOne(username);

    // console.log(user);
    
    // if (user && user.password === password) {
    //   const { password, ...result } = user;
    //   return result;
    // }

    // return null;
  }
}
