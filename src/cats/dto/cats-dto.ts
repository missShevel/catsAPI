import {
  IsDateString,
  IsEnum,
  IsNumberString,
  IsOptional,
  MinLength,
} from 'class-validator';
import { CatColorEnum } from '../enum/cats.enum';

export class CreateCatDto {
  @MinLength(2)
  name: string;
  @IsEnum(CatColorEnum)
  color: string;
  @IsDateString()
  birthDate: Date;
}

export class ListAllEntitiesDto {
  @IsNumberString()
  limit: number;
}

export class UpdateCatDto {
  @MinLength(2)
  @IsOptional()
  name?: string;
  @IsEnum(CatColorEnum)
  @IsOptional()
  color?: string;
  @IsDateString()
  @IsOptional()
  birthDate?: Date;
}
