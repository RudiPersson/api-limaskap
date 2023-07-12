import {
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { PrismaModuleService } from 'src/prisma-module/prisma-module.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
    private prisma: PrismaModuleService,
  ) {}

  async signIn(email: string, pass: string): Promise<any> {
    const user = await this.usersService.findOneByEmail(email);
    if (user?.password !== pass) {
      throw new UnauthorizedException();
    }

    const payload = { sub: user.id, email: user.email };

    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  async nextAuthLogin(email: string, password: string) {
    const user = await this.prisma.user.findUnique({
      where: { email: email },
    });

    if (user && user.password === password) {
      const { password, ...result } = user;
      const payload = { sub: user.id, email: user.email };
      const access_token = await this.jwtService.signAsync(payload);
      return { ...result, access_token };
    }

    throw new HttpException('Wrong email or password', HttpStatus.UNAUTHORIZED);
  }
}
