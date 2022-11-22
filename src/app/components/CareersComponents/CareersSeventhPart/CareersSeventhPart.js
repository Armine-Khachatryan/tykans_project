import React from "react";
import Careers4 from '../../../assets/images/careers/Careers4.png';
import Careers5 from '../../../assets/images/careers/Careers5.png'
import classes from './CareersSeventhPart.module.css';
import {useNavigate} from "react-router-dom";



function CareersSeventhPart(){

    const navigate=useNavigate

    return(
        <div className={classes.seventhWhole}>
            <div className={classes.seventhMain}>
                <div className={classes.seventhLeftRight}>
                    <div className={classes.seventhImgDiv}>
                        <img className={classes.seventhImg} src={Careers4}/>
                    </div>
                    <div className={classes.seventhText}>Check out words from some of our
                        current employees about what
                        working here is like</div>
                    <button className={classes.redBtn}>Team Testimonials</button>
                </div>
                <div className={classes.seventhLeftRight}>
                    <div className={classes.seventhImgDiv}>
                        <img className={classes.seventhImg} src={Careers5}/>
                    </div>
                    <div className={classes.seventhText}>Questions about joining Tykans
                        or about the interview process?</div>
                    <button className={classes.redBtn} onClick={()=>navigate(`/faq`)}>FAQ’s</button>
                </div>
            </div>
        </div>
    )
}


export default CareersSeventhPart;