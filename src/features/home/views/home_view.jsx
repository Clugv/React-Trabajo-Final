import React from 'react'
import { useAuth } from '../../../core/auth/hook/use_auth';
import { AppSwiper }       from '../../../core/components/app_swiper/app_swiper';
import  AppSwiperSlide  from '../../../core/components/app_swiper/components/app_swiper_slide';
import { getPopularMovies } from '../services/movies.service';
import useSWR from 'swr';

const HomeView = () => {

  getPopularMovies();

  const {logout, isLoggedIn} = useAuth();
  console.log(isLoggedIn);
  
  const { data, error, isLoading } = useSWR('getPopularMovies', getPopularMovies);

  console.log(data);
  return (
    <div>
      <button onClick={logout}>Cerrar Sesión</button>
      <br />
      <br />
      <h1>Películas Mejor Puntuadas</h1>
      <AppSwiper>
      { data?.map((e, index) => (
        <AppSwiperSlide key={index}>
          <div style={{
              height: '150px',
              width: '250px',
              backgroundImage: `url(${e.backdrop})`, 
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
            }}>
            <h3>{e.title}</h3>
          </div>
        </AppSwiperSlide>
      ))}
      </AppSwiper>
    </div>
  )
}

export default HomeView