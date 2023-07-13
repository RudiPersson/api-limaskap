import { Injectable } from '@nestjs/common';
import { CreateAssociationDto } from './dto/create-association.dto';
import { UpdateAssociationDto } from './dto/update-association.dto';
import { PrismaModuleService } from 'src/prisma-module/prisma-module.service';

@Injectable()
export class AssociationsService {
  constructor(private prisma: PrismaModuleService) {}
  create(createAssociationDto: CreateAssociationDto) {
    const association = this.prisma.association.create({
      data: createAssociationDto,
    });

    return association;
  }

  findAll() {
    const associations = this.prisma.association.findMany({
      include: {
        teams: true,
      },
    });

    return associations;
  }

  findOne(id: string) {
    const association = this.prisma.association.findUniqueOrThrow({
      where: { id: id },
      include: {
        teams: true,
      },
    });

    return association;
  }

  async findOneWhereUser(userId: string) {
    const association = await this.prisma.association.findUniqueOrThrow({
      where: { userId: userId },
      include: {
        teams: {
          orderBy: {
            updatedAt: 'desc',
          },
          select: {
            id: true,
            name: true,
            description: true,
            email: true,
            price: true,
            member_size: true,
            signup_deadline: true,
            createdAt: true,
            updatedAt: true,
            associationId: true,
            _count: {
              select: {
                member: true,
              },
            },
          },
        },
      },
    });

    // Transform the _count to sign_ups
    const teams = association.teams.map((team) => {
      const { _count, ...rest } = team;
      return { ...rest, sign_ups: _count ? _count.member : 0 };
    });

    const result = {
      ...association,
      teams,
    };

    return result;
  }

  update(id: string, updateAssociationDto: UpdateAssociationDto) {
    const association = this.prisma.association.update({
      where: { id: id },
      data: updateAssociationDto,
    });

    return association;
  }

  remove(id: string) {
    const association = this.prisma.association.delete({
      where: { id: id },
    });

    return association;
  }
}
