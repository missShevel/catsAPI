import { Injectable } from '@nestjs/common';
import { Cat } from './cats.entity';
import { ICreateCatDto, IUpdateCatDto } from './interface/cats.interfaces';
import { randomInt } from 'crypto';

@Injectable()
export class CatsService {
  private cats: Cat[] = [];

  create(cat: ICreateCatDto) {
    const createdCat = { ...cat } as Cat;
    createdCat.id = (randomInt(1000)).toString();
    createdCat.createdAt = new Date();
    createdCat.updatedAt = new Date();
    this.cats.push(createdCat);
  }

  findAll(): Cat[] {
    return this.cats;
  }

  findOne(catId: string): Cat {
    return this.cats.find((cat) => cat.id === catId);
  }

  editOne(id: string, updateCatData: IUpdateCatDto) {
    const cat = this.findOne(id);
    cat.updatedAt = new Date();
    Object.assign(cat, updateCatData);
  }

  delete(catId: string) {
    this.cats = this.cats.filter((cat) => cat.id !== catId);
  }
}
