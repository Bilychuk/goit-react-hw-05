import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const options = {
  query: '',
  language: 'en-US',
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjN2M0YjY1Yzk3MzkxZjA5Nzg2YmY0YWIxNmExODIzOSIsInN1YiI6IjY2Mjk2M2RmZmVkNTk3MDE3ZWJmNjdlMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vXmibBa2bnfqt7yUmmXiZxZEfyfVWYv34nHytkJfh_k',
  },
};

export const getMovies = async () => {
  const response = await axios.get('/trending/movie/day', options);
  return response.data.results;
};

export const getMovieById = async movieId => {
  const response = await axios.get(`/movie/${movieId}`, options);
  return response.data;
};

export const searchMovies = async query => {
  const searchOptions = {
    ...options,
    params: {
      query: query,
    },
  };
  const response = await axios.get('/search/movie', searchOptions);
  return response.data.results;
};
