import React, { useEffect } from 'react';
import {Swiper, useSwiper,SwiperSlide }  from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import CarouselLeftNavigation from './CarouselLeftNavigation/CarouselLeftNavigation';
import CarouselRightNavigation from './CarouselRightNavigation/CarouselRightNavigation';
import styles from './Carousel.module.css';

export default function Carousel({data, renderComponent}) {

    const Control =({data})=>{
        const swiper = useSwiper();
        useEffect(()=>{
            swiper.slideTo(0);
        },[data])
        return <></>
    }
  return (
    <div className={styles.wrapper}>
    <Swiper
    styles={{padding: "0px 20px"}}
    modules={{Navigation}}
    slidesPerView={'auto'}
    allowTouchMove
    spaceBetween={40}
    >
        <Control data={data}/>
        <CarouselLeftNavigation/>
        <CarouselRightNavigation/>
       { data.map((data)=>(
            <SwiperSlide>{renderComponent(data)}</SwiperSlide>
        )) }

    </Swiper>

    </div>
  )
}
