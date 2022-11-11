import React from "react";
import classes from './FAQThirdPart.module.css';
import BlueQ from "../../../assets/images/faq/BlueQ.png";
import OrangeQ from '../../../assets/images/faq/OrangeQ.png';


function FAQThirdPart(){


    return(
        <div className="container">
            <div className={classes.blueDivWhole}>
                <img src={BlueQ}/>
                <div className={classes.titleQ}>
                    What will the interview mode be?
                </div>
            </div>
            <div className={classes.answer}>Our small team loves personal communication, and we want both of us to
                make the most out of the interview. If the interview is remote, it will be a video call on Microsoft
                Teams or Zoom with cameras on so we can see each other. If the interview is to be in person, we’ll meet
                you at our office. Either way, we’ll let you know what to expect when we contact you.</div>
            <div className={classes.orangeDivWhole}>
                <img  src={OrangeQ}/>
                <div className={classes.titleQ}>
                    What is the interview process like at Tykans?</div>
            </div>
            <div className={classes.answer}>Depending on the position, it may involve taking a quick test other than
                standard interview questions. We also make it a priority for candidates to meet with multiple
                individuals on the current team, especially those they may be directly working with. It’s important
                to us that you and the team have every opportunity to communicate, and make sure we are the perfect
                fit for each other!</div>
            <div className={classes.blueDivWhole}>
                <img src={BlueQ}/>
                <div className={classes.titleQ}>
                If I’m turned down, will you provide me with
                    feedback for improvement?</div>
            </div>
            <div className={classes.answer}>We know a lot of time and effort goes into an application, and that
                constructive criticism is important for your career path. However, due to the large volume of
                applicants and interviews, we unfortunately won’t be able to provide personalized feedback.</div>
        </div>
    )
}

export default FAQThirdPart;
