import React from "react";
import TeamTestFrame from '../../../assets/images/teamTestImages/TeamTestFrame.png';


function TeamTestFirstPart (props){


return(
    <div className="part1BackImg" style={{ 'background-image': `url(${TeamTestFrame})`}}>
        <div className="titleServices">{props.teamInfo[0]?.title}</div>
    </div>
)
}

export default TeamTestFirstPart;



// <div className="part1BackImg" style={{ 'background-image': `url(${props.teamInfo[0].attributes.image})`}}>
//     <div className="titleServices">{props.teamInfo[0].attributes.title}</div>
// </div>