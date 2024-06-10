import { Test, TestingModule } from '@nestjs/testing';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';
import { Cat } from './cats.entity';
import { TypeOrmModule, getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { mockRepository } from './cats.mock.repository';


describe('CatsController', () => {
  let catsController: CatsController;
  let catsService: CatsService;
  let catsRepository: Repository<Cat>;


  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [CatsController],
      providers: [CatsService,
        {
          provide: getRepositoryToken(Cat),
          useValue: mockRepository(),
        },
      ],
    }).compile();

    catsService = moduleRef.get<CatsService>(CatsService);
    catsController = moduleRef.get<CatsController>(CatsController);
    catsRepository = moduleRef.get<Repository<Cat>>(getRepositoryToken(Cat));

  });

  describe('create', () => {
    it('should crate a cat instance', async () => {
      const result: Cat = 
        {
          id: '12',
          birthDate: new Date('2002-12-17'),
          name: 'Anfisa',
          color: 'brown',
          createdAt: new Date(),
          updatedAt: new Date(),
        };
      jest.spyOn(catsService, 'create').mockImplementation(async () => result);

      expect(await catsController.create(result)).toBe(result);
    });
  });

  describe('findAll', () => {
    it('should return an array of cats', async () => {
      const result: Cat[] = [
        {
          id: '12',
          birthDate: new Date('2002-12-17'),
          name: 'Anfisa',
          color: 'brown',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ];
      jest.spyOn(catsService, 'findAll').mockImplementation(async () => result);

      expect(await catsController.findAll()).toBe(result);
    });
  });
});
