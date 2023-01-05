import {
  BadRequestException,
  forwardRef,
  Inject,
  Injectable
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { User } from '../../user/domain/user.model';
import { UserService } from '../../user/service/user.service';
import { LoginUserInput } from '../dto/LoginUser.input';
@Injectable()
export class AuthService {
  constructor(
    @Inject(forwardRef(() => UserService))
    private usersService: UserService,
    private jwtTokenService: JwtService,
  ) {}

  async signup(phone: string) {
    const user = await this.usersService.findUserByPhone(phone);
    
    if (user) {
      throw new BadRequestException(`Your phone number has been registered before`);
    } else {
      const pass = this.generatePassword();
     console.log('=============  pass ============ : ',  pass); 
     return pass
      //  TODO: Redis SERVICE
      //  TODO: SEND SMS SERVICE
    }
  }

  private generatePassword(min=1000, max=9999) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  async login(loginUserInput: LoginUserInput) {
    const user = await this.validateUserPass(
      loginUserInput.phone,
      loginUserInput.password,
    );
    if (!user) {
      throw new BadRequestException(`Phone or password are invalid`);
    } else {
      return this.generateUserCredentials(user);
    }
  }

  async validateUserPass(phone: string, password: string): Promise<any> {
    const user = await this.usersService.findUserByPhone(phone);

    if (user) {
      if (await bcrypt.compare(password, user.password)) {
        delete user.password;
        return user;
      }
    }
    return null;
  }

  generateUserCredentials(user: User) {
    const payload = {
      email: user.email,
      phone: user.phone,
      firstName: user.firstName,
      lastName: user.lastName,
      roles: user.roles,
    };

    return {
      accessToken: this.jwtTokenService.sign(payload),
    };
  }
}
