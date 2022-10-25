import React from "react";
import Frame1 from '../../assets/images/Frame1.png';
import classes from './Services.module.css';




function Services() {


    return(
        <div className="part1BackImg" style={{ background: `url(${Frame1})`}}>
            <div className="titleServices">Services</div>
        </div>
    )
}


export default Services;