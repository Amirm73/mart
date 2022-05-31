<<<<<<< HEAD
import { Resolver } from '@nestjs/graphql';

@Resolver()
export class AuthResolver {}
=======
import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { AuthGuard } from '@nestjs/passport';
import { LoginResponse } from '../dto/login-response';
import { LoginUserInput } from '../dto/login-User.input';
import { AuthService } from '../services/auth.service';

@Resolver()
export class AuthResolver {
  constructor(private authService: AuthService){}

  @Mutation(() => LoginResponse)
  @UseGuards(AuthGuard("local"))
  login(@Args("LoginUserInput") loginUserInput: LoginUserInput){
    return this.authService.login(loginUserInput);
  }
}
// >>>>>>> master
