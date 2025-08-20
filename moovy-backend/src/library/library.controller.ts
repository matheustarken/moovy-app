import { Controller, Post, Get, Delete, Body, Param, UsePipes, ValidationPipe } from '@nestjs/common';
import { LibraryService } from './library.service';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { CreateMovieDto } from './dto/create-movie.dto';

@ApiTags('library')
@Controller('library')
export class LibraryController {
  constructor(private readonly library_service: LibraryService) {}

  @Post('add')
  @ApiOperation({ summary: 'Add movie to library' })
  @UsePipes(new ValidationPipe({ transform: true }))
  async addMovieToLibrary(@Body() create_movie_dto: CreateMovieDto) {
    return this.library_service.addMovie(create_movie_dto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all movies from library' })
  async getLibrary() {
    return this.library_service.findAll();
  }

  @Delete('remove/:imdbID')
  @ApiOperation({ summary: 'Delete movie from the library' })
  async removeMovieFromLibrary(@Param('imdbID') imdb_id: string) {
    return this.library_service.removeMovie(imdb_id);
  }
}
