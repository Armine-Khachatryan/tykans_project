import React from "react";
import LifeFrame2 from '../../assets/images/lifeEtTykans/LifeFrame2.png';
import classes from './LifeSecondPart.module.css';
import YellowButton from "../../UI/YellowButton/YellowButton";
import LifeCircle1 from "../../assets/images/lifeEtTykans/LifeCircle1.png";
import LifeCircle2 from "../../assets/images/lifeEtTykans/LifeCircle2.png";
import LifeCircle3 from "../../assets/images/lifeEtTykans/LifeCircle3.png";
import LifeFrame3 from "../../assets/images/lifeEtTykans/LifeFrame3.png";



function LifeSecondPart() {

    return(
            <div className={classes.backgroundBlueLife}  style={{ 'background-image': `url(${LifeFrame2})`}}>
                {/*backgroundRepeat: "no-repeat", backgroundSize:'cover',*/}
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
                                    <YellowButton color='#B96118'>Team Testimonials</YellowButton>
                                </div>
                                <YellowButton color='#B96118'>Explore Careers</YellowButton>
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
