import { Body, Controller } from '@nestjs/common';
import { AuthService } from './auth.service';
import { MessagePattern } from '@nestjs/microservices';
import { LoginUserDto, RegisterUserDto } from './dto';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @MessagePattern('auth.register.user')
  registerUser(@Body() registerUserDto: RegisterUserDto ) {
    return registerUserDto;
  }

  @MessagePattern('auth.login.user')
  loginUser(@Body() loginUserDto: LoginUserDto) {
    return loginUserDto;
  }

  @MessagePattern('auth.verify.user')
  verifyToken() {
    return 'verify token';
  }



}
