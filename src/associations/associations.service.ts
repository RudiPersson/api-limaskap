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

  findOneWhereUser(userId: string) {
    const association = this.prisma.association.findUniqueOrThrow({
      where: { userId: userId },
      include: {
        teams: true,
      },
    });

    return association;
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
