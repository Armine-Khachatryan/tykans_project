import React from "react";
import useInput from "../../../hooks/useInput";
import Input from "../../../UI/Input/Input";
import useValidation from "../../../hooks/useValidation";
import Button from "../../../UI/Button/Button";
import Robot from '../../../assets/images/faq/Robot.png'
import OrangeQ from '../../../assets/images/faq/OrangeQ.png';
import classes from './FAQSecondPage.module.css';




function FAQSecondPage(){
    const {isEmail}=useValidation();

    const {
        value: email,
        isValid: emailIsValid,
        hasError: emailHasError,
        valueChangeHandler: emailChangeHandler,
        inputBlurHandler: emailBlurHandler,
        reset: resetEmail,
    } = useInput(isEmail);

    let formIsValid = false;
    if (emailIsValid) {
        formIsValid = true;
    }

    const submitHandler =  event => {
        event.preventDefault();
        if (!formIsValid) {
            return;
        }
        console.log("success")
    }


    let emailMessage =null;
    if(!email){
        emailMessage = "Email is required";
    }
    else if (!emailIsValid){
        emailMessage = "Invalid email";
    }

    const handleKeyPress = event => {
        if (event.key === 'Enter') {
            submitHandler()
        }
    }


    return(
        <div className="container">
            <div className={classes.orangeDivWhole}>
                <img className={classes.orangeQ} src={OrangeQ}/>
                I just submitted my application. What are the next steps?
            </div>
            <div className={classes.robotQuestionsDiv}>
                <div>
                    <div className={classes.robotText}>We aim to respond to everyone within 1-2 weeks. We’ll let you
                        know if we’d like to speak with you, if we need more information, or if your application
                        isn’t a fit for what we’re looking for currently.
                    </div>
                    <div className={classes.robotText}>While you are waiting on our recruiters to review your
                        application, we recommend the following steps:</div>
                    <ul>
                        <li className={classes.robotText}>Review our Careers page for other possible positions. Apply
                            directly for any other position that match your skill set. </li>
                        <li className={classes.robotText}>Update your LinkedIn profile. Companies and recruiters rely
                            heavily on LinkedIn to find qualified candidates like you.</li>
                        <li className={classes.robotText}>Follow us on LinkedIn and our other social media accounts for
                            company updates and new positions.</li>
                        <li className={classes.robotText}>Submit your email below to be notified when we post new
                            positions.</li>
                    </ul>
                    </div>
                <div>
                    <img src={Robot}/>
                </div>
            </div>
            <form>
                <Input
                    hasError = {emailHasError}
                    errorText={emailMessage}
                    label="EMAIl"
                    input={{
                        value: email,
                        placeholder: "",
                        type: "email",
                        onChange: emailChangeHandler,
                        onBlur: emailBlurHandler
                    }}
                />
                <div className={classes.btns}>
                    <div className={classes.whiteBtnDiv}>I am a human</div>
                    <Button color="#92374D">Notify Me</Button>
                </div>
            </form>
        </div>
    )
}


export default FAQSecondPage;