import { Injectable } from '@nestjs/common';
import { Cat } from './cats.entity';
import { ICreateCatDto, IUpdateCatDto } from './interface/cats.interfaces';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CatsService {
  constructor(
    @InjectRepository(Cat)
    private catsRepository: Repository<Cat>,
  ) {}

  async create(cat: ICreateCatDto): Promise<Cat> {
    const createdCat = new Cat();
    Object.assign(createdCat, cat);
    await this.catsRepository.save(createdCat);
    return createdCat;
  }

  findAll(): Promise<Cat[]> {
    return this.catsRepository.find();
  }

  findOne(id: string): Promise<Cat | null> {
    return this.catsRepository.findOneBy({ id });
  }

  async editOne(id: string, updateCatData: IUpdateCatDto): Promise<Cat> {
    const updatedCat = await this.findOne(id);
    Object.assign(updatedCat, updateCatData);
    return this.catsRepository.save(updatedCat);
  }

  async delete(id: string): Promise<void> {
    await this.catsRepository.delete(id);
  }
}
