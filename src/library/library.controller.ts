import { Controller, Post, Get, Delete, Body, Param } from '@nestjs/common';
import { LibraryService } from './library.service';

@Controller('library')
export class LibraryController {
    constructor(private readonly libraryService: LibraryService) {}

    @Post('add')
    async addMovieToLibrary(@Body() movieData: any){
        return this.libraryService.addMovie(movieData);
    }

    @Get()
    async getLibrary() {
        return this.libraryService.findAll();
    }

    @Delete('remove/:imdbID')
    async removeMovieFromLibrary(@Param('imdbID') imdbID: string) {
        return this.libraryService.removeMovie(imdbID);
    }
}
