import { Controller, Get, Query } from '@nestjs/common';
import { OmdbService } from './omdb.service';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('movies')
@Controller('movies')
export class OmdbController {
  constructor(private omdb_service: OmdbService) {}

  @Get('search')
  @ApiOperation({ summary: 'Search for movies on the OMDB API' })
  search(@Query('query') query: string) {
    return this.omdb_service.searchMovies(query);
  }
}
