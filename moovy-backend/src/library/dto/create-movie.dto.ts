import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateMovieDto {
  @IsString()
  @IsNotEmpty()
  imdb_id: string;

  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  year: string;
  
  @IsString()
  @IsNotEmpty()
  poster: string;

  @IsString()
  @IsOptional()
  imdb_rating: string;
}