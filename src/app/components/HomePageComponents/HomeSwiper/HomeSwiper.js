import React from "react";
import { Swiper,  SwiperSlide } from 'swiper/react';
import { Keyboard, Pagination, Navigation }  from 'swiper';
import 'swiper/css';
import classes from './HomeSwiper.module.css';
import UpQuote from "../../../assets/images/home/UpQuote.png";
import DownQuote from "../../../assets/images/home/DownQuote.png";
import 'swiper/css/keyboard';
import "swiper/css/pagination";
import "swiper/css/navigation";



export default () => {


    return (
        <Swiper
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            keyboard={{ enabled: true }}
            modules={[Keyboard, Pagination, Navigation]}
            pagination={{
                clickable: true
            }}
            navigation={true}
        >
            <SwiperSlide>
                <div className={classes.sliderInside}>
                    <div className={classes.upComaDiv}>
                        <img src={UpQuote}/>
                    </div>
                    <div className={classes.textSlider}>
                        From the beginning stages of development to implementation, Tykans was there… They understood
                        our vision and goals, and created a call center platform that meets the needs of operations,
                        and more importantly, our clients.</div>
                    <div className={classes.downComaDiv}>
                        <img src={DownQuote}/>
                    </div>
                    <div className={classes.nameSurname}>Jason Brown</div>
                    <div className={classes.description}>Alberta Health Services</div>
                </div>
                </SwiperSlide>
            <SwiperSlide>
                <div className={classes.sliderInside}>
                    <div className={classes.upComaDiv}>
                        <img src={UpQuote}/>
                    </div>
                    <div className={classes.textSlider}>
                        From the beginning stages of development to implementation, Tykans was there… They understood
                        our vision and goals, and created a call center platform that meets the needs of operations,
                        and more importantly, our clients.</div>
                    <div className={classes.downComaDiv}>
                        <img src={DownQuote}/>
                    </div>
                    <div className={classes.nameSurname}>Jason Brown</div>
                    <div className={classes.description}>Alberta Health Services</div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={classes.sliderInside}>
                    <div className={classes.upComaDiv}>
                        <img src={UpQuote}/>
                    </div>
                    <div className={classes.textSlider}>
                        From the beginning stages of development to implementation, Tykans was there… They understood
                        our vision and goals, and created a call center platform that meets the needs of operations,
                        and more importantly, our clients.</div>
                    <div className={classes.downComaDiv}>
                        <img src={DownQuote}/>
                    </div>
                    <div className={classes.nameSurname}>Jason Brown</div>
                    <div className={classes.description}>Alberta Health Services</div>
                </div>
            </SwiperSlide>
            {/*<div className={classes.dots}>*/}
            {/*    .....*/}
            {/*</div>*/}

        </Swiper>
    );
};