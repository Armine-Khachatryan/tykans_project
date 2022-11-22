import React from "react";
import LeftMechanism from '../../../assets/images/teamTestImages/LeftMechanism.png';
import TeamExplore from '../../../assets/images/teamTestImages/TeamExplore.png';
import RightMechanism from '../../../assets/images/teamTestImages/RightMechanism.png';
import Button from "../../../UI/Button/Button";
import classes from './TeamTestLastPart.module.css';
import YellowVint from "../../../assets/images/YellowVint.png";
import GreenVint from "../../../assets/images/GreenVint.png";
import OrangeVint from "../../../assets/images/OrangeVint.png";
import RedVint from "../../../assets/images/RedVint.png";
import BlueVint from "../../../assets/images/BlueVint.png";



function TeamTestLastPart (){


    return(
        <div className={classes.teamTestWhole}>
            <div className={classes.leftMechanism}>
                {/*<img src={LeftMechanism}/>*/}
                <div>
                    <img className={classes.redVint} src={RedVint}/>
                </div>
                <div>
                    <img  className={classes.orangeSmallVint} src={OrangeVint}/>
                </div>
                <div>
                    <img  className={classes.blueVint} src={BlueVint}/>
                </div>
            </div>
            <div className={classes.middleImgDiv} style={{ 'background-image': `url(${TeamExplore})`}}>
                <Button color='#B96118'>Explore Careers</Button>
            </div>
            <div className={classes.rightMechanism}>
                {/*<img src={RightMechanism}/>*/}
                <div>
                    <img className={classes.yellowVint} src={YellowVint}/>
                </div>
                <div>
                    <img  className={classes.greenVint} src={GreenVint}/>
                </div>
                <div>
                    <img  className={classes.orangeVint} src={OrangeVint}/>
                </div>
            </div>
        </div>
    )
}


export default TeamTestLastPart;