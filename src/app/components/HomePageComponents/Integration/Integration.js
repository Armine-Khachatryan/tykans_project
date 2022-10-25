import React from "react";
import classes from './Integration.module.css';
import IntegrateBigCircle from "../../assets/images/bigCircles/Integrate_Big_Circle.png";
// import C from '../../assets/images/careers/Careers1.png';
import BlueBook from "../../assets/images/bookIcons/BlueBook.png";





function Integration() {



    return(
        <>
            <div className="container">
                <div className={classes.integrationWhole}>
                    <div className={classes.leftPartIntegration}>
                        <div className={classes.titleIntegrate}>Integrate</div>
                        <div className="subTitle">Elevate convenience & efficiency.</div>
                        <div className="textStyle">Accurate and simple navigation applications help handle processing and
                            organizing sensitive data. Integrate your valuable existing systems with newer applications.
                        </div>
                        <div className="textStyle">Have the information you need on-hand to help make things more
                            convenient for customers and agents.</div>
                        <div className="readMore leftAlign">
                            <img className="blueBookImg" src={BlueBook}/>Read More</div>
                    </div>
                    <div className={classes.rightPartIntegration}>
                        <img className="circleBig" src={IntegrateBigCircle}/>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Integration;