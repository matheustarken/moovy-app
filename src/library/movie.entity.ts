import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Movie {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    imdbID: string;

    @Column()
    title: string;

    @Column()
    year: string;

    @Column()
    poster: string;

    @Column()
    imdbRating: string;
}