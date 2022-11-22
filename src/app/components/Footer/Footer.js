import React from "react";
import FooterLogo from '../../assets/images/footer/FooterLogo.png';
import GreenVint from '../../assets/images/GreenVint.png';
import YellowVint from '../../assets/images/YellowVint.png';
import OrangeVint from '../../assets/images/OrangeVint.png';
import Twitter from '../../assets/images/footer/Twitter.png';
import Facebook from '../../assets/images/footer/Facebook.png';
import Instagram from '../../assets/images/footer/Instagram.png';
import LinkedIn from '../../assets/images/footer/LinkedIn.png';
import Youtube from '../../assets/images/footer/Audio.png';
import Chat from '../../assets/images/footer/Chat.png';
import Mail from '../../assets/images/footer/Mail.png';
import Phone from '../../assets/images/footer/Phone.png';
import Map from '../../assets/images/footer/Map.png';
import Settings from '../../assets/images/footer/Settings.png';
import classes from './Footer.module.css';
import {useNavigate} from "react-router-dom";


function Footer() {

    const navigate=useNavigate()


    return(
        <div className={classes.footerWhole}>
            <div className="container">
                <div className={classes.footer}>
                    <div className={classes.footerUp}>
                        <div className={classes.footer1}>
                            <img className={classes.footerLogo} src={FooterLogo}/>
                            <iframe width="412" height="200" id="gmap_canvas"
                                    src="https://maps.google.com/maps?q=3412%2025%20Street%20NE%20Calgary,%20Alberta,%20Canada&t=&z=13&ie=UTF8&iwloc=&output=embed"
                                    frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
                            <div className={classes.footerIcons}>
                                <a  className={classes.footerIcon}
                                    href="https://twitter.com/TykansGroupInc"
                                   target="_blank" rel="noreferrer noopener">
                                    <img  src={Twitter}
                                         alt="twitter"/>
                                </a>
                                <a className={classes.footerIcon}
                                    href="https://www.facebook.com/tykansgroup/"
                                   target="_blank" rel="noreferrer noopener">
                                    <img src={Facebook}
                                         alt="facebook"/>
                                </a>
                                <a className={classes.footerIcon}
                                    href="https://www.instagram.com/tykansgroupinc/"
                                   target="_blank" rel="noreferrer noopener">
                                    <img src={Instagram}
                                         alt="instagram"/>
                                </a>
                                <a className={classes.footerIcon}
                                    href="https://www.linkedin.com/company/3115564/admin/"
                                   target="_blank" rel="noreferrer noopener">
                                    <img src={LinkedIn}
                                         alt="linkedIn"/>
                                </a>
                                <a className={classes.footerIcon}
                                    href= "https://www.youtube.com/channel/UCQGP4HhToMhbwj8pp48bB3g?view_as=subscriber"
                                   target="_blank" rel="noreferrer noopener">
                                    <img src={Youtube}
                                         alt="youtube"/>
                                </a>
                            </div>
                        </div>
                        <div className={classes.footer2}>
                            <div className={classes.footerTitle}>Contact Us</div>
                            <div className={classes.footerContactsDiv}>
                                <img src={Chat}/>
                                <div className={classes.footerContact}>Chat</div>
                            </div>
                            <div className={classes.footerContactsDiv}>
                                <img src={Mail}/>
                                <div className={classes.footerContact}>info@tykans.com</div>
                            </div>
                            <div className={classes.footerContactsDiv}>
                                <img src={Phone}/>
                                <div className={classes.footerContact}>(587) 392 888888</div>
                            </div>
                            <div className={classes.footerContactsDiv}>
                                <img src={Map}/>
                                <div className={classes.footerContact}>3412 25 Street NE Calagary, Alberta, Canada</div>
                            </div>
                        </div>
                        <div className={classes.footer2}>
                            <div className={classes.footerTitle}>Services</div>
                            <div className={classes.footerInfo}>Life at Tykans</div>
                            <div className={classes.footerInfo}>About Us</div>
                            <div className={classes.footerInfo} onClick={()=>navigate(`/faq`)}>FAQs</div>
                            <div className={classes.footerInfo}>Customer Reviews</div>
                            <div className={classes.footerInfo}>Careers</div>
                            <div className={classes.footerInfo}>Staff Testimonials</div>
                        </div>
                        <div className={classes.footerImg}>
                            <div>
                                <img className={classes.yellowVint} src={YellowVint}/>
                            </div>
                            <div>
                                <img  className={classes.greenVint} src={GreenVint}/>
                            </div>
                            <div>
                                <img  className={classes.orangeVint} src={OrangeVint}/>
                            </div>
                            {/*<img src={Settings}/>*/}
                        </div>
                    </div>
                    <div className={classes.footerBelowPart}>
                        <div className={classes.footerBelowLeft}>
                            <div className={classes.footerBelowText}>Privacy Policy</div>
                            <div className={classes.footerBelowText}>Terms of Use</div>
                        </div>
                        <div className={classes.footerBelowText}>©Tykans Group Inc. 2022</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;