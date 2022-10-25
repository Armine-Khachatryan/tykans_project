import React from "react";
import PinkArrow from '../../../assets/images/careers/PinkArrow.png';
import OrangeArrow from '../../../assets/images/careers/OrangeArrow.png';
import GreenArrow from '../../../assets/images/careers/GreenArrow.png';
import classes from './CareersSixthPart.module.css';




function CareersSixthPart (){


    return(
        <>
            <div className={classes.sixthPartWhole}>
                <div className={classes.titleSixthPart}>We solve problems and connect our communities</div>
                <div className={classes.titleSixthPart}><span className={classes.titleSixthPartBold}>Want to join us?
                </span>Check out our open positions below.</div>
                <div className={classes.administrativeDiv}>
                    <div className={classes.dropdownFirstPart}>
                        <div className={classes.administrativeNumber}>1</div>
                        <div className={classes.administartivePosition}>Administrative</div>
                    </div>
                    <img className={classes.pinkArrow} src={PinkArrow}/>
                </div>
                <div className={classes.qualityDiv}>
                    <div className={classes.dropdownFirstPart}>
                        <div className={classes.qualityNumber}>10</div>
                        <div className={classes.qualityPosition}>Quality Assurance</div>
                    </div>
                    <img className={classes.orangeArrow} src={OrangeArrow}/>
                </div>
                <div className={classes.supportDiv}>
                    <div className={classes.dropdownFirstPart}>
                        <div className={classes.supportNumber}>10</div>
                        <div className={classes.supportPosition}>Support</div>
                    </div>
                    <img className={classes.greenArrow} src={GreenArrow}/>
                </div>
                <div className={classes.titleBelow}>We are always on the lookout for passionate
                    people to join the Tylams family.</div>
                <div className={classes.titleBelow}>If you don’t see a position that fits your skills,
                    email us at human.resources@tykans.com
                    Our hit the button below to be notified when we
                    put up new postings.</div>
                <div className={classes.emailAndNotify}>
                    <div className={classes.inputClass}>
                        <label htmlFor='email'>Email</label>
                        <input
                            // ref={nameInputRef}
                            type='text'
                            // id='name'
                            // onChange={nameInputChangeHandler}
                            // value={enteredName}
                        />
                        {/*{!enteredNameIsValid && <p className="error-text">Name must not be empty.</p>}*/}
                    </div>
                    <button className={classes.notifyMe}>Notify me</button>
                </div>
            </div>
        </>

    )
}


export default CareersSixthPart;