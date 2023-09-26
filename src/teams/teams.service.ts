import { Injectable } from '@nestjs/common';
import { CreateTeamDto } from './dto/create-team.dto';
import { UpdateTeamDto } from './dto/update-team.dto';
import { PrismaModuleService } from 'src/prisma-module/prisma-module.service';

@Injectable()
export class TeamsService {
  constructor(private prisma: PrismaModuleService) {}
  async create(createTeamDto: CreateTeamDto) {
    const team = await this.prisma.team.create({
      data: createTeamDto,
    });

    return team;
  }

  findAll() {
    const teams = this.prisma.team.findMany({
      include: {
        association: true,
      },
    });
    return teams;
  }

  findOne(id: string) {
    const team = this.prisma.team.findUniqueOrThrow({
      where: { id },
    });
    return team;
  }

  findOneWithMembers(id: string) {
    const team = this.prisma.team.findUniqueOrThrow({
      where: { id },
      include: {
        member: true,
      },
    });
    return team;
  }

  update(id: string, updateTeamDto: UpdateTeamDto) {
    const team = this.prisma.team.update({
      where: { id },
      data: updateTeamDto,
    });
    return team;
  }

  remove(id: string) {
    const team = this.prisma.team.delete({
      where: { id },
    });
    return team;
  }
}
