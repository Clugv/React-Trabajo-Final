import React from 'react';

const AppSwiperSlide = ({children, ...props}) => {
  return (

        <swiper-slide {...props}>{children}</swiper-slide>
    /*{ Array.from({ length: 20 }).map((_, index) =>(
        <swiper-slide key={index}>Slide { index + 1 }</swiper-slide>
    ))}*/
  )
}

export default AppSwiperSlide