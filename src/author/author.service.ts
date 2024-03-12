import { Injectable, NotImplementedException } from '@nestjs/common';
import { Author } from './author.entity';

@Injectable()
export class AuthorService {
  private authors: Author[] = [];

  findAll(): Author[] {
    throw new NotImplementedException();
  }

  findById(id: number): Author {
    throw new NotImplementedException();
  }

  create(author: Author): Author {
    throw new NotImplementedException();
  }

  update(id: number, updatedAuthor: Partial<Author>): Author {
    throw new NotImplementedException();
  }

  remove(id: number): void {
    throw new NotImplementedException();
  }
}
