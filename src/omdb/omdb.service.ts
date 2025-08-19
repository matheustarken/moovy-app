import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';

@Injectable()
export class OmdbService {
    constructor(private httpService: HttpService) {}

    searchMovies(query: string): Observable<AxiosResponse<any>> {
        const apiKey = '883cf4b1';
        return this.httpService.get(`http://www.omdbapi.com/?s=${query}&apikey=${apiKey}`)
    } 
}
