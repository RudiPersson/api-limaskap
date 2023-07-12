import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';
import { signInDto } from 'src/auth/dto/signIn.dto';
import { Public } from 'src/auth/public.decorator';

@Controller({
  path: 'auth',
  version: '1',
})
export class AuthController {
  constructor(private authService: AuthService) {}

  @Public()
  @HttpCode(HttpStatus.OK)
  @Post('login')
  signIn(@Body() signInDto: signInDto) {
    return this.authService.signIn(signInDto.email, signInDto.password);
  }

  @Public()
  @Post('next-auth-login')
  nextAuthLogin(@Body() signInDto: signInDto) {
    return this.authService.nextAuthLogin(signInDto.email, signInDto.password);
  }
}
