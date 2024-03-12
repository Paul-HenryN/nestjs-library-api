import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { Book } from './book.entity';
import { BookService } from './book.service';

@Controller('books')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Get()
  findAll(): Book[] {
    return this.bookService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: number): Book {
    try {
      return this.bookService.findById(+id);
    } catch (error) {
      throw error;
    }
  }

  @Post()
  create(@Body() bookData: Omit<Book, 'id'>): Book {
    try {
      return this.bookService.create(bookData);
    } catch (error) {
      throw error;
    }
  }

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() updatedBookData: Partial<Omit<Book, 'id'>>,
  ): Book {
    try {
      return this.bookService.update(+id, updatedBookData);
    } catch (error) {
      throw error;
    }
  }

  @Delete(':id')
  remove(@Param('id') id: number): void {
    try {
      return this.bookService.remove(+id);
    } catch (error) {
      throw error;
    }
  }
}
