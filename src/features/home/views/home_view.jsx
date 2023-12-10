import React from 'react'
import { useAuth } from '../../../core/auth/hook/use_auth';

import { getPopularMovies } from '../services/movies.service';
import { getTopRatedMovies } from '../services/movies.service'; 
import { getUpComingMovies } from '../services/movies.service'; 
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

  const { 
    data: upComingMovies,  
    error: upComingMoviesError, 
    isLoading: upComingMoviesIsLoading 
  } = useSWR('getUpComingMovies', getUpComingMovies);

  return (
    <div className='row'>
      <div className='navbar navbar-dark bg-dark'>
      <button onClick={logout}>Cerrar Sesión</button>
      </div>
      <div className='col-12-md carousel-home-section'>
        <AppCarouselSection title={"Peliculas Más Populares"} data={popularMovies} />
        <AppCarouselSection title={"Peliculas Mejor Calificadas"} data={topRatedMovies} />
        <AppCarouselSection title={"Próximas Peliculas"} data={upComingMovies} />
      </div>
      
    </div>
  )
}

export default HomeView