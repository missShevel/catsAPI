export interface ICreateCatDto {
  name: string;
  color: string;
  birthDate: Date;
  // createdAt: Date;
  // updatedAt: Date;
}

export interface IListAllEntitiesDto {
  limit: number;
}

export interface IUpdateCatDto {
  // id: string;
  name?: string;
  color?: string;
  birthDate?: Date;
  // createdAt: Date;
  // updatedAt: Date;
}
