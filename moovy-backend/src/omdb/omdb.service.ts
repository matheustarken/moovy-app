import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';
import { Observable, lastValueFrom } from 'rxjs';

@Injectable()
export class OmdbService {
  constructor(private http_service: HttpService) {}

  async searchMovies(query: string): Promise<any> {
    const api_key = process.env.OMDB_API_KEY;

    try {
      const response = await lastValueFrom(
        this.http_service.get(
          `http://www.omdbapi.com/?s=${query}&apikey=${api_key}`
        )
      );
      return response.data;
    } catch (error) {
      throw new InternalServerErrorException(
        'Error fetching movies from OMDB.'
      );
    }
  }
}
