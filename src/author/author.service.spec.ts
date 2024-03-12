import { Test, TestingModule } from '@nestjs/testing';
import { AuthorService } from './author.service';
import { NotFoundException } from '@nestjs/common';
import { Author } from './author.entity';

const testAuthors = [
  { id: 11, name: 'Author 1', biography: 'Biography for Author 1' },
  { id: 12, name: 'Author 2', biography: 'Biography for Author 2' },
  { id: 13, name: 'Author 3', biography: 'Biography for Author 3' },
  { id: 14, name: 'Author 4', biography: 'Biography for Author 4' },
  { id: 15, name: 'Author 5', biography: 'Biography for Author 5' },
  { id: 16, name: 'Author 6', biography: 'Biography for Author 6' },
  { id: 17, name: 'Author 7', biography: 'Biography for Author 7' },
  { id: 18, name: 'Author 8', biography: 'Biography for Author 8' },
  { id: 19, name: 'Author 9', biography: 'Biography for Author 9' },
  { id: 20, name: 'Author 10', biography: 'Biography for Author 10' },
];

describe('AuthorService', () => {
  let sut: AuthorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: AuthorService,
          useValue: new AuthorService(testAuthors),
        },
      ],
    }).compile();

    sut = module.get<AuthorService>(AuthorService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(sut).toBeDefined();
  });

  describe('findAll', () => {
    it('should return an array of Authors', () => {
      expect(sut.findAll()).toEqual(testAuthors);
    });
  });

  describe('findById', () => {
    it('should return an Author by id', () => {
      const author = testAuthors[0];

      expect(sut.findById(author.id)).toEqual(author);
    });

    it("should throw not found error if author doesn't exist", () => {
      expect(sut.findById(999)).toThrow(NotFoundException);
    });
  });

  describe('create', () => {
    it('should create and return a new author', () => {
      const newAuthorData: Omit<Author, 'id'> = {
        name: 'New Author',
        biography: 'This is a new author',
      };

      const newAuthor: Author = {
        id: testAuthors.length + 1,
        ...newAuthorData,
      };

      const result = sut.create(newAuthorData);

      expect(result).toEqual(newAuthor);
      expect(sut.findById(newAuthor.id)).toEqual(newAuthor);
    });
  });

  describe('update', () => {
    it('should update an author by id', () => {
      const updatedAuthorData: Partial<Omit<Author, 'id'>> = {
        biography: 'Updated author',
      };

      const author = testAuthors[0];
      const updatedAuthor = { ...author, ...updatedAuthorData };

      const result = sut.update(author.id, updatedAuthorData);
      expect(result).toEqual(updatedAuthor);
      expect(sut.findById(author.id)).toEqual(updatedAuthor);
    });
  });

  describe('remove', () => {
    it('should remove an author by id', () => {
      sut.remove(1);

      expect(() => {
        sut.findById(1);
      }).toThrow(NotFoundException);
    });
  });
});
