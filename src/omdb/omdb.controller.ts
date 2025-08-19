import { Controller, Get, Query } from '@nestjs/common';
import { OmdbService } from './omdb.service';

@Controller('movies')
export class OmdbController {
    constructor(private omdbService: OmdbService) {}

    @Get('search')
    search(@Query('query') query: string){
        return this.omdbService.searchMovies(query);
    }
}
