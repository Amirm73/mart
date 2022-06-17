import { Strategy } from "passport-local";
import { PassportStrategy } from "@nestjs/passport";
import { Injectable, UnauthorizedException } from '@nestjs/common';
// <<<<<<< HEAD
import { AuthService } from "./services/auth.service";
// =======
// import { AuthService } from "./auth.service";
// >>>>>>> master

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy){
  constructor(private authService: AuthService){
    super();
  }

  async validate(phone: string, password: string): Promise<any>{
    const user = await this.authService.validateUser(phone,password);
    if(!user) {
       throw new UnauthorizedException() 
      }
    return null
  }
}
