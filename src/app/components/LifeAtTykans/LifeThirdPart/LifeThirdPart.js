import React from "react";
import LifeFrame3 from '../../../assets/images/lifeEtTykans/LifeFrame3.png';
import classes from './LifeThirdPart.module.css';
import LifeCelebrate from "../LifeCelebrate/LifeCelebrate";

function LifeThirdPart(){
    return(
        <>
        <div className={classes.backgroundLifeThirdPart} style={{ 'background-image': `url(${LifeFrame3})`,
            backgroundRepeat: "no-repeat", backgroundSize:'cover',
            height: "1121px"}}
        >
            <div className="container">
                <div className={classes.containerInside}>
                <div className={classes.titleLifeThird}>Our Culture</div>
                <LifeCelebrate/>
                </div>
            </div>
        </div>
        </>
    )
}

export default LifeThirdPart;
