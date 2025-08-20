import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActions,
  Button,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import {
  addMovieToLibrary,
  removeMovieFromLibrary,
} from '../services/movieService';

interface MovieCardProps {
  movie: {
    imdbID: string;
    Title?: string;
    Year?: string;
    Poster?: string;
    imdbRating?: string;
    title?: string;
    year?: string;
    poster?: string;
  };
  isLibraryCard?: boolean;
  onRemove?: (imdbID: string) => void;
}

export default function MovieCard({
  movie,
  isLibraryCard = false,
  onRemove,
}: MovieCardProps) {
  const id = movie.imdbID;
  const title = movie.Title ?? movie.title;
  const year = movie.Year ?? movie.year;
  const poster = movie.Poster ?? movie.poster;
  const rating = movie.imdbRating ?? movie.imdbRating;

  const handleAddMovie = async () => {
    try {
      const movieData = {
        imdbID: id,
        title: title || 'N/A',
        year: year || 'N/A',
        poster: poster || 'N/A',
        imdbRating: rating || 'N/A',
      };
      await addMovieToLibrary(movieData);
      alert(`${title} added to your library!`);
    } catch (error) {
      alert('Failed to add movie to library.');
    }
  };

  const handleRemoveMovie = async () => {
    try {
      await removeMovieFromLibrary(id);
      alert(`${title} removed from your library!`);
      if (onRemove) onRemove(id);
    } catch (error) {
      alert('Failed to remove movie from library.');
    }
  };

  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardMedia
        component="img"
        height="300"
        sx={{ objectFit: 'cover' }}
        image={poster !== 'N/A' ? poster : 'https://via.placeholder.com/150'}
        alt={title}
      />
      <CardContent sx={{ flexGrow: 1, minHeight: 120 }}>
        <Typography variant="h6" component="h3">
          {title} ({year})
        </Typography>
        <Typography variant="body2" color="text.secondary">
          IMDB Rating: {rating !== 'N/A' ? rating : 'N/A'}
        </Typography>
      </CardContent>
      <CardActions sx={{ mt: 'auto' }}>
        {isLibraryCard ? (
          <Button size="small" onClick={handleRemoveMovie}>
            <DeleteIcon /> Remove from Library
          </Button>
        ) : (
          <Button size="small" onClick={handleAddMovie}>
            <AddIcon /> Add to Library
          </Button>
        )}
      </CardActions>
    </Card>
  );
}
