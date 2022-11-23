import React from "react";
import Frame1 from '../../../assets/images/Frame1.png';





function ServicesComponent() {


    return(
        <div className="part1BackImg" style={{ 'background-image': `url(${Frame1})`}}>
            <div className="container">
                <div className="titleServices">Services</div>
            </div>
        </div>
    )
}


export default ServicesComponent;