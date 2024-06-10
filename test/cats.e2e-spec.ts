import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import { CatsModule } from '../src/cats/cats.module';
import { CatsService } from '../src/cats/cats.service';
import { INestApplication } from '@nestjs/common';
import { Cat } from '../src/cats/cats.entity';
import { getRepositoryToken } from '@nestjs/typeorm';
import { mockRepository } from '../src/cats/cats.mock.repository';

describe('Cats', () => {
  let app: INestApplication;
  let catsService = {
    findAll: () => [] as Cat[],
    findOne: () => ({}) as Cat,
    editOne: () => ({}) as Cat,
    delete: () => '',
  };

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [CatsModule],
    })
      .overrideProvider(CatsService)
      .useValue(catsService)
      .overrideProvider(getRepositoryToken(Cat))
      .useValue(mockRepository())
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test(`/GET cats`, () => {
    return request(app.getHttpServer())
      .get('/cats')
      .expect(200)
      .expect(catsService.findAll());
  });

  test(`/GET cats:id`, () => {
    return request(app.getHttpServer())
      .get('/cats/12')
      .expect(200)
      .expect(catsService.findOne());
  });

  test(`/PUT cats:id`, () => {
    return request(app.getHttpServer())
    .put('/cats/12')
    .expect(200)
    .expect(catsService.editOne());
  });

  test(`/DELETE cats:id`, () => {
    return request(app.getHttpServer())
    .delete('/cats/12')
    .expect(200)
    .expect(catsService.delete());
  });

  afterAll(async () => {
    await app.close();
  });
});
