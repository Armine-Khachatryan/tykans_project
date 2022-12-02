import React from "react";
import Swiper from '../../../components/HomePageComponents/HomeSwiper/HomeSwiper';
import classes from './HomeSeventhPart.module.css';



function HomeSeventhPart() {

    return(
        <div className={classes.sliderHome}>
            <div className="container">
                <Swiper/>
            </div>

        </div>

    )
}

export default HomeSeventhPart;
