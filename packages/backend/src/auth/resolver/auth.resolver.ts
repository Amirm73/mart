// import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
// import { AuthGuard } from '@nestjs/passport';
import { LoginUserInput } from '../dto/LoginUser.input';
import { LoginResponse } from '../dto/LoginUser.response';
import { RegisterClientInput } from '../dto/RegisterClient.input';
import { SignupUserInput } from '../dto/SignupUser.input';
import { SignupResponse } from '../dto/SignupUser.response';
import { AuthService } from '../services/auth.service';

@Resolver()
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @Mutation(() => LoginResponse)
  // @UseGuards(AuthGuard('local'))
  login(@Args('LoginUserInput') {phone, password}: LoginUserInput) {
    return this.authService.login(phone, password);
  }

  @Mutation(() => SignupResponse)
  // @UseGuards(AuthGuard('local'))
  async signup(@Args('SignupUserInput') signupUserInput: SignupUserInput) {
    try {
      const password = await this.authService.signup(signupUserInput.phone);
      return{ password }
    } catch (error) {
      throw {
        message: error.message
       }
    }
  }

  @Mutation(() => SignupResponse)
  // @UseGuards(AuthGuard('local'))
  async timeoutPassword(@Args('SignupUserInput') signupUserInput: SignupUserInput) {
    try {
      const password = await this.authService.timeoutPassword(signupUserInput.phone);
      return{ password }
    } catch (error) {
      throw {
        message: error.message
       }
    }
  }

  @Mutation(() => SignupResponse)
  // @UseGuards(AuthGuard('local'))
  async forgotPassword(@Args('SignupUserInput') signupUserInput: SignupUserInput) {
    try {
      const password = await this.authService.forgotPassword(signupUserInput.phone);
      return{ password }
    } catch (error) {
      throw {
        message: error.message
       }
    }
  }

  @Mutation( ()=> LoginResponse)
  // @UseGuards(AuthGuard('local'))
  async registerClient(@Args ('RegisterClientInput') {phone, password}:RegisterClientInput ){
    try {
      await this.authService.registerClient(phone, password);
      return this.authService.login(phone, password);
    } catch (error) {
      throw {
        code: 503,
        message: error.message
       }
    }
  }
}