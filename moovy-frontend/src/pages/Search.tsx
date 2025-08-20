import { useState, useEffect } from 'react';
import {
  Container,
  TextField,
  Grid,
  Typography,
  CircularProgress,
} from '@mui/material';
import { searchMovies } from '../services/movieService';
import MovieCard from '../components/MovieCard';

export default function Search() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [initialLoad, setInitialLoad] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      if (query.length > 2) {
        setLoading(true);
        const results = await searchMovies(query);
        setMovies(results);
        setLoading(false);
        setInitialLoad(false);
      } else {
        setMovies([]);
        setInitialLoad(true);
      }
    };
    fetchMovies();
  }, [query]);

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Movie Search
      </Typography>
      <TextField
        label="Search for a movie"
        variant="outlined"
        fullWidth
        onChange={(e) => setQuery(e.target.value)}
      />

      <Grid container spacing={2} sx={{ mt: 4 }}>
        {loading && (
          <Grid item xs={12} sx={{ textAlign: 'center' }}>
            <CircularProgress />
          </Grid>
        )}

        {!loading && initialLoad && (
          <Grid item xs={12}>
            <Typography variant="body1">
              Start typing to search for movies...
            </Typography>
          </Grid>
        )}

        {!loading && !initialLoad && movies.length === 0 && (
          <Grid item xs={12}>
            <Typography variant="body1" sx={{ textAlign: 'center' }}>
              No movies found.
            </Typography>
          </Grid>
        )}

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
              <MovieCard movie={movie} />
            </Grid>
          ))}
      </Grid>
    </Container>
  );
}
