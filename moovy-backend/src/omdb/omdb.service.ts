import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';
import { Observable, lastValueFrom } from 'rxjs';

@Injectable()
export class OmdbService {
  constructor(private httpService: HttpService) {}

  async searchMovies(query: string): Promise<any> {
    const apiKey = '883cf4b1';

    try {
      const response = await lastValueFrom(
        this.httpService.get(
          `http://www.omdbapi.com/?s=${query}&apikey=${apiKey}`
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
