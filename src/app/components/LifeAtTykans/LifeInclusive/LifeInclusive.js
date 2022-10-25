import React from "react";
import Inclusive from '../../assets/images/lifeEtTykans/Inclusive.png';
import classes from './LifeInclusive.module.css';



function LifeInclusive() {


    return (
        <>
            <div className="container">
                <div className={classes.inclusiveWhole}>
                    <div className={classes.leftPartInclusive}>
                        <img src={Inclusive}/>
                    </div>
                    <div className={classes.rightPartInclusive}>
                        <div className={classes.titleInclusive}>Inclusive</div>
                        <div className="subTitle">We have a chair for everyone.</div>
                        <div className="textStyle">We love to share our experiences and embrace our respective
                            cultures. Our staff is made of people from all over the globe, offering different
                            perspectives and fresh ideas in a safe and inclusive environment where we learn and grow
                            together. Come as you are, be who you are – you’re not a one size fits all, cookie cutter
                            product and neither are we
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default LifeInclusive;