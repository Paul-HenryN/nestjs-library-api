import { Module } from '@nestjs/common';
import { BookService } from './book.service';
import { BookController } from './book.controller';

@Module({
  controllers: [BookController],
  providers: [
    {
      provide: BookService,
      useValue: new BookService(),
    },
  ],
  exports: [BookService],
})
export class BookModule {}
