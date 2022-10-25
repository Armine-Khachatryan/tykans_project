import React from "react";
import { Swiper,  SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Photo1 from '../../../assets/images/lifeEtTykans/Photo1.png';
import Photo2 from '../../../assets/images/lifeEtTykans/Photo2.png';
import Photo3 from '../../../assets/images/lifeEtTykans/Photo3.png';
import Photo4 from '../../../assets/images/lifeEtTykans/Photo4.png';
import Photo5 from '../../../assets/images/lifeEtTykans/Photo5.png';
import classes from './PhotoGalleryLife.module.css';


function PhotoGalleryLife(){
    return(
        <div className="container">
            <div className={classes.galleryTitle}>Photo Gallery</div>
            <Swiper
                spaceBetween={24}
                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
            <SwiperSlide>
                <div className={classes.photos}>
                    <div className={classes.galleryFirstPart}>
                        <div className={classes.photo1div}>
                            <img className={classes.photo1} src={Photo1}/>
                        </div>
                        <div className={classes.galleryFirstDownPart}>
                            <div className={classes.photo2div}>
                                <img className={classes.photo2} src={Photo2}/>
                            </div>
                            <div className={classes.photo3div}>
                                <img className={classes.photo3} src={Photo3}/>
                            </div>
                        </div>
                    </div>
                    <div className={classes.gallerySecondPart}>
                        <div className={classes.photo4div}>
                            <img className={classes.photo4} src={Photo4}/>
                        </div>
                        <div className={classes.photo5div}>
                            <img className={classes.photo5} src={Photo5}/>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={classes.photos}>
                    <div className={classes.galleryFirstPart}>
                        <img className={classes.photo1} src={Photo1}/>
                        <div className={classes.galleryFirstDownPart}>
                        </div>
                    </div>
                    <div className={classes.gallerySecondPart}>
                        <img className={classes.photo4} src={Photo4}/>
                        <img className={classes.photo5} src={Photo5}/>
                    </div>
                </div>
            </SwiperSlide>
            <div className={classes.dots}>
                ......
            </div>
        </Swiper>
    </div>
    );
}


export default PhotoGalleryLife;