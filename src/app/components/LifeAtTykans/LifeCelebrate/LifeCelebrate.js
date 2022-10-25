import React from "react";
import Celebrate from '../../../assets/images/lifeEtTykans/Celebrate.png';
import classes from './LifeCelebrate.module.css';


function LifeCelebrate() {


    return(
        <div className={classes.celebrateWhole}>
            <div className={classes.leftPartCelebrate}>
                <img className="circleBig" src={Celebrate}/>
            </div>
            <div className={classes.rightPartCelebrate}>
                <div className={classes.titleCelebrate}>Celebrate</div>
                <div className="subTitle">Any success is worth celebrating.</div>
                <div className="textStyle">Whether it is an achievement, brilliant ideas, or simply a good day is worth
                            celebrating – we really, truly love good and hanging our together. We actively encourage and uplift
                            each other in our journey, work, projects, and life.</div>
            </div>
        </div>
    )
}


export default LifeCelebrate;