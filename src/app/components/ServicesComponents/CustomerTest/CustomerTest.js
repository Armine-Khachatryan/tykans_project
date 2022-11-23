import React from "react";
import Swiper from "../Swiper/Swiper";
import classes from './CustomerTest.module.css';




function CustomerTest() {


    return(
        <div className={classes.customerTestWhole}>
            <div className="container">
                <div className={classes.customerTitle}>Customer Testimonials</div>
                <Swiper/>
            </div>
        </div>
    )
}


export default CustomerTest;