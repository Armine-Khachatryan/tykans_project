import React from "react";
import HomeImage1 from '../../../assets/images/home/HomeImage1.png';
import HomeImage2 from '../../../assets/images/home/HomeImage2.png';
import HomeImage3 from '../../../assets/images/home/HomeImage3.png';
import Button from "../../../UI/Button/Button";
import YellowVint from '../../../assets/images/home/YellowVint.png';
import classes from './HomeFourthPartComponent.module.css';
import {useNavigate} from "react-router-dom";



function HomeFourthComponent(){


    const navigate=useNavigate();



    return (
        <div className={classes.fourthPartWhole}>
            <div className="container">
                <div className={classes.fourthPart}>
                    <div className={classes.fourthPartLeft}>
                        <div className={classes.fourthPartTitle}>Life at Tykans</div>
                        <div className={classes.fourthPartSubTitle}>We thrive on high - fives</div>
                        <div className={classes.fourthPartText}>Our work life is driven by passion, exceptional
                            professionalism, and a refreshing culture of family-like relationships. We are flexible
                            and supportive, and we use our talents as a team to develop solutions that help your
                            communities.</div>
                        <div className={classes.btnDiv}>
                            <Button color="#92374D" OnClick={()=>navigate(`/life-at-tykans`)}>See how we work</Button>
                        </div>
                    </div>
                    <div className={classes.fourthPartRight}>
                        <div className={classes.yellowVintDiv}>
                            <img src={YellowVint}/>
                        </div>
                        <div className={classes.homeImg1Div}>
                            <img className={classes.homeImg1} src={HomeImage1}/>
                        </div>
                        <div className={classes.homeImg2Div}>
                            <img className={classes.homeImg2} src={HomeImage2}/>
                        </div>
                        <div className={classes.homeImg3Div}>
                            <img className={classes.homeImg3} src={HomeImage3}/>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}


export default HomeFourthComponent;