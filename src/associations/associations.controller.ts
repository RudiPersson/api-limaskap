import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AssociationsService } from './associations.service';
import { CreateAssociationDto } from './dto/create-association.dto';
import { UpdateAssociationDto } from './dto/update-association.dto';
import { Public } from 'src/auth/public.decorator';

@Controller({
  path: 'associations',
  version: '1',
})
export class AssociationsController {
  constructor(private readonly associationsService: AssociationsService) {}

  @Post()
  create(@Body() createAssociationDto: CreateAssociationDto) {
    return this.associationsService.create(createAssociationDto);
  }

  @Public()
  @Get()
  findAll() {
    return this.associationsService.findAll();
  }

  @Public()
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.associationsService.findOne(id);
  }

  @Get('user/:userId')
  findOneWhereUser(@Param('userId') userId: string) {
    return this.associationsService.findOneWhereUser(userId);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAssociationDto: UpdateAssociationDto,
  ) {
    return this.associationsService.update(id, updateAssociationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.associationsService.remove(id);
  }
}
