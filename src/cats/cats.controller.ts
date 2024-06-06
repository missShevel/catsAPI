import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  Req,
} from '@nestjs/common';
import { CreateCatDto, ListAllEntitiesDto, UpdateCatDto } from './dto/cats-dto';
import { CatsService } from './cats.service';
import { Cat } from './cats.entity';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    return this.catsService.create(createCatDto);
  }

  @Get()
  async findAll(@Query() query: ListAllEntitiesDto): Promise<Cat[]> {
    return this.catsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Cat> {
    return this.catsService.findOne(id);
  }

  @Put(':id')
  async editOne(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
    return this.catsService.editOne(id, updateCatDto);
  }

  @Delete(':id')
  async deleteOne(@Param('id') id: string) {
    this.catsService.delete(id);
  }
}
