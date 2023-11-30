import React from 'react'
import { useAuth } from '../../../core/auth/hook/use_auth';
import { AppSwiper }       from '../../../core/components/app_swiper/app_swiper';
import  AppSwiperSlide  from '../../../core/components/app_swiper/components/app_swiper_slide';

const HomeView = () => {


  const {logout, isLoggedIn} = useAuth();
  console.log(isLoggedIn);

  return (
    <div>
      <button onClick={logout}>Cerrar Sesión</button>
      <br />
      <br />
      <h1>Películas Mejor Puntuadas</h1>
      <AppSwiper>
      { Array.from({ length: 20 }).map((_, index) =>(
        <AppSwiperSlide key={index}>
          <div style={{
              height: '150px',
              width: '250px',
              backgroundColor: 'grey',
            }}>
            <h3>test</h3>
            <h3>{index}</h3>
          </div>
        </AppSwiperSlide>
      ))}
      </AppSwiper>
    </div>
  )
}

export default HomeView