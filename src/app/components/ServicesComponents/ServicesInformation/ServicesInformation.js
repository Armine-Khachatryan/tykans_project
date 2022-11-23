import React from "react";
import classes from './ServicesInformation.module.css';



function ServicesInformation() {


    return (
        <div className={classes.wholeDiv}>
            <div className="container">
                <div className={classes.titleInfoPart}>Lorem Ipsum is simply dummy
                    text of the printing</div>
                <div className={classes.textInfoPart}>Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                    unknown printer took a galley of type and scrambled it to make a type specimen book. It has
                    survived not only five centuries, but also the leap into electronic typesetting, remaining
                    essentially unchanged. </div>
            </div>
        </div>
    )
}

export default ServicesInformation;