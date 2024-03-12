import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { Author } from './author.entity';
import { AuthorService } from './author.service';

@Controller('authors')
export class AuthorController {
  constructor(private readonly authorService: AuthorService) {}

  @Get()
  findAll(): Author[] {
    return this.authorService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: number): Author {
    try {
      return this.authorService.findById(+id);
    } catch (error) {
      throw error;
    }
  }

  @Post()
  create(@Body() authorData: Omit<Author, 'id'>): Author {
    try {
      return this.authorService.create(authorData);
    } catch (error) {
      throw error;
    }
  }

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() updatedAuthorData: Partial<Omit<Author, 'id'>>,
  ): Author {
    try {
      return this.authorService.update(+id, updatedAuthorData);
    } catch (error) {
      throw error;
    }
  }

  @Delete(':id')
  remove(@Param('id') id: number): void {
    try {
      return this.authorService.remove(+id);
    } catch (error) {
      throw error;
    }
  }
}
