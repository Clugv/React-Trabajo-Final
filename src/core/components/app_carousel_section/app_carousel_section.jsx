import React from 'react';
import { AppSwiper }       from '../../../core/components/app_swiper/app_swiper';
import  AppSwiperSlide  from '../../../core/components/app_swiper/components/app_swiper_slide';
import AppTitle from '../app_title/app_title';

const AppCarouselSection = ({title, data}) => {
  return (
    <>
        <AppTitle>{title}</AppTitle>
        <AppSwiper>
        { data?.map((e) => (
            <AppSwiperSlide key={e.id}>
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
    </>
  )
}

export default AppCarouselSection