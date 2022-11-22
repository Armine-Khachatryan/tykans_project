import React, {useState} from "react";
import Query from '../Query/Query';
import classes from './ContactForm.module.css';
import useValidation from "../../../hooks/useValidation";
import useInput from "../../../hooks/useInput";
import Input from "../../../UI/Input/Input";
import Button from "../../../UI/Button/Button";


function ContactForm() {
    const [discussValue, setDiscussValue] = useState("");
    const [showQuery, setShowQuery]=useState(false)
    const [discussError, setDiscussError] = useState(null);
    const {isNotEmpty, isEmail, isPhoneNumber} = useValidation();

    const handleChange = (event) => {
        setDiscussValue(event.target.value);
        if (discussValue.length < 1) {
            console.log(discussValue,"eee")
            console.log(discussValue.split('').length)
            setDiscussError("Please fill in the textarea")
        }
        else{
            setDiscussError(null)
        }
    };
    //


    const {
        value: fullname,
        isValid: fullnameIsValid,
        hasError: fullnameHasError,
        valueChangeHandler: fullnameChangeHandler,
        inputBlurHandler: fullnameBlurHandler,
        reset: resetFullname,
    } = useInput(isNotEmpty);

    const {
        value: email,
        isValid: emailIsValid,
        hasError: emailHasError,
        valueChangeHandler: emailChangeHandler,
        inputBlurHandler: emailBlurHandler,
        reset: resetEmail,
    } = useInput(isEmail);

    const {
        value: phoneNumber,
        isValid: phoneNumberIsValid,
        hasError: phoneNumberHasError,
        valueChangeHandler: phoneNumberChangeHandler,
        inputBlurHandler: phoneNumberBlurHandler,
        reset: resetPhoneNumber,
    } = useInput(isPhoneNumber);




    let fullnameInput = true
    let showEmailInput = false;
    let showPhoneInput = false;
    let showDiscussTextarea = false;
    if (fullnameIsValid) {
        showEmailInput = true
    }
    if (fullnameIsValid && emailIsValid) {
        showPhoneInput = true
    }

    if (fullnameIsValid && emailIsValid && phoneNumberIsValid) {
        showDiscussTextarea = true
    }


    let formIsValid = false;
    if (fullnameIsValid
        && emailIsValid
        && phoneNumberIsValid
        && discussValue
    ) {
        formIsValid = true;
    }

    const submitHandler = event => {
        event.preventDefault();
        if (!formIsValid) {
            console.log("success")
        }
        setShowQuery(true)
        resetFullname();
        resetEmail();
        resetPhoneNumber();
        setDiscussValue("")
    };


    let emailMessage = null;
    if (!email) {
        emailMessage = "Email is required";
    } else if (!emailIsValid) {
        emailMessage = "Invalid email";
    }


    const handleKeyPress = event => {
        if (event.key === 'Enter') {
            submitHandler()
        }
    }
    return (

        <div className={classes.wholeContact}>
            <div className="container">
                <div className={classes.contactTitle}>Whatever your goal, we can help you get there.</div>
                <div className={classes.contactSubTitle}>Whether you want to talk business, just have some questions,
                    or something else, we’re here for you !
                </div>
                {!showQuery?   <form className={classes.greyForm}
                                     onSubmit={submitHandler}
                >
                    <div className={classes.formTitle}><span className={classes.redForm}>*</span> REQUIRED</div>
                    <Input
                        show={fullnameInput}
                        hasError={fullnameHasError}
                        errorText="Please enter Full Name."
                        label="Full Name"
                        red=" *"yo
                        input={{
                            value: fullname,
                            placeholder: "",
                            type: "text",
                            onChange: fullnameChangeHandler,
                            onBlur: fullnameBlurHandler
                        }}
                    />
                    <Input
                        show={showEmailInput}
                        hasError={emailHasError}
                        errorText={emailMessage}
                        label="email"
                        red=" *"
                        input={{
                            value: email,
                            placeholder: "",
                            type: "email",
                            onChange: emailChangeHandler,
                            onBlur: emailBlurHandler
                        }}
                    />

                    <Input
                        show={showPhoneInput}
                        hasError={phoneNumberHasError}
                        errorText="Please enter phone number."
                        label="phone"
                        red=" *"
                        input={{
                            value: phoneNumber,
                            placeholder: "",
                            type: "text",
                            onChange: phoneNumberChangeHandler,
                            onBlur: phoneNumberBlurHandler
                        }}
                    />
                    {showDiscussTextarea &&
                        <div className={classes.selectAndLabelContact}>
                            <label className={classes.selectLabelContact} htmlFor="discuss">wHAT WOULD YOU LIKE TO
                                DISCUSS?
                                <span className={classes.redForm}>*</span>
                            </label>
                            <textarea className={`${discussError? classes.invalid : ""}`}
                               id="discuss" rows="4" name="discuss"
                                      value={discussValue}
                                      onChange={handleChange}/>
                            <div className={classes.textDanger}>{discussError}</div>
                        </div>
                    }
                    <div className={classes.btnsDiv}>
                        <Button
                            disabled={!formIsValid}
                            color="#92374D" type={"submit"}>Submit </Button>
                    </div>
                </form>
                    :<Query/>}
            </div>
        </div>
    )

}


export default ContactForm;