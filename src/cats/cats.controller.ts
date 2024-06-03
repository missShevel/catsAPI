import { Controller, Delete, Get, Param, Post, Put, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('cats')
export class CatsController {
  @Post()
  create(): string {
    return 'This action adds a new cat';
  }

  @Get()
  findAll(@Req() request: Request): string {
    return 'This action returns all cats';
  }

  @Get(':id')
  findOne(@Param('id') id: string): string {
    console.log(id);
    return `This action returns a #${id} cat`;
  }

  @Put(':id')
  editOne(@Param('id') id: string): string {
    console.log(id);
    return `This action edits a #${id} cat`;
  }

  @Delete(':id')
  deleteOne(@Param('id') id: string): string {
    console.log(id);
    return `This action deletes a #${id} cat`;
  }
}
