import React from "react";
import LifeFrame4 from '../../../assets/images/lifeEtTykans/LifeFrame4.png';
import LifeFrame5 from '../../../assets/images/lifeEtTykans/LifeFrame5.png';
import classes from './LifeFourthPart.module.css';
import {useNavigate} from "react-router-dom";


function LifeFourthPart(){

    const navigate=useNavigate()

    return(
        <div className={classes.teamTestBackImg}  style={{'background-image': `url(${LifeFrame4})`, height: "1222px"}}>
            <div className={classes.photoTeamTest} style={{background: `url(${LifeFrame5})`, height: "1000px"}}>
                <div className={classes.titleTeamTest}  onClick={()=>{navigate(`/team-testimonials`)}}>
                    Team Testimonials</div>
            </div>
        </div>
    )
}


export default LifeFourthPart;