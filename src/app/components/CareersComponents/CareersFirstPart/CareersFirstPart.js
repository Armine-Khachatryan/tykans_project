import React from "react";
import Careers1 from '../../../assets/images/careers/Careers1.png';



function CareersFirstPage (){
    return(
        <div className="part1BackImg" style={{ 'background-image': `url(${Careers1})`}}>
            <div className="container">
                <div className="titleServices redTitle">Careers</div>
            </div>
        </div>
    )
}


export default CareersFirstPage;
