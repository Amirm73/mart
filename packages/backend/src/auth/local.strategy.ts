import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { AuthService } from "./services/auth.service";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy){
  constructor(private authService: AuthService){
    super();
  }

  async validate(phone: string, password: string): Promise<any>{
    const user = await this.authService.validateUserPass(phone,password);
    if(!user) {
       throw new UnauthorizedException() 
      }
    return null
  }
}
