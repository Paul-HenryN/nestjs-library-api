import { Module } from '@nestjs/common';
import { AuthorService } from './author.service';
import { AuthorController } from './author.controller';

@Module({
  controllers: [AuthorController],
  providers: [
    {
      provide: AuthorService,
      useValue: new AuthorService(),
    },
  ],
  exports: [AuthorService],
})
export class AuthorModule {}
