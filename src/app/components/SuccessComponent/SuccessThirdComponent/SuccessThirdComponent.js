import React from "react";
import Vector from '../../../assets/images/success/Vector.png';
import Success5 from '../../../assets/images/success/Success5.png';
import Success6 from '../../../assets/images/success/Success6.png';
import classes from './SuccessThirdComponent.module.css';



function SuccessThirdComponent(){
    return(
        <div className={classes.backgroundAdvantage} style={{ 'background-image': `url(${Success6})`}}>
            <div className="container">
                <div className={classes.tykansAdvantage}>
                    <div>
                        <div className={classes.advantage}>The Tykans Advantage</div>
                        <div className={classes.vectorAndTitle}>
                            <img src={Vector} alt=""/>
                            <div className={classes.title}>Flexbile & Reliable</div>
                        </div>
                        <div className={classes.vectorAndTitle}>
                            <img src={Vector} alt=""/>
                            <div className={classes.title}>Quality Focused & Cost Effective </div>
                        </div>
                        <div className={classes.vectorAndTitle}>
                            <img src={Vector} alt=""/>
                            <div className={classes.title}>Agile & Accurate</div>
                        </div>
                        <div className={classes.vectorAndTitle}>
                            <img src={Vector} alt=""/>
                            <div className={classes.title}>High - Performance  & Compassion</div>
                        </div>
                    </div>
                    <div className={classes.rightPart}>
                        <img className={classes.rightPartImg} src={Success5} alt=""/>
                    </div>
                </div>
            </div>
        </div>

    )
}


export default SuccessThirdComponent;
