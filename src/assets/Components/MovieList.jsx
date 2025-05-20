import React, { useEffect, useState } from 'react';
import axios from 'axios';

const API_KEY = '740bca758d34e7d0911c42047e9267a7';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

const fetchMoviesByGenre = async (genreId) => {
  const response = await axios.get(
    'https://api.themoviedb.org/3/discover/movie',
    {
      params: {
        api_key: API_KEY,
        with_genres: genreId,
        language: 'en-US',
        sort_by: 'popularity.desc'
      }
    }
  );
  return response.data.results;
};

const MovieList = () => {
  const [actionMovies, setActionMovies] = useState([]);
  const [comedyMovies, setComedyMovies] = useState([]);
  const [horrorMovies, setHorrorMovies] = useState([]);
  const [romanceMovies, setRomanceMovies] = useState([]);
const [documentaryMovies, setDocumentaryMovies] = useState([]);


  useEffect(() => {
    const fetchAllMovies = async () => {
      try {
        const [action, comedy, horror,romance, documentary] = await Promise.all([
          fetchMoviesByGenre(28),
          fetchMoviesByGenre(35),
          fetchMoviesByGenre(27),
          fetchMoviesByGenre(10749),
        fetchMoviesByGenre(99) 
        ]);
        setActionMovies(action);
        setComedyMovies(comedy);
        setHorrorMovies(horror);
        setRomanceMovies(romance);
        setDocumentaryMovies(documentary)
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchAllMovies();
  }, []);

const MovieSection = ({ title, movies }) => (
  <div className='parentsection'>
    <h2>{title}</h2>
    <div className='moviesimages'>
      {movies.map(movie => (
        <div className='imagedata' key={movie.id} >
          <img
            src={`${IMAGE_BASE_URL}${movie.poster_path}`}
            alt={movie.title}
            
          />
          {/* <p>{movie.title}</p> */}
        </div>
      ))}
    </div>
  </div>
);



  return (
    <div>
      <MovieSection title="Action Movies" movies={actionMovies} />
      <MovieSection title="Comedy Movies" movies={comedyMovies} />
      <MovieSection title="Horror Movies" movies={horrorMovies} />
      <MovieSection title="Romance Movies" movies={romanceMovies} />
<MovieSection title="Documentary Movies" movies={documentaryMovies} />
    </div>
  );
};

export default MovieList;
