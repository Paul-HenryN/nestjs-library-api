import { Test, TestingModule } from '@nestjs/testing';
import { AuthorService } from './author.service';

describe('AuthorService', () => {
  let sut: AuthorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: AuthorService,
          useValue: new AuthorService(),
        },
      ],
    }).compile();

    sut = module.get<AuthorService>(AuthorService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {});

  describe('findAll', () => {});

  describe('findById', () => {});

  describe('create', () => {});

  describe('update', () => {});

  describe('remove', () => {});
});
