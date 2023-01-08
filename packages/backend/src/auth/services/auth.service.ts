import {
  BadRequestException,
  CACHE_MANAGER,
  forwardRef,
  Inject,
  Injectable,
  NotAcceptableException
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { Cache, memoryStore } from 'cache-manager';
import { User } from '../../user/domain/user.model';
import { UserService } from '../../user/service/user.service';

@Injectable()
export class AuthService {
  constructor(
    @Inject(forwardRef(() => UserService))
    private usersService: UserService,
    private jwtTokenService: JwtService,
    @Inject(CACHE_MANAGER) private cacheManager: Cache
  ) {}

  private memoryCache = memoryStore({ttl: 25000})

  async signup(phone: string) {
    const user = await this.usersService.findUserByPhone(phone);
    if (user) {
      throw new BadRequestException(`Your phone number has been registered before`);
    } else {
      const pass = this.generatePassword();
      await this.memoryCache.set(`${phone}`, `${pass}`);
      return pass
      //  TODO: SEND SMS SERVICE
    }
  }

  private generatePassword(min=1000, max=9999) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  async registerClient(phone, inputPass) {
    const user = await this.usersService.findUserByPhone(phone);
    
    if (user) {
      throw new BadRequestException(`Your phone number has been registered before`);
    } else {
      const cachedPass = await this.memoryCache.get(`${phone}`);
      if (cachedPass === inputPass) {
        return await this.usersService.createUser( phone, inputPass )
      } else {
        throw new NotAcceptableException("Phone or password is incorrect")
      }
    }
  }

  async login(phone, password) {
    const user = await this.validateUserPass(
      phone,
      password,
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
