export const apiKey = "95f2419536f533cdaa1dadf83c606027";
const tmdbEndpoint = "https://api.themoviedb.org/3/movie";
const tmdbEndpointSearch = "https://api.themoviedb.org/3/search/movie";
export const tmdbAPI = {
  getBanners: `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}`,
  getMovieList: (type: string, page = 1) =>
    `${tmdbEndpoint}/${type}?api_key=${apiKey}&page=${page}`,
  getMovieDetails: (movieId: string) => `${tmdbEndpoint}/${movieId}?api_key=${apiKey}`,
  getMovieMeta: (movieId: string, type: string) =>
    `${tmdbEndpoint}/${movieId}/${type}?api_key=${apiKey}`,
  getMovieSearch: (query: string, page = 1) =>
    `${tmdbEndpointSearch}?api_key=${apiKey}&query=${query}&page=${page}`,
  imageOriginal: (url: string) => `https://image.tmdb.org/t/p/original/${url}`,
  image500: (url: string) => `https://image.tmdb.org/t/p/w500/${url}`
};
