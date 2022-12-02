import React, {useState} from "react";
import classes from './SuccessSecondComponent.module.css';
import Success2 from "../../../assets/images/success/Success2.png";
import Success3 from '../../../assets/images/success/Success3.png';
import Success4 from '../../../assets/images/success/Success4.png';
import Arrow from '../../../assets/images/success/Arrow.png';
import {show} from "react-modal/lib/helpers/ariaAppHider";



function SuccessSecondComponent(){


    const [showOutcome,setShowOutcome]=useState({});

    const toggleOutCome = index => {
        setShowOutcome(prevShowOutCome =>({
            ...prevShowOutCome,
            [index]:!prevShowOutCome[index]
        }));
    }



    const successInfo=[
        {
            img: Success2,
            title:"Healthcare",
            challenge:"Tudin ultrices ex Vivamus convallis consequant dolor sed iaculis. Fusce sollictudin lacus vel " +
                "sagittis tristique. Morbi convallis dolor odio, at placerat neque iaculis vitae suspendisse. Curabitur " +
                "dignissim augue lorem. Praesent gravida sodales sapien, ut scelerisque. Morbi convallis " +
            "dolor odio, at placerat neque iaculis vitae. Suspendisse dolor sed iaculis",
            outcome: "Tudin ultrices ex Vivamus convallis consequant dolor sed iaculis. Fusce sollictudin lacus vel " +
                "sagittis tristique. Morbi convallis dolor odio, at placerat neque iaculis vitae suspendisse. Curabitur " +
                "dignissim augue lorem. Praesent gravida sodales sapien, ut scelerisque. Morbi convallis " +
                "dolor odio, at placerat neque iaculis vitae. Suspendisse dolor sed iaculis"
        },
        {
            img: Success3,
            title:"Industry",
            challenge:"Tudin ultrices ex Vivamus convallis consequant dolor sed iaculis. Fusce sollictudin lacus vel " +
                "sagittis tristique. Morbi convallis dolor odio, at placerat neque iaculis vitae suspendisse. Curabitur " +
                "dignissim augue lorem. Praesent gravida sodales sapien, ut scelerisque. Morbi convallis " +
                "dolor odio, at placerat neque iaculis vitae. Suspendisse dolor sed iaculis",
            outcome: "Tudin ultrices ex Vivamus convallis consequant dolor sed iaculis. Fusce sollictudin lacus vel " +
                "sagittis tristique. Morbi convallis dolor odio, at placerat neque iaculis vitae suspendisse. Curabitur " +
                "dignissim augue lorem. Praesent gravida sodales sapien, ut scelerisque. Morbi convallis " +
                "dolor odio, at placerat neque iaculis vitae. Suspendisse dolor sed iaculis"
        },
        {
            img: Success4,
            title:"Industry",
            challenge:"Tudin ultrices ex Vivamus convallis consequant dolor sed iaculis. Fusce sollictudin lacus vel " +
                "sagittis tristique. Morbi convallis dolor odio, at placerat neque iaculis vitae suspendisse. Curabitur " +
                "dignissim augue lorem. Praesent gravida sodales sapien, ut scelerisque. Morbi convallis " +
                "dolor odio, at placerat neque iaculis vitae. Suspendisse dolor sed iaculis",
            outcome: "Tudin ultrices ex Vivamus convallis consequant dolor sed iaculis. Fusce sollictudin lacus vel " +
                "sagittis tristique. Morbi convallis dolor odio, at placerat neque iaculis vitae suspendisse. Curabitur " +
                "dignissim augue lorem. Praesent gravida sodales sapien, ut scelerisque. Morbi convallis " +
                "dolor odio, at placerat neque iaculis vitae. Suspendisse dolor sed iaculis"
        }
        ]



    // className={`myProfileDivs   ${showBlue === 'created' ? "part" : ""} `}

    const renderSuccessInfo=successInfo.map((item, index)=>
        <div className={classes.successCard} key={index}>
            <div className="container">
                <div className={classes.successInfo}>
                    <div className={classes.imgDiv}>
                        <img className={classes.successImg} src={item.img}/>
                    </div>
                    <div>
                        <div className={classes.successCardTitle}>{item.title}</div>
                        <div className={classes.cardBelowPart}>
                            <div className={classes.cardLeft}>
                                <div className={classes.arrowAndBtn} onClick={()=>toggleOutCome(index)}>
                                    <img className={classes.arrowImg} src={Arrow} alt=""/>
                                    <div
                                        className={`${classes.btn} ${showOutcome[index] ? classes.grey : classes.blue} `}
                                        // className={classes.btn}
                                    >Challenge</div>
                                </div>
                                <div className={classes.infoText}>{item.challenge}</div>
                            </div>
                            <div className={classes.cardRight}>
                                <div className={classes.arrowAndBtn}>
                                    <img className={classes.arrowImg} src={Arrow} alt=""/>
                                    <div
                                        className={`${classes.btn} ${showOutcome[index] ? classes.blue : classes.grey} `}
                                    >Outcome</div>
                                </div>
                                {showOutcome[index] &&  <div className={classes.infoText}>{item.outcome}</div>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )





    return(
        <>
            {renderSuccessInfo}
        </>

    )
}


export default SuccessSecondComponent;