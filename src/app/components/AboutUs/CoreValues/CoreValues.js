import React from "react";
import BlueFrame from '../../../assets/images/BlueFrame.png';
import Background2 from '../../../assets/images/aboutUs/Background2.png';
import classes from './CoreValues.module.css';



function CoreValues() {
    return (
        <div className={classes.coreBackImg} style={{'background-image': `url(${BlueFrame})`,height: "1222px"}}>
            <div className={classes.coreFrameDiv} style={{'background-image': `url(${Background2})`}}>
                <div className="container">
                    <div className={classes.titleCore}>Our Core Values</div>
                </div>
            </div>
        </div>
    )
}


export default CoreValues;
