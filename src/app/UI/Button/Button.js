import React from "react";
import classes from './YellowButton.module.css';



function YellowButton (props) {
    return(
        <button className={classes.yellowButton}
                style={{background: props.color}}
                type={props.type || 'button'}
                disabled={props.disabled}
                onClick={props.OnClick}>
            {props.children}
        </button>
    )
}


export default YellowButton;