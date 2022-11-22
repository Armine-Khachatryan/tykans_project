import React from "react";
import Background1 from '../../../assets/images/faq/BackgroundFAQ.png';


function FAQFirstPage(){

    return(
        <div className="part1BackImg" style={{ 'background-image': `url(${Background1})`}}>
            <div className="container">
                <div className="titleServices blueTitle">FAQ’S</div>
            </div>
        </div>
    )
}


export default FAQFirstPage;
