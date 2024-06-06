import { IsDateString, IsEnum, IsInt, MinLength } from "class-validator";
import { CatColorEnum } from "../enum/cats.enum";

export class CreateCatDto {
  @MinLength(2)	
  name: string;
  @IsEnum(CatColorEnum)
  color: string;
  @IsDateString()
  birthDate: Date;
}

export class ListAllEntitiesDto {
  @IsInt()
  limit: number;
}

export class UpdateCatDto {
  @MinLength(2)	
  name?: string;
  @IsEnum(CatColorEnum)
  color?: string;
  @IsDateString()
  birthDate?: Date;
}
