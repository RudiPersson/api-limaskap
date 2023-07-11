import { Injectable } from '@nestjs/common';
import { CreateMemberDto } from './dto/create-member.dto';
import { UpdateMemberDto } from './dto/update-member.dto';
import { PrismaModuleService } from 'src/prisma-module/prisma-module.service';

@Injectable()
export class MembersService {
  constructor(private prisma: PrismaModuleService) {}
  create(createMemberDto: CreateMemberDto) {
    const member = this.prisma.member.create({
      data: createMemberDto,
    });

    return member;
  }

  findAll() {
    const members = this.prisma.member.findMany();
    return members;
  }

  findOne(id: string) {
    const member = this.prisma.member.findUnique({
      where: {
        id: id,
      },
    });
    return member;
  }

  update(id: string, updateMemberDto: UpdateMemberDto) {
    const member = this.prisma.member.update({
      where: { id: id },
      data: updateMemberDto,
    });

    return member;
  }

  remove(id: string) {
    const member = this.prisma.member.delete({
      where: { id: id },
    });

    return member;
  }
}
