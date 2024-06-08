import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
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
    const catFromDb = await this.catsRepository.findOneBy({ name: cat.name });
    if (catFromDb) {
      throw new BadRequestException(`Cat with name ${cat.name} already exists`);
    }
    Object.assign(createdCat, cat);
    await this.catsRepository.save(createdCat);
    return createdCat;
  }

  findAll(): Promise<Cat[]> {
    return this.catsRepository.find();
  }

  async findOne(id: string): Promise<Cat | null> {
    const cat = await this.catsRepository.findOneBy({ id });
    if (!cat) {
      throw new NotFoundException(`Cat with ID ${id} not found`);
    }
    return cat;
  }

  async editOne(id: string, updateCatData: IUpdateCatDto): Promise<Cat> {
    const updatedCat = await this.findOne(id);
    if (!updatedCat) {
      throw new NotFoundException(`Cat with ID ${id} not found`);
    }
    if (updateCatData.name) {
      const catFromDb = await this.catsRepository.findOneBy({
        name: updateCatData.name,
      });
      if (catFromDb) {
        throw new BadRequestException(
          `Cat with name ${updateCatData.name} already exists`,
        );
      }
    }
    Object.assign(updatedCat, updateCatData);
    return this.catsRepository.save(updatedCat);
  }

  async delete(id: string): Promise<void> {
    const catToDelete = await this.findOne(id);
    if (!catToDelete) {
      throw new NotFoundException(`Cat with ID ${id} not found`);
    }
    await this.catsRepository.delete(id);
  }
}
