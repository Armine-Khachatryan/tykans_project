import React from "react";
import Hands from '../../../assets/images/Hands.png';
import classes from './Partners.module.css';
import Button from "../../../UI/Button/Button";



function Partners() {


    return (
        <div className={classes.partnersWhole}>
            <div className={classes.handDiv}>
                <img className="circleBig" src={Hands}/>
            </div>
            <div className={classes.partnersPart}>
                <div className={classes.partnersTitle}>Our Partners</div>
                <div className={classes.partnersSubTitle}>Lorem Ipsum dolor sit amet</div>
                <div className={classes.partnersText}>Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s.</div>
                <Button color='#EAB531'>Partner Hub</Button>
            </div>
        </div>
    )
}

export default Partners;
