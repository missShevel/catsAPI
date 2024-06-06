export class CreateCatDto {
  name: string;
  color: string;
  birthDate: Date;
  // createdAt: Date;
  // updatedAt: Date;
}

export class ListAllEntitiesDto {
  limit: number;
}

export class UpdateCatDto {
  // id: string;
  name?: string;
  color?: string;
  birthDate?: Date;
  // createdAt: Date;
  // updatedAt: Date;
}
