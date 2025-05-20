const BASE_URL = "https://api.themoviedb.org/3/";
const API_KEY = import.meta.env.VITE_API_KEY;
export const baseImageUrl = "https://image.tmdb.org/t/p/original";

export const urls = {
  trendingByDay: `${BASE_URL}trending/movie/day?language=en-US&api_key=${API_KEY}`,
  trendingByWeek: `${BASE_URL}trending/movie/week?language=en-US&api_key=${API_KEY}`,
  popularMovies: `${BASE_URL}movie/popular?language=en-US&api_key=${API_KEY}`,
  popularTVShows: `${BASE_URL}tv/popular?language=en-US&api_key=${API_KEY}`,
  topRatedMovies: `${BASE_URL}movie/top_rated?language=en-US&api_key=${API_KEY}`,
  topRatedTVShows: `${BASE_URL}tv/top_rated?language=en-US&api_key=${API_KEY}`,
  upcomingMovies: `${BASE_URL}movie/upcoming?language=en-US&api_key=${API_KEY}`,
};
console.log(urls)