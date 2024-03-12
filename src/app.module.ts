import { Module } from '@nestjs/common';
import { BookModule } from './book/book.module';
import { AuthorModule } from './author/author.module';
import { ConfigModule } from './config/config.module';

@Module({
  imports: [
    BookModule,
    AuthorModule,
    ConfigModule.register({ envFile: '.env' }),
  ],
})
export class AppModule {}
