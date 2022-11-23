import React, {useEffect} from "react";
import Light from '../../assets/images/aboutUs/Light.png';
import Footer from "../../components/Footer/Footer";
import classes from './AboutUs.module.css';
import {useLocation, useNavigate} from "react-router-dom";
import Header from "../../components/Header/Header";
import AboutUsComponent from "../../components/AboutUs/AboutUsComponent/AboutUsComponent";
import AboutUsInfo from "../../components/AboutUs/AboutUsInfo/AboutUsInfo";
import Leaders from "../../components/AboutUs/Leaders/Leaders";
import CoreValues from "../../components/AboutUs/CoreValues/CoreValues";
import NumbersData from "../../components/AboutUs/NumbersData/NumbersData";





function AboutUs() {


    const navigate=useNavigate()
    const routePath = useLocation();
    const onTop = () => {
        window.scrollTo(0, 0);
    }

    useEffect(() => {
        onTop()
    }, [routePath]);


    const moveToTeamTestimonialsPage =()=>{
        navigate(`/team-testimonials`)
    }
    return(

        <>
            <Header/>
            <AboutUsComponent/>
            <div className="container">
                <div className={classes.aboutUsTitle}>The Tykans Formula  </div>
                <div className={classes.aboutUsText}>Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                    unknown printer took a galley of type and scrambled it to make a type specimen book. It has
                    survived not only five centuries, but also the leap into electronic typesetting, remaining
                    essentially unchanged.</div>
                <div className={classes.energyPartWhole}>
                    <div className={classes.energyLeft}>
                        <div className={classes.energyDiv}>
                            <div className={classes.energyGreenTitle}>Control your costs</div>
                            <div className={classes.energyText}>Every dollar counts and we work
                                together to deliver quality results
                                within your budget.</div>
                        </div>
                        <div className={classes.energyDiv}>
                            <div className={classes.energyBlueTitle}>Implement new technology quickly</div>
                            <div className={classes.energyText}>With our tired and tested methodology, Total Quality
                                Delivery Framework (TQDM), any ambitious deadline is achievable.</div>
                        </div>
                        <div className={classes.energyDiv}>
                            <div className={classes.energyBlueTitle}>Ideas made possible</div>
                            <div className={classes.energyText}>Every dollar counts and we work
                                together to deliver quality results within your budget.</div>
                        </div>
                    </div>
                    <div className={classes.energyMiddle}>
                        <img src={Light}/>
                    </div>
                    <div className={classes.energyRight}>
                        <div className={classes.energyDiv}>
                            <div className={classes.energyYellowTitle}>Maximize your current environment</div>
                            <div className={classes.energyText}>A significant investment went into your existing
                                solutions. We can help expand  and further enrich  your ROL.</div>
                        </div>
                        <div className={classes.energyDiv}>
                            <div className={classes.energyOrangeTitle}>Designed with users & support in mind</div>
                            <div className={classes.energyText}>Each solution is carefully thought out to provide
                                exceptional user experiences.</div>
                        </div>
                        <div className={classes.energyDiv}>
                            <div className={classes.energyOrangeTitle}>First-hand experience</div>
                            <div className={classes.energyText}>We actually use the products we implement for our
                                customers, so we have answers for the issues you will encounter.</div>
                        </div>
                    </div>
                </div>
            </div>
            <CoreValues/>
            <AboutUsInfo/>
            <Leaders/>
            <NumbersData moveToTeamTestimonialsPage={moveToTeamTestimonialsPage} />
            <Footer/>
        </>

    )
}


export default AboutUs;