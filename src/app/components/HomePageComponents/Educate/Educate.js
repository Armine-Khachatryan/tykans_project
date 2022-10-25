import React from "react";
import classes from './Educate.module.css';
import EducateBigCircle from "../../assets/images/bigCircles/Educate_Big_Circle.png";
import BlueBook from "../../assets/images/bookIcons/BlueBook.png";



function Educate() {

    return(
        <>
            <div className="container">
                <div className={classes.educationWhole}>
                    <div className={classes.leftPartEducation}>
                        <div className={classes.titleEducation}>Educate</div>
                        <div className="subTitle">Training, resources, & knowledge
                            at your fingertips.</div>
                        <div className="textStyle">Whether it is growth or turnover, new staff or systems often means
                            training. To deliver quality service to callers and positive experiences for ages, we
                            offer certified training programs and more.</div>
                        <div className="textStyle">Not only the most out of your systems, but become even more
                            incredible  with them.</div>
                        <div className="readMore leftAlign">
                        <img className="blueBookImg" src={BlueBook}/> Read More</div>
                    </div>
                    <div className={classes.rightPartEducation}>
                        <img className="circleBig" src={EducateBigCircle}/>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Educate;