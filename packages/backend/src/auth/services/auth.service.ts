import { Injectable } from '@nestjs/common';
import { UserService } from '../../user/services/user.service';
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthService {
  constructor(private userService: UserService,
              private jwtService: JwtService
    ) {}

  async validateUser(phone: string, pass: string): Promise<any> {
    const user = await this.userService.findUserByPhone(phone);
    if(user && user.password === pass){
      const { password, ...result } = user;
      return result;
    }
    return null
  }


  async login(user: any){
    const payload = { phone: user.phone, sub: user._id };
    return {
      access_token: this.jwtService.sign(payload),
    }
  }
}
