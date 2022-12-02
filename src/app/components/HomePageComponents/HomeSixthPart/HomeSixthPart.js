import React from "react";
import HomeImage4 from '../../../assets/images/home/HomeImage4.png';
import GreenVint from '../../../assets/images/GreenVint.png';
import OrangeVint from '../../../assets/images/OrangeVint.png';
import RedVint from '../../../assets/images/RedVint.png';
import classes from './HomeSixthPart.module.css';
import Heart from "../../../assets/images/home/Heart.png";
import Button from "../../../UI/Button/Button";
import {useNavigate} from "react-router-dom";



function HomeSixthPartComponent(){


    const navigate=useNavigate();



    return (
        <div className={classes.achieveGoalsWhole}>
            <div className="container">
                <div className={classes.achieveGoals}>
                    <div className={classes.goalsLeft}>
                        <div className={classes.goalsTitle}>We
                            <span className={classes.heartDiv}><img src={Heart}/>you</span>
                        </div>
                        <div className={classes.goalsSubTitle}>Learn more about how we achieve goals with you.</div>
                        <div className={classes.goalText}>Our work life is driven by passion, exceptional
                            professionalism, and a refreshing culture of family-like relationships. We are flexible
                            and supportive, and we use our talents as a team to develop solutions that help your
                            communities.</div>
                        <div className={classes.btnDiv}>
                            <Button color="#92374D" OnClick={()=>navigate(`/about-us`)}>See how we work</Button>
                        </div>
                    </div>
                    <div className={classes.goalsRight}>
                      <div className={classes.goalPicDiv}>
                          <img className={classes.goalPic} src={HomeImage4}/>
                      </div>
                        <div className={classes.vintDiv}>
                            <div className={classes.greenVintDiv}>
                                <img src={GreenVint}/>
                            </div>
                            <div className={classes.redVintDiv}>
                                <img src={RedVint}/>
                            </div>
                            <div className={classes.orangeVintDiv}>
                                <img src={OrangeVint}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeSixthPartComponent;


