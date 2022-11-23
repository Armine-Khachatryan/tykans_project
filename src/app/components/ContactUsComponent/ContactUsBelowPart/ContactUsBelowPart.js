import React from "react";
import Direction from '../../../assets/images/contactUs/Direction.png';
import Message from '../../../assets/images/contactUs/Message.png';
import Phone from '../../../assets/images/contactUs/Phone.png';
import Chat from '../../../assets/images/contactUs/Chat.png';
import LinkedIn from '../../../assets/images/contactUs/LinkedIn.png';
import Instagram from '../../../assets/images/contactUs/Instagram.png';
import Facebook from '../../../assets/images/contactUs/Facebook.png';
import Twitter from '../../../assets/images/contactUs/Twitter.png';
import Youtube from '../../../assets/images/contactUs/Youtube.png';
import RedIcon from '../../../assets/images/contactUs/RedIcon.png';
import YellowIcon from '../../../assets/images/contactUs/YellowIcon.png';
import classes from './ContactUsBelowPart.module.css';





function ContactUsBelowPart() {


    return (
        <>
            <div className="container">
                <div className={classes.wholeBelowContact}>
                    <div className={classes.leftPart}>
                        <div className={classes.titleFind}>Find us online & IRL</div>
                        <div className={classes.addressContactSocial}>
                            <div className={classes.detailsDiv}>
                                <div className={classes.detailsTitle}>Address</div>
                                <div className={classes.detailsAddress}>3412 25 Street NE Calgary, Alberta T1Y 6C1</div>
                                <div className={classes.getDirection}><img src={Direction}/>Get Directions</div>
                            </div>
                            <div className={classes.detailsDiv}>
                                <div className={classes.detailsTitle}>Contact</div>
                                <div className={classes.detailsContact}><img src={Message}/>
                                    info@tykans.com</div>
                                <div className={classes.detailsContact}><img src={Phone}/>
                                    (587) 392 - 8888</div>
                                <div className={classes.detailsContact}><img src={Chat}/>Chat</div>
                            </div>

                            <div className={classes.detailsDiv}>
                                <div className={classes.detailsTitle}>Social</div>
                                <div>
                                    <a href="https://www.linkedin.com/company/3115564/admin/"
                                       target="_blank" rel="noreferrer noopener">
                                        <img className={classes.iconDiv} src={LinkedIn}
                                             alt="linkedIn"/>
                                    </a>
                                    <a href="https://www.instagram.com/tykansgroupinc/"
                                       target="_blank" rel="noreferrer noopener">
                                        <img className={classes.iconDiv} src={Instagram}
                                             alt="instagram"/>
                                    </a>
                                    <a href="https://www.facebook.com/tykansgroup/"
                                       target="_blank" rel="noreferrer noopener">
                                        <img className={classes.iconDiv} src={Facebook}
                                             alt="facebook"/>
                                    </a>
                                    <a href="https://twitter.com/TykansGroupInc"
                                       target="_blank" rel="noreferrer noopener">
                                        <img className={classes.iconDiv} src={Twitter}
                                             alt="twitter"/>
                                    </a>
                                    <a href= "https://www.youtube.com/channel/UCQGP4HhToMhbwj8pp48bB3g?view_as=subscriber"
                                       target="_blank" rel="noreferrer noopener">
                                        <img className={classes.iconDiv} src={Youtube}
                                             alt="youtube"/>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className={classes.redIconDiv}><img src={RedIcon}/></div>
                        <div className={classes.yellowIconDiv}><img src={YellowIcon}/></div>
                    </div>
                    <div className={classes.rightPart}>
                        <iframe className={classes.frame} width="640" id="gmap_canvas"
                                src="https://maps.google.com/maps?q=3412%2025%20Street%20NE%20Calgary,%20Alberta,%20Canada&t=&z=13&ie=UTF8&iwloc=&output=embed"
                                frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
                    </div>
                </div>
            </div>
        </>

    )
}


export default ContactUsBelowPart;