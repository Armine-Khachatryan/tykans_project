import React from "react";
import UpComa from '../../assets/images/lifeEtTykans/UpComa.png';
import DownComa from '../../assets/images/lifeEtTykans/DownComa.png';
import AvatarLife from '../../assets/images/lifeEtTykans/AvatarLife.png';
import classes from './LifeTeamMember.module.css';
import YellowButton from "../../UI/YellowButton/YellowButton";


function LifeTeamMember(){

    return(

        <div className={classes.wholeMembers}>
            <img className={classes.upComa} src={UpComa}/>
            <div className={classes.memberInfo}>
                <div className={classes.member}>
                    <div className={classes.personIfo}>
                        <img src={AvatarLife}/>
                        <div className={classes.personName}>Lacey</div>
                        <div className={classes.personPosition}>Administartive Assistant</div>
                    </div>
                </div>
                    <div className={classes.textAndButtons}>
                        <div className={classes.textInfo}>Tykans has been the most positive work environment that I have
                            had the opportunity to be in. I am extremely thankful to be part of such an amazing team, who
                            I can count on as being my work family…</div>
                        <div className={classes.buttonsLife}>
                            <div className={classes.firstButton}>
                                <YellowButton color='#B96118'>Read more</YellowButton>
                            </div>
                            <YellowButton color='#B96118'>Explore Careers</YellowButton>
                        </div>
                    </div>
                </div>
            <img className={classes.downComa} src={DownComa}/>
        </div>
    )
}


export default LifeTeamMember;

