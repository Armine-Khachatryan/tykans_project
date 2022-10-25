import React from "react";
import BlueFrame from '../../../assets/images/BlueFrame.png';
import Careers3 from '../../../assets/images/careers/Careers3.png';
import classes from './CareersFifthPart.module.css';



function CareersFifthPart (){
    return(
        <div className={classes.careersFifthPartBackImg}  style={{backgroundImage: `url(${BlueFrame})`,
            height: "1222px"}}>
            <div className={classes.photoCareersFifthPart} style={{background: `url(${Careers3})`, height: "1000px"}}>
                <div className={classes.titleCareersFifthPart}>Current Opportunities</div>
            </div>
        </div>
    )
}


export default CareersFifthPart;