import { Test, TestingModule } from '@nestjs/testing';
import { BookService } from './book.service';
import { Book } from 'src/book/book.entity';
import { NotFoundException } from '@nestjs/common';

const testBooks = [
  {
    id: 1,
    title: 'Book 1',
    authorId: 1,
    genre: 'Fiction',
    publishedDate: new Date(),
    description: 'Description for Book 1',
  },
  {
    id: 2,
    title: 'Book 2',
    authorId: 2,
    genre: 'Science Fiction',
    publishedDate: new Date(),
    description: 'Description for Book 2',
  },
  {
    id: 3,
    title: 'Book 3',
    authorId: 3,
    genre: 'Mystery',
    publishedDate: new Date(),
    description: 'Description for Book 3',
  },
  {
    id: 4,
    title: 'Book 4',
    authorId: 4,
    genre: 'Thriller',
    publishedDate: new Date(),
    description: 'Description for Book 4',
  },
  {
    id: 5,
    title: 'Book 5',
    authorId: 5,
    genre: 'Fantasy',
    publishedDate: new Date(),
    description: 'Description for Book 5',
  },
  {
    id: 6,
    title: 'Book 6',
    authorId: 6,
    genre: 'Romance',
    publishedDate: new Date(),
    description: 'Description for Book 6',
  },
  {
    id: 7,
    title: 'Book 7',
    authorId: 7,
    genre: 'Historical Fiction',
    publishedDate: new Date(),
    description: 'Description for Book 7',
  },
  {
    id: 8,
    title: 'Book 8',
    authorId: 8,
    genre: 'Biography',
    publishedDate: new Date(),
    description: 'Description for Book 8',
  },
  {
    id: 9,
    title: 'Book 9',
    authorId: 9,
    genre: 'Memoir',
    publishedDate: new Date(),
    description: 'Description for Book 9',
  },
  {
    id: 10,
    title: 'Book 10',
    authorId: 10,
    genre: 'Horror',
    publishedDate: new Date(),
    description: 'Description for Book 10',
  },
];

describe('BookService', () => {
  let sut: BookService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: BookService,
          useValue: new BookService(testBooks),
        },
      ],
    }).compile();

    sut = module.get<BookService>(BookService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(sut).toBeDefined();
  });

  describe('findAll', () => {
    it('should return an array of books', () => {
      const result = sut.findAll();
      expect(result).toEqual(testBooks);
    });
  });

  describe('findById', () => {
    it('should return a book by id', () => {
      const book = testBooks[0];
      const result = sut.findById(book.id);
      expect(result).toEqual(book);
    });

    it('should throw not found error if book is not found', () => {
      expect(() => {
        sut.findById(999);
      }).toThrow(NotFoundException);
    });
  });

  describe('create', () => {
    it('should create a new book', () => {
      const newBookData: Omit<Book, 'id'> = {
        title: 'New Book',
        authorId: 1,
        genre: 'Fiction',
        publishedDate: new Date(),
        description: 'Sample description',
      };

      const newBook: Book = { id: testBooks.length + 1, ...newBookData };

      const result = sut.create(newBookData);
      expect(result).toEqual(newBook);
      expect(sut.findById(newBook.id)).toEqual(newBook);
    });
  });

  describe('update', () => {
    it('should update a book by id', () => {
      const updatedBookData: Partial<Omit<Book, 'id'>> = {
        title: 'Updated Book',
      };

      const book = testBooks[0];
      const updatedBook = { ...book, ...updatedBookData };

      const result = sut.update(book.id, updatedBookData);
      expect(result).toEqual(updatedBook);
      expect(sut.findById(book.id)).toEqual(updatedBook);
    });
  });

  describe('remove', () => {
    it('should remove a book by id', () => {
      sut.remove(1);
      expect(() => {
        sut.findById(1);
      }).toThrow(NotFoundException);
    });
  });
});
