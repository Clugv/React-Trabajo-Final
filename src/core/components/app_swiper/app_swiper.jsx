import { useEffect, useRef } from "react";

export const AppSwiper = () => {

    const swiperElRef = useRef(null);

    return (

        <swiper-container ref={swiperElRef} slides-per-view="3" navigation="true">
            { Array.from({ length: 20 }).map((_, index) =>(
                <swiper-slide key={index}>Slide { index + 1 }</swiper-slide>
            ))

            }
        </swiper-container>
    );

};