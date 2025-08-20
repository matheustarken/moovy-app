import axios from 'axios';

const API_URL = 'http://localhost:3000';

export const searchMovies = async (query: string) => {
  try {
    const response = await axios.get(`${API_URL}/movies/search`, {
      params: { query },
    });
    return response.data.Search || [];
  } catch (error) {
    console.error('Error searching movies', error);
    return [];
  }
};

export const addMovieToLibrary = async (movieData: any) => {
  try {
    const response = await axios.post(`${API_URL}/library/add`, movieData);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error adding movie to library', error);
    throw error;
  }
};

export const getMyLibrary = async () => {
  try {
    const response = await axios.get(`${API_URL}/library`);
    return response.data;
  } catch (error) {
    console.error('Error fetching lib data', error);
    throw error;
  }
};

export const removeMovieFromLibrary = async (imdbID: string) => {
  try {
    const response = await axios.delete(`${API_URL}/library/remove/${imdbID}`);
    return response.data;
  } catch (error) {
    console.error('Error removing movie from library', error);
    throw error;
  }
};
