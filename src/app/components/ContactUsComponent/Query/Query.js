import React from "react";
import ImageQueryPart from '../../../assets/images/contactUs/ImageQueryPart.png';
import classes from './Query.module.css';


function Query (){


    return(
        <div className={classes.queryWhole}>
            <div className={classes.queryLeft}>
                <img className={classes.imgQuery} src={ImageQueryPart}/>
            </div>
            <div className={classes.queryRight}>
                <div className={classes.queryTitle}>Thank you for query !</div>
                <div className={classes.queryText}>Your question has been received. We will get back to you as soon
                    as we can</div>
            </div>
        </div>
    )
}


export default Query;

