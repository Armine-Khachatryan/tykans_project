import React from "react";
import classes from './Operate.module.css';
import OperateBigCircle from "../../assets/images/bigCircles/Operate_Big_Circle.png";
import BlueBook from "../../assets/images/bookIcons/BlueBook.png";



function Operate() {


    return(
        <>
            <div className="container">
                <div className={classes.operateWhole}>
                    <div className={classes.leftPartOperate}>
                        <img className="circleBig" src={OperateBigCircle}/>
                    </div>
                    <div className={classes.rightPartOperate}>
                        <div className={classes.titleOperate}>Operate</div>
                        <div className="subTitle">A helping hand whenever you need it.</div>
                        <div className="textStyle">With advanced support analysts on call and available 24/7,we provide
                            the right amount of relief from your call centre problems.Whether you need a break or just
                            peace of mind,we’re here to help with managing the stress of you working hard to help
                            others.</div>
                        <div className="textStyle">Lets us  handle the worry so your can sleep soundly</div>
                        <div className="readMore">
                            <img className="blueBookImg" src={BlueBook}/> Read More</div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Operate;
