import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { PrismaModuleModule } from './prisma-module/prisma-module.module';
import { UsersModule } from './users/users.module';
import { LoggerMiddleware } from 'src/utils/logger.middleware';
import { AssociationsModule } from './associations/associations.module';
import { TeamsModule } from './teams/teams.module';
import { MembersModule } from './members/members.module';
import { AuthModule } from './auth/auth.module';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './auth/constants';

@Module({
  imports: [
    ConfigModule.forRoot(),
    PrismaModuleModule,
    UsersModule,
    AssociationsModule,
    TeamsModule,
    MembersModule,
    AuthModule,
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' },
    }),
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
