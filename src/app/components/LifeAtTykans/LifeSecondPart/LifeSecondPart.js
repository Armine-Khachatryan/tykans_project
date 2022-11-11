import React from "react";
import {useNavigate} from "react-router-dom";
import LifeFrame2 from '../../../assets/images/lifeEtTykans/LifeFrame2.png';
import classes from './LifeSecondPart.module.css';
import Button from "../../../UI/Button/Button";
import LifeCircle1 from "../../../assets/images/lifeEtTykans/LifeCircle1.png";
import LifeCircle2 from "../../../assets/images/lifeEtTykans/LifeCircle2.png";
import LifeCircle3 from "../../../assets/images/lifeEtTykans/LifeCircle3.png";



function LifeSecondPart() {

    const navigate= useNavigate()

    return(
            <div className={classes.backgroundBlueLife}  style={{ background: `url(${LifeFrame2})`}}>
                {/*height: "1121px"}}*/}
                <div className="container">
                    <div className="containerInside">
                        <div className={classes.LeftPartLifeWorking}>
                            <div className={classes.titleLifeWorking}>Working together, celebrating progress,
                                <div className={classes.titleLifeWorking}>and valuing every single person.</div></div>
                            <div className={classes.textLifeWorking}>At Tykans, we work as a team, navigating the rapids
                                and changing currents of technologies together. Our life here is fulfilling and never
                                boring. Tykans has a breathable and flexible working environment where employees embrace
                                their professional and personal passions.</div>
                            <div className="buttonsDiv">
                                <div className="firstBtn">
                                    <Button color='#B96118' OnClick={()=>navigate(`/team-testimonials`)}>Team Testimonials</Button>
                                </div>
                                <Button color='#B96118'>Explore Careers</Button>
                            </div>
                        </div>
                        <div className={classes.rightPartLifeWorking}>
                            <div className={classes.lifeImgDiv1}>
                                <img className={classes.lifeImg1} src={LifeCircle2}/>
                            </div>
                            <div className={classes.imagesLife}>
                                <div className={classes.lifeImgDiv2}>
                                    <img className={classes.lifeImg2} src={LifeCircle1}/>
                                </div>
                                <div className={classes.lifeImgDiv3}>
                                    <img className={classes.lifeImg3} src={LifeCircle3}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}


export default LifeSecondPart;
