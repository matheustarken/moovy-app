import { Injectable } from '@nestjs/common';
import { Movie } from './movie.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class LibraryService {
  constructor(
    @InjectRepository(Movie)
    private readonly movie_repository: Repository<Movie>
  ) {}

  async addMovie(movie_data: any): Promise<Movie[]> {
    const new_movie = this.movie_repository.create(movie_data);
    return this.movie_repository.save(new_movie);
  }

  async findAll(): Promise<Movie[]> {
    return this.movie_repository.find();
  }

  async removeMovie(imdb_id: string): Promise<void> {
    await this.movie_repository.delete({ imdb_id });
  }
}
