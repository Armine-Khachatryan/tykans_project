import React from "react";
import classes from './AboutUsComponent.module.css';
import Background1 from '../../../assets/images/aboutUs/Background1.png';


function AboutUsComponent() {



    return(
        <div className="part1BackImg" style={{ 'background-image': `url(${Background1})`}}>
            <div className="container">
                <div className="titleServices">About Us</div>
            </div>
        </div>
    )
}

export default AboutUsComponent;