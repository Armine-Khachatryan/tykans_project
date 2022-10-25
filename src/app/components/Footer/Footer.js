import React from "react";
import FooterLogo from '../../assets/images/footer/FooterLogo.png';
import BigMap from '../../assets/images/footer/BigMap.png';
import Twitter from '../../assets/images/footer/Twitter.png';
import Facebook from '../../assets/images/footer/Facebook.png';
import Instagram from '../../assets/images/footer/Instagram.png';
import LinkedIn from '../../assets/images/footer/LinkedIn.png';
import Audio from '../../assets/images/footer/Audio.png';
import Chat from '../../assets/images/footer/Chat.png';
import Mail from '../../assets/images/footer/Mail.png';
import Phone from '../../assets/images/footer/Phone.png';
import Map from '../../assets/images/footer/Map.png';
import Settings from '../../assets/images/footer/Settings.png';
import classes from './Footer.module.css';


function Footer() {


    return(
        <div className={classes.footerWhole}>
            <div className={classes.footerUp}>
                <div className={classes.footer1}>
                    <img className={classes.footerLogo} src={FooterLogo}/>
                    <iframe width="412" height="200" id="gmap_canvas"
                            src="https://maps.google.com/maps?q=3412%2025%20Street%20NE%20Calgary,%20Alberta,%20Canada&t=&z=13&ie=UTF8&iwloc=&output=embed"
                            frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
                            {/*<iframe width="412" height="200" id="gmap_canvas"*/}
                            {/*        // src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed"*/}
                            {/*        src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed"*/}
                            {/*        frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0">2880 Broadway, New York</iframe>*/}
                    {/*<div className="mapouter">*/}
                {/*        <div className="gmap_canvas">*/}
                {/*        <iframe width="600" height="500" id="gmap_canvas"*/}
                {/*                src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed"*/}
                {/*                frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0">2880 Broadway, New York</iframe>*/}
                {/*        <a href="https://123movies-to.org"></a><br>*/}
                {/*        /!*<style>.mapouter{position:relative;text-align:right;height:500px;width:600px;}</style>*!/*/}
                {/*        <a href="https://www.embedgooglemap.net"></a>*/}
                {/*        /!*<style>.gmap_canvas {overflow:hidden;background:none!important;height:500px;width:600px;}</style>*!/*/}
                {/*    </div>*/}
                {/*</div>*/}
                {/*    <img src={BigMap}/>*/}
                    <div className={classes.footerIcons}>
                        <img className={classes.footerIcon} src={Twitter}/>
                        <img className={classes.footerIcon} src={Facebook}/>
                        <img className={classes.footerIcon} src={Instagram}/>
                        <img className={classes.footerIcon} src={LinkedIn}/>
                        <img className={classes.footerIcon} src={Audio}/>
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
                    <div className={classes.footerInfo}>FAQs</div>
                    <div className={classes.footerInfo}>Customer Reviews</div>
                    <div className={classes.footerInfo}>Careers</div>
                    <div className={classes.footerInfo}>Staff Testimonials</div>
                </div>
                <div className={classes.footerImg}>
                    <img src={Settings}/>
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
    )
}

export default Footer;