import React from "react";
import Button from "../../../UI/Button/Button";
import RedVint from '../../../assets/images/contactUs/RedIcon.png';
import YellowVint from '../../../assets/images/contactUs/YellowIcon.png';
import classes from './HomeFirstComponent.module.css';
import {useNavigate} from "react-router-dom";




function HomeFirstComponent(){


    const navigate=useNavigate();

    return(
        <div className="container">
            <div className={classes.helpWhole}>
                <div className={classes.helpLeft}>
                    <div className={classes.helpTitle}>We <span className={classes.redTitle}>work together to solve
                        problems</span> and bring your visions to reality. </div>
                    <div className={classes.helpText}>We collaborate with you every step along the way, to create
                        systems for communicating critical information and serve the community. We help enhance
                        connections to deliver the best contact centre experience at every level. </div>
                    <div className={classes.helpBtn}>
                        <Button color="#16145F" OnClick={()=>navigate(`/contact-us`)}>How can we help?</Button>
                    </div>
                </div>
                <div className={classes.helpRight}>
                    <div className={classes.yellowDiv}><img src={YellowVint}/></div>
                    <div className={classes.redDiv}><img src={RedVint}/></div>
                </div>
            </div>
        </div>
    )
}


export default HomeFirstComponent;