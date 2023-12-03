import { useEffect, useRef } from "react";

export const AppSwiper = ({children}) => {

    const swiperElRef = useRef(null);

    return (

        <swiper-container ref={swiperElRef}  slides-per-view="3" navigation="true">
            {children}
        </swiper-container>
    );

};