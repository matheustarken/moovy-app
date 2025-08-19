import { Injectable } from '@nestjs/common';
import { Movie } from './movie.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class LibraryService {
    constructor(
        @InjectRepository(Movie)
        private readonly movieRepository: Repository<Movie>
    ) {}

    async addMovie(movieData: any): Promise<Movie[]> {
        const newMovie = this.movieRepository.create(movieData);
        return this.movieRepository.save(newMovie);
    }

    async findAll(): Promise<Movie[]> {
        return this.movieRepository.find();
    }

    async removeMovie(imdbID: string): Promise<void>{
        await this.movieRepository.delete({ imdbID });
    }
}
