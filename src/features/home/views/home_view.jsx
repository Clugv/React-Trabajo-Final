import React from 'react'
import { useAuth } from '../../../core/auth/hook/use_auth';
import { AppSwiper } from '../../../core/components/app_swiper/app_swiper';


const HomeView = () => {


  const {logout, isLoggedIn} = useAuth();
  console.log(isLoggedIn);

  return (
    <div>
      <button onClick={logout}>Cerrar Sesión</button>
      <br>
      </br>
      <AppSwiper />
    </div>
  )
}

export default HomeView