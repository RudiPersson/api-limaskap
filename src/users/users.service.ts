import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaModuleService } from 'src/prisma-module/prisma-module.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaModuleService) {}

  async create(createUserDto: CreateUserDto) {
    const user = await this.prisma.user.create({
      data: createUserDto,
    });
    return user;
  }

  async findAll() {
    const users = await this.prisma.user.findMany();
    return users;
  }

  findOne(id: string) {
    const user = this.prisma.user.findUniqueOrThrow({
      where: { id: id },
    });

    return user;
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    const user = this.prisma.user.update({
      where: { id: id },
      data: updateUserDto,
    });

    return user;
  }

  remove(id: string) {
    const user = this.prisma.user.delete({
      where: { id: id },
    });

    return user;
  }
}
