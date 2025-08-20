import { useState, useEffect } from 'react';
import { Container, Grid, Typography, CircularProgress } from '@mui/material';
import { getMyLibrary, removeMovieFromLibrary } from '../services/movieService';
import MovieCard from '../components/MovieCard';

export default function Library() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchLibrary = async () => {
      try {
        const libraryMovies = await getMyLibrary();
        setMovies(libraryMovies);
      } catch (error) {
        console.error('Failed to load library', error);
      } finally {
        setLoading(false);
      }
    };

    fetchLibrary();
  }, []);

  const handleRemove = (imdbID: string) => {
    setMovies(movies.filter((movie: any) => movie.imdbID !== imdbID));
  };

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        My Library
      </Typography>

      <Grid container spacing={2} sx={{ mt: 4 }}>
        {!loading &&
          movies.length > 0 &&
          movies.map((movie: any) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              mb={4}
              key={movie.imdbID}
              sx={{ minWidth: 300, maxWidth: 300, mx: 'auto' }}
            >
              <MovieCard movie={movie} isLibraryCard onRemove={handleRemove} />
            </Grid>
          ))}
      </Grid>
    </Container>
  );
}
