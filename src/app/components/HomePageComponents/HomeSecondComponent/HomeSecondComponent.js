import React from "react";
import Image1 from '../../../assets/images/home/Image1.png';
import Button from "../../../UI/Button/Button";
import GreenVint from '../../../assets/images/GreenVint.png';
import YellowVint from '../../../assets/images/YellowVint.png';
import OrangeVint from '../../../assets/images/OrangeVint.png';
import classes from './HomeSecondComponent.module.css';
import {useNavigate} from "react-router-dom";



function HomeSecondComponent(){

    const navigate=useNavigate();



    return (
        <div className={classes.ideasWhole}>
            <div className="container">
                <div className={classes.ideas}>
                    <div className={classes.ideasLeft}>
                        <div className={classes.ideasImgDiv}>
                            <img className={classes.ideasImg} src={Image1}/>
                        </div>
                        <div>
                            <div className={classes.greenVintDiv}>
                                 <img src={GreenVint}/>
                            </div>
                            <div className={classes.yellowVintDiv}>
                                <img src={YellowVint}/>
                            </div>
                            <div className={classes.orangeVintDiv}>
                                <img src={OrangeVint}/>
                            </div>
                        </div>
                    </div>
                    <div className={classes.ideasRight}>
                        <div className={classes.ideasTitle}>Ideas made possible</div>
                        <div className={classes.ideasSubTitle}>Innovative communication systems that serve communities.</div>
                        <div className={classes.ideasText}>Managing communication systems is rewarding, challenging, and
                            ongoing. From systems to applications, we provide a full suite of software services and solutions.
                            Reward your customers with a faster service, through streamlined communication channels and
                            increased means of reach.</div>
                        <Button color="#92374D" OnClick={()=>navigate(`/services`)}>Services</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default HomeSecondComponent;



