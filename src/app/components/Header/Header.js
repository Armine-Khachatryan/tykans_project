import React, {useState} from "react";
import Logo from '../../assets/images/Logo.png';
import {useNavigate} from "react-router-dom";
import classes from './Header.module.css';


function Header() {
    const navigate=useNavigate()

    const [showYellow, setShowYellow]=useState("Services");


    const setColorYellow =(text)=>{
        setShowYellow(text)
    }



    return (
        <div className={classes.headerWhole}>
            <div className={classes.headerPart1}>
                <img src={Logo} alt='logo'/>
            </div>
            <div className={classes.headerPart2}>
                <div className={`${classes.headerPart} ${showYellow === 'Services' && classes.activeYellow}`}
                     onClick={()=>{setColorYellow("Services");
                         navigate(`/Home`)}}>Services</div>
                <div className={`${classes.headerPart} ${showYellow === 'Life at Tykans' && classes.activeYellow}`}
                     onClick={()=>{setColorYellow("Life at Tykans");
                        navigate(`/life-at-tykans`)}}>Life at Tykans</div>
                <div className={`${classes.headerPart} ${showYellow === 'Careers' && classes.activeYellow}`}
                     onClick={()=>{setColorYellow("Careers")
                         navigate(`/careers`)}}>Careers</div>
                <div className={`${classes.headerPart} ${showYellow === 'About Us' && classes.activeYellow}`}
                     onClick={()=>{setColorYellow("About Us")}}>About Us</div>
                <div className={classes.activeBlue}>Contact Us</div>
            </div>
        </div>
    )
}


export default Header;