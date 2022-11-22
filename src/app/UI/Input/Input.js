import React from "react";
import classes from './Input.module.css';


function Input (props) {

    return (
        <>
            {props.show &&
                <div
                    className={classes.control}
                >
                    {props.label && <label htmlFor={props.input.id}>{props.label}<span className={classes.redOne}>
                {props.red}</span></label>}
                    <div className={classes.inputDiv}>
                        <input className={`${props.hasError || props.loginError? classes.invalid: ""}`}
                               {...props.input}
                        />
                        <img src={props.image} onClick={props.onClick}/>
                    </div>
                    {props.hasError && <div className={classes.textDanger}>{props.errorText}</div>}
                </div>
            }
        </>

    )
}

export default Input;