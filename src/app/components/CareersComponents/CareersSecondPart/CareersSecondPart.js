import React from "react";
import Careers2 from '../../../assets/images/careers/Careers2.png';
import classes from './CareersSecondPart.module.css';
import Button from "../../../UI/Button/Button";


function CareersSecondPage (){



    return(
        <div className="container">
            <div className={classes.insideCareersdiv}>
                <div className={classes.insideCareersLeft}>
                    <div className={classes.insideCareersTitle}>Join our team and kickstart your future</div>
                    <div className={classes.insideCareersText}>If you are looking for opportunities to grow and feel fulfilled,
                        Tykans offers a dynamic and refreshing work experience. We go beyond “just a job”: we are
                        people-oriented and are encouraged to follow our hearts. Explore openings below and find
                        out how you can be part of our family!</div>
                    <Button color='#92374D'>Explore open roles</Button>
                </div>
                <div className={classes.insideCareersRight}>
                    <div className={classes.careers2ImgDiv}>
                        <img src={Careers2}/>
                    </div>
                </div>
            </div>

        </div>

    )
}


export default CareersSecondPage;

