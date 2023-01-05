// import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
// import { AuthGuard } from '@nestjs/passport';
import { LoginUserInput } from '../dto/LoginUser.input';
import { LoginResponse } from '../dto/LoginUser.response';
import { SignupUserInput } from '../dto/SignupUser.input';
import { SignupResponse } from '../dto/SignupUser.response';
import { AuthService } from '../services/auth.service';

@Resolver()
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @Mutation(() => LoginResponse)
  // @UseGuards(AuthGuard('local'))
  login(@Args('LoginUserInput') loginUserInput: LoginUserInput) {
    return this.authService.login(loginUserInput);
  }

  @Mutation(() => SignupResponse)
  // @UseGuards(AuthGuard('local'))
  async signup(@Args('SignupUserInput') signupUserInput: SignupUserInput) {
    try {
      const password = await this.authService.signup(signupUserInput.phone);
      return{ password }
    } catch (error) {
      throw {
        code: 503,
        message: error.message
       }
    }
  }
}
