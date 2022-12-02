import React from "react";
import classes from './SuccessFirstComponent.module.css';



function SuccessFirstComponent(){
    return(
        <div className="container">
            <div className={classes.titleSuccessFirst}>We work together to solve problems.</div>
            <div className={classes.textSuccess}>Our customers count on us to enable them to provide exception
                customer experiences, communicate using the most convenient
                method, and facilitate decision-making from data in a secure,
                efficient, and cost-effective manner.</div>
        </div>
    )
}


export default SuccessFirstComponent;