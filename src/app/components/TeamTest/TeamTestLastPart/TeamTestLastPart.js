import React from "react";
import LeftMechanism from '../../../assets/images/teamTestImages/LeftMechanism.png';
import TeamExplore from '../../../assets/images/teamTestImages/TeamExplore.png';
import RightMechanism from '../../../assets/images/teamTestImages/RightMechanism.png';
import Button from "../../../UI/Button/Button";
import classes from './TeamTestLastPart.module.css';



function TeamTestLastPart (){


    return(
        <div className={classes.teamTestWhole}>
            <div className={classes.leftMechanism}>
                <img src={LeftMechanism}/>
            </div>
            <div className={classes.middleImgDiv} style={{ background: `url(${TeamExplore})`}}>
                <Button color='#B96118'>Explore Careers</Button>
            </div>
            <div className={classes.rightMechanism}>
                <img src={RightMechanism}/>
            </div>
        </div>
    )
}


export default TeamTestLastPart;