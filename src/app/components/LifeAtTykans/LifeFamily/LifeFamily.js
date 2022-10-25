import React from "react";
import Family from '../../assets/images/lifeEtTykans/Family.png';
import classes from './LifeFamily.module.css';



function LifeFamily() {

    return (
        <>
            <div className="container">
                <div className={classes.familyWhole}>
                    <div className={classes.leftPartFamily}>
                        <div className={classes.titleFamily}>Family</div>
                        <div className="subTitle spaceNoWrap">Motivating, encouraging, and supporting.</div>
                        <div className="textStyle">Consisting of different experienced and knowledgeable individuals,
                            we trust and depend on each other to grow and learn. A tight-knit environment lets us
                            broaden our horizons and enrich our lives, as we make time to get together in the office
                            or to connect with each other remotely.</div>
                    </div>
                    <div className={classes.rightPartFamily}>
                        <img src={Family}/>
                    </div>
                </div>
            </div>
        </>
    )
}


export default LifeFamily;


