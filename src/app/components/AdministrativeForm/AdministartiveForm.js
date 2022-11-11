import React, {useState} from "react";
import useInput from "../../hooks/useInput";
import Input from "../../UI/Input/Input";
import Attach from '../../assets/images/administrative/Attach.png';
import LinkedIn from '../../assets/images/administrative/LinkedIn.png';
import useValidation from "../../hooks/useValidation";
import classes from './AdministartiveForm.module.css';
import Button from "../../UI/Button/Button";
import {useNavigate} from "react-router-dom";
import FileUploader from "../FileUploader/FileUploader";


function AdministartiveForm() {

    const [selectedFile, setSelectedFile] = useState({
        attachedCV: null,
        attachedCoverLetter: null
    });


    const saveData = (e) => {

        const reader = new FileReader();

        reader.addEventListener("load", () => {
            // convert image file to base64 string
            setSelectedFile({
                ...selectedFile,
                [e.target.name]: {
                    file :e.target.files[0],
                    base64:reader.result
                },
            })
        }, false);

            reader.readAsDataURL(e.target.files[0]);
    }

console.log(selectedFile)
    const [values, setValues] = useState({
        eligibleWorkValue: '',
        visaSponsorshipValue: ''
    });

    const [errors, setErrors] = useState({
        eligibleWorkValue: null,
        visaSponsorshipValue: null,
    });

    const handleChange = ({target: {name, value}}) => {
        setValues({
            ...values,
            [name]: value,
        })
        setErrors({
            ...errors,
            [name]: null
        });
    };

    console.log(values, "elligible")
    const {isNotEmpty, isEmail, isPhoneNumber, isURL} = useValidation();
    const navigate = useNavigate();

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
        value: confirmEmailValue,
        isValid: confirmEmailIsValid,
        valueChangeHandler: confirmEmailChangeHandler,
        inputBlurHandler: confirmEmailBlurHandler,
        reset: resetConfirmEmail,
        isTouched: confirmEmailIsTouched
    } = useInput(isEmail);

    const {
        value: phoneNumber,
        isValid: phoneNumberIsValid,
        hasError: phoneNumberHasError,
        valueChangeHandler: phoneNumberChangeHandler,
        inputBlurHandler: phoneNumberBlurHandler,
        reset: resetPhoneNumber,
    } = useInput(isPhoneNumber);


    const {
        value: portfolio,
        // isValid: portfolioIsValid,
        hasError: portfolioHasError,
        valueChangeHandler: portfolioChangeHandler,
        inputBlurHandler: portfolioBlurHandler,
        reset: resetPortfolio,
    } = useInput(isNotEmpty);

    const {
        value: linkedInProfile,
        // isValid: linkedInProfileIsValid,
        hasError: linkedInProfileHasError,
        valueChangeHandler: linkedInProfileChangeHandler,
        inputBlurHandler: linkedInProfileBlurHandler,
        reset: resetLinkedInProfile,
    } = useInput(isURL);

    const {
        value: otherWebsite,
        isValid: otherWebsiteIsValid,
        hasError: otherWebsiteHasError,
        valueChangeHandler: otherWebsiteChangeHandler,
        inputBlurHandler: otherWebsiteBlurHandler,
        reset: resetOtherWebsite,
    } = useInput(isURL);


    let hasConfirmEmailError = false;
    let confirmEmailMessage = null;
    if (email !== confirmEmailValue) {
        hasConfirmEmailError = true;
        confirmEmailMessage = "Emails do not match"
    }

    let formIsValid = false;
    if (fullnameIsValid
        && emailIsValid
        && confirmEmailIsValid
        && phoneNumberIsValid
    ) {
        formIsValid = true;
    }


    // const values= {
    //     first_name:first_name,
    //     last_name:last_name,
    //     username:username,
    //     email:email,
    //     password:password
    // }
    //
    // let postRegistration = async (values)=> {
    //     // console.log(values , "values")
    //     try {
    //         // values['username'] = values['email']
    //         let response = await axios.post(`${config.baseUrl}auth/register/`, values)
    //         console.log(response, 'registration response');
    //         // console.log(response.data, 'registration response data');
    //         dispatch({
    //                 type: "REGISTRATION",
    //                 payload:response.data
    //             }
    //         )
    //         navigate('/verifyEmail');
    //     }
    //     catch (e) {
    //         console.log(e.response, 'registrationError');
    //     }
    // }


    // const submitHandler = async event => {
    //     event.preventDefault();
    //     if (!formIsValid) {
    //         return;
    //     }
    //     await postRegistration(values);
    //     await  resetFirstName();
    //     await resetLastName();
    //     await  resetNickname();
    //     await  resetEmail();
    //     await   resetPassword();
    //     await   resetConfirmPassword();
    // };


    const submitHandler = event => {
        event.preventDefault();
        if (!formIsValid) {
            return;
        }
        navigate('/home');
        resetFullname();
        resetEmail();
        resetConfirmEmail();
        resetPhoneNumber();
        resetPortfolio();
        resetLinkedInProfile();
        resetOtherWebsite()
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
        <div className={classes.entireForm}>
            <form
                onSubmit={submitHandler}
            >
                <div className={classes.formTitles}>
                    <div className={classes.formTitle}>SUBMIT YOUR APPLICATION</div>
                    <div className={classes.formSubTitle}><span className={classes.redForm}>*</span> REQUIRED</div>
                </div>
                <Input
                    hasError={fullnameHasError}
                    errorText="Please enter Full Name."
                    label="Full Name"
                    red=" *"
                    input={{
                        value: fullname,
                        placeholder: "",
                        type: "text",
                        onChange: fullnameChangeHandler,
                        onBlur: fullnameBlurHandler
                    }}
                />

                <Input
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
                    hasError={hasConfirmEmailError && confirmEmailIsTouched}
                    errorText={confirmEmailMessage}
                    label="confirm email"
                    red=" *"
                    input={{
                        value: confirmEmailValue,
                        placeholder: "",
                        type: "email",
                        onChange: confirmEmailChangeHandler,
                        onBlur: confirmEmailBlurHandler,
                    }}
                />
                <Input
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

                <div className={classes.attachedWhole}>
                    <div className={classes.attachOne}>
                        <div className={classes.attachedTitle}>Resume / cv <span className={classes.redForm}>*</span>
                        </div>
                        <div className={classes.attachedSubTitle}>(Accepted file formats: .pdf, .doc, .docx)</div>
                        <FileUploader
                            accept={'application/msword,application/pdf'}
                            img={Attach}
                            name="attachedCV"
                            onHandleFile={saveData}
                            btnText="Attach Resume/CV"
                        />
                        <a className={classes.uploadedFile}
                           href={selectedFile.attachedCV?.base64}
                           download={selectedFile.attachedCV?.file?.name}>
                            {selectedFile.attachedCV?.file?.type}
                        </a>
                        {/*{selectedFile && <div className={classes.uploadedFile}>{selectedFile[]}</div>}*/}
                        {/*    <div className={classes.attachedButton}>*/}
                        {/*        <img src={Attach}/>*/}
                        {/*        Attach Resume/CV</div>*/}
                    </div>
                    <div className={classes.attachOne}>
                        <div className={classes.attachedTitle}>cOVER LETTER<span className={classes.redForm}>*</span>
                        </div>
                        <div className={classes.attachedSubTitle}>(Accepted file formats: .pdf, .doc, .docx)</div>
                        <FileUploader
                            accept={'application/msword,application/pdf'}
                            img={Attach}
                            name="attachedCoverLetter"
                            onHandleFile={saveData}
                            btnText=" Attach Cover Letter"
                        />
                        <a className={classes.uploadedFile}
                           href={selectedFile.attachedCoverLetter?.base64}
                           download={selectedFile.attachedCoverLetter?.file?.name}>
                            {selectedFile.attachedCoverLetter?.file?.type}
                        </a>

                        {/*<div className={classes.uploadedFile}>{selectedFile.attachedCV}</div>}*/}
                        {/*<div className={classes.attachedButton}>*/}
                        {/*    <img src={Attach}/>*/}
                        {/*    Attach Cover Letter*/}
                        {/*</div>*/}
                    </div>

                    {/*<div className={classes.attachOne}>*/}
                    {/*    <div className={classes.attachedTitle}>Apply with linkedin*/}
                    {/*    </div>*/}
                    {/*    <div className={classes.attachedSubTitle}>(Your full profile will be shared)</div>*/}
                    {/*    <div className={classes.attachedButton}>*/}
                    {/*        <img src={LinkedIn}/>*/}
                    {/*        Apply with Linkedin*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>
                <div className={classes.formTitles}>
                    <div className={classes.formTitle}>LINKS</div>
                </div>
                <Input
                    hasError={portfolioHasError}
                    errorText="Please enter a portfolio"
                    label="pORTFOLIO"
                    input={{
                        value: portfolio,
                        placeholder: "",
                        type: "text",
                        onChange: portfolioChangeHandler,
                        onBlur: portfolioBlurHandler,
                    }}
                />
                <Input
                    hasError={linkedInProfileHasError}
                    errorText="Please enter LinkedIn Profile URL"
                    label="Linkedin profile"
                    input={{
                        value: linkedInProfile,
                        placeholder: "",
                        type: "text",
                        onChange: linkedInProfileChangeHandler,
                        onBlur: linkedInProfileBlurHandler,
                    }}
                />
                <Input
                    hasError={otherWebsiteHasError}
                    errorText="Please enter other website URL"
                    label="other website"
                    input={{
                        value: otherWebsite,
                        placeholder: "",
                        type: "text",
                        onChange: otherWebsiteChangeHandler,
                        onBlur: otherWebsiteBlurHandler,
                    }}
                />
                <div className={classes.formLastDiv}>
                    <div className={classes.formTitle}>QUICK QUESTIONS</div>
                </div>
                <div className={classes.selectAndLabel}>
                    <label className={classes.selectLabel} htmlFor="eligibleWork">aRE YOU ELIGBLE TO WORK IN CANADA?
                        <span className={classes.redForm}>*</span>
                    </label>
                    <select className={classes.selectInput} id="eligibleWork"
                            onChange={handleChange}
                            name="eligibleWorkValue">
                        <option selected disabled hidden value={values.eligibleWorkValue}>--</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                    <div className={classes.textDanger}>
                        {errors.eligibleWorkValue}
                    </div>
                </div>

                <div className={classes.selectAndLabel}>
                    <label htmlFor="visaSponsorship" className={classes.selectLabel}>
                        wILL YOU NOW, OR IN THE FUTURE, REQUIRE VISA SPONSORSHIP FOR
                        EMPLOYMENT AT TYKANS?
                        <span className={classes.redForm}>*</span>
                    </label>
                    <select id="visaSponsorship" className={classes.selectInput}
                            name="visaSponsorshipValue"
                            onChange={handleChange}
                    >
                        <option selected disabled hidden value={values.visaSponsorshipValue}
                        > --
                        </option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                    <div className={classes.textDanger}>
                        {errors.visaSponsorshipValue}
                    </div>
                </div>
                <div className={classes.privacyStatement}>PRIVACY STATEMENT<span className={classes.redForm}>*</span>
                    <div className={classes.privacy}>When you apply on this site, any personal data and documents
                        contained on your application will be collected by Tykans Group Inc. Your personal data will
                        be subject to Tykans’
                        <span className={classes.unerlinedSpan}>Candidate Privacy Statement.</span></div>
                </div>
                <div className={classes.btnDiv}>
                    <Button
                        disabled={!formIsValid}
                        color="#92374D" type={"submit"}>Submit Application</Button>
                </div>
            </form>

        </div>
    )
}


export default AdministartiveForm;