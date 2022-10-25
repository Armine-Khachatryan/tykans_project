import React from "react";
import BlueFrame from '../../../assets/images/BlueFrame.png';
import PersonImg from '../../../assets/images/careers/PersonImg.png';
import classes from './CareersThirdPart.module.css';



function CareersThirdPage (){


    return(
        <div className={classes.blueFrame} style={{ background: `url(${BlueFrame})`}}>
            <div className={classes.frameInside}>
                <div className={classes.whoImageDiv}>
                    <img className={classes.personImg} src={PersonImg}/>
                </div>
                <div className={classes.careersRightPart}>
                    <div className={classes.careersTitleThird}>Who we look for</div>
                    <div className={classes.careersSubtitleThird}>Support and empathy for the community.
                    </div>
                    <div className={classes.careersText}>We are looking for people who are passionate in their work, are
                        willing to learn and grow, and value integrity. We want people who can think creatively, are
                        adaptable, proactive, and engaged. We welcome individuals with different perspectives, unique
                        backgrounds, and fresh takes. We are seeking down-to-earth and genuine people to work with,
                        collaborate with, and hangout with (especially if you like food). If these qualities describe you,
                        then Tykans might be the perfect fit for you and your career!
                    </div>
                </div>
            </div>
        </div>
    )
}


export default CareersThirdPage;