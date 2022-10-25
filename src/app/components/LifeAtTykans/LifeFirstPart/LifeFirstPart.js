import React from "react";
import LifeFrame1 from '../../assets/images/lifeEtTykans/LifeFrame1.png';
import classes from './LifeFirstPart.module.css';


function LifeFirstPart(){
    return(
        <div className={classes.part1BackImgLife} style={{ background: `url(${LifeFrame1})`,
            backgroundRepeat: "no-repeat", backgroundSize:'cover', height: "800px"}}>
            <div className={classes.titleLife}>Life at Tykans</div>
        </div>
    )
}


export default LifeFirstPart;

