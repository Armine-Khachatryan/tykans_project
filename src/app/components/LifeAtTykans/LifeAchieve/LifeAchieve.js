import React from "react";
import Achieve from '../../assets/images/lifeEtTykans/Achieve.png';
import classes from './LifeAchieve.module.css';
import IntegrateBigCircle from "../../assets/images/bigCircles/Integrate_Big_Circle.png";




function LifeAchieve() {


    return (
        <>
            <div className="container">
                <div className={classes.achieveWhole}>
                    <div className={classes.leftPartAchieve}>
                        <div className={classes.titleAchieve}>Achieve</div>
                        <div className="subTitle">Wellness in all forms is important to us.</div>
                        <div className="textStyle">Tykans has a variety of social clubs and activities, from gardening
                            to cooking, and more, as well as year-round indoor and outdoor events. Physical and mental
                            wellbeing is a top priority. In addition to wellness and massage therapists available, we
                            encourage each other to follow passions outside of work and live a fruitful life.</div>
                    </div>
                    <div className={classes.rightPartAchieve}>
                        <img src={Achieve}/>
                    </div>
                </div>
            </div>
        </>
    )
}


export default LifeAchieve;


