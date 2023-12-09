import React from 'react'
import { useAuth } from '../../../core/auth/hook/use_auth';

import { getPopularMovies } from '../services/movies.service';
import { getTopRatedMovies } from '../services/movies.service';
import useSWR from 'swr';
import AppCarouselSection from '../../../core/components/app_carousel_section/app_carousel_section';

const HomeView = () => {

  getPopularMovies();

  const {logout, isLoggedIn} = useAuth();
  console.log(isLoggedIn);
  
  const { 
    data: popularMovies, 
    error: popularMoviesError, 
    isLoading: popularMoviesIsLoading 
  } = useSWR('getPopularMovies', getPopularMovies);

  const { 
    data: topRatedMovies,  
    error: topRatedMoviesError, 
    isLoading: topRatedMoviesIsLoading 
  } = useSWR('getTopRatedMovies', getTopRatedMovies);

  console.log(popularMovies);
  return (
    <div>
      <button onClick={logout}>Cerrar Sesión</button>
      <br />
      <br />
      <AppCarouselSection title={"Peliculas Más Populares"} data={popularMovies} />
    </div>
  )
}

export default HomeView