import React from "react";
import HomeImg5 from '../../../assets/images/home/HomeImg5.png';
import HomeImg6 from '../../../assets/images/home/HomeImg6.png';
import HomeImg7 from '../../../assets/images/home/HomeImg7.png';
import HomeImg8 from '../../../assets/images/home/HomeImg8.png';
import RedVint from '../../../assets/images/RedVint.png';
import BlueVint from '../../../assets/images/BlueVint.png';
import OrangeBigVint from '../../../assets/images/home/OrangeBigVint.png';
import classes from './HomeFifthPart.module.css';
import Button from "../../../UI/Button/Button";
import {useNavigate} from "react-router-dom";


function HomeFifthPart (){

    const navigate=useNavigate();


    return(
        <div className={classes.fifthPartWhole}>
            <div className="container">
                <div className={classes.fifthPartLeft}>
                    <div>
                        <img className={classes.redCog} src={RedVint} alt=""/>
                    </div>
                    <div className={classes.fifthPartImg1Div}>
                        <img className={classes.fifthPartImg} src={HomeImg5}  alt=""/>
                    </div>
                    <div className={classes.fifthPartImg2Div}>
                        <img className={classes.fifthPartImg} src={HomeImg6} alt=""/>
                    </div>
                    <div className={classes.fifthPartImg3Div}>
                        <img className={classes.fifthPartImg} src={HomeImg7} alt=""/>
                    </div>
                    <div>
                        <img className={classes.orangeCog} src={OrangeBigVint} alt=""/>
                    </div>
                    <div className={classes.fifthPartImg4Div}>
                        <img className={classes.fifthPartImg} src={HomeImg8} alt=""/>
                    </div>
                    <div>
                        <img className={classes.blueCog} src={BlueVint} alt=""/>
                    </div>

                </div>
                <div className={classes.fifthPartRight}>
                    <div className={classes.fifthPartTitle}>Support & passion</div>
                    <div className={classes.fifthPartSubTitle}>We are a supportive, hard-working bunch
                        that values you as a person, not a number.</div>
                    <div className={classes.fifthPartText}>From tech to creatives, Tykans has people with a variety of
                        expertise and backgrounds. We encourage each other in both personal and professional development.
                        Check out what opportunities Tykans has for you to discover!</div>
                    <div className={classes.btnsFifthPart}>
                        <div className={classes.leftBtn}>
                            <Button color="#16145F" OnClick={()=>navigate(`/careers`)}>Explore Careers</Button>
                        </div>
                        <Button color="#16145F" OnClick={()=>navigate(`/team-testimonials`)}>Team Testimonials</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeFifthPart;






