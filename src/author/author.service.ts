import { Injectable, NotImplementedException } from '@nestjs/common';
import { Author } from './author.entity';

const defaultAuthors = [
  {
    id: 1,
    name: 'F. Scott Fitzgerald',
    biography:
      'F. Scott Fitzgerald was an American novelist and short-story writer.',
  },
  {
    id: 2,
    name: 'Harper Lee',
    biography:
      'Harper Lee was an American novelist best known for her novel "To Kill a Mockingbird".',
  },
  {
    id: 3,
    name: 'George Orwell',
    biography:
      'George Orwell was an English novelist, essayist, journalist, and critic.',
  },
  {
    id: 4,
    name: 'J.D. Salinger',
    biography:
      'J.D. Salinger was an American writer known for his novel "The Catcher in the Rye".',
  },
  {
    id: 5,
    name: 'J.K. Rowling',
    biography:
      'J.K. Rowling is a British author best known for the "Harry Potter" series.',
  },
  {
    id: 6,
    name: 'J.R.R. Tolkien',
    biography:
      'J.R.R. Tolkien was an English writer, poet, philologist, and university professor.',
  },
  {
    id: 7,
    name: 'Jane Austen',
    biography:
      'Jane Austen was an English novelist known primarily for her six major novels.',
  },
  {
    id: 8,
    name: 'George R.R. Martin',
    biography:
      'George R.R. Martin is an American novelist and short-story writer.',
  },
  {
    id: 9,
    name: 'Dan Brown',
    biography:
      'Dan Brown is an American author best known for his novel "The Da Vinci Code".',
  },
  {
    id: 10,
    name: 'Stephen King',
    biography:
      'Stephen King is an American author of horror, supernatural fiction, suspense, crime, science-fiction, and fantasy novels.',
  },
];

@Injectable()
export class AuthorService {
  constructor(private authors: Author[] = defaultAuthors) {}

  findAll(): Author[] {
    throw new NotImplementedException();
  }

  findById(id: number): Author {
    throw new NotImplementedException();
  }

  create(authorData: Omit<Author, 'id'>): Author {
    throw new NotImplementedException();
  }

  update(id: number, updatedAuthorData: Partial<Omit<Author, 'id'>>): Author {
    throw new NotImplementedException();
  }

  remove(id: number): void {
    throw new NotImplementedException();
  }
}
