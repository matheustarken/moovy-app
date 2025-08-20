import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name: 'movies'})
export class Movie {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  imdb_id: string;

  @Column()
  title: string;

  @Column()
  year: string;

  @Column()
  poster: string;

  @Column()
  imdb_rating: string;
}
