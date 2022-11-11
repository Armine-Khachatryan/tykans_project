import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Services from "../../components/HomePageComponents/Services/Services";
import classes from './Home.module.css';
import Frame2 from "../../assets/images/Frame2.png";
import CreateSmallCircle from '../../assets/images/smallCircles/Create-Small-Circle.png';
import EducateSmallCircle from '../../assets/images/smallCircles/Educate-Small-Circle.png';
import MigrateSmallCircle from '../../assets/images/smallCircles/Migrate-Small-Circle.png';
import OperateSmallCircle from '../../assets/images/smallCircles/Operate-Small-Circle.png';
import IntegrateSmallCircle from '../../assets/images/smallCircles/Integrate-Small-Circle.png';
import AutomateSmallCircle from '../../assets/images/smallCircles/Automate-Small-Circle.png';
import Migration from "../../components/HomePageComponents/Migration/Migration";
import Button from "../../UI/Button/Button";
import Integration from "../../components/HomePageComponents/Integration/Integration";
import Create from "../../components/HomePageComponents/Create/Create";
import Educate from "../../components/HomePageComponents/Educate/Educate";
import Operate from "../../components/HomePageComponents/Operate/Operate";
import Automate from "../../components/HomePageComponents/Automate/Automate";
import Products from "../../components/HomePageComponents/Products/Products";
import HomeInformation from "../../components/HomePageComponents/HomeInformation/HomeInformation";
import InformationList from "../../components/HomePageComponents/InformationList/InformationList";
import Partners from "../../components/HomePageComponents/Partners/Partners";
import CustomerTest from "../../components/HomePageComponents/CustomerTest/CustomerTest";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";




function Home() {

    const routePath = useLocation();
    const onTop = () => {
        window.scrollTo(0, 0);
    }

    useEffect(() => {
        onTop()
    }, [routePath]);

    return(
        <>
            <Header/>
            <Services/>
            <div className={classes.backgroundBlue} style={{ background: `url(${Frame2})`}}>
                <div className="container">
                    <div className="containerInside">
                        <div className={classes.LeftPartInnovation}>
                            <div className={classes.titleInnovation}>Innovative communication
                                <div className={classes.titleInnovation}> that serves communities.</div></div>
                            <div className={classes.textInnovation}>Managing communication systems is rewarding,
                                challenging, and ongoing. We provide comprehensive software services and solutions,
                                from systems to applications. Reward your customers with faster service, through
                                streamlined communication channels and increased means of reach.</div>
                            <div className="buttonsDiv">
                                <div className="firstBtn">
                                    <Button color='#EAB531'>Jump to Products</Button>
                                </div>
                                <Button color='#EAB531'>Customer Testimonials </Button>
                            </div>
                        </div>
                         <div className={classes.rightPartInnovation}>
                             <a href="#create">
                                 <div className={classes.createImgDiv}>
                                     <img className={classes.createImg} src={CreateSmallCircle} alt="create"/>
                                 </div>
                             </a>
                             <a href="#educate">
                                 <div className={classes.educateImgDiv}>
                                     <img className={classes.educateImg} src={EducateSmallCircle} alt="educate"/>
                                 </div>
                             </a>
                             <a href="#migrate">
                                 <div className={classes.migrateImgDiv}>
                                     <img className={classes.migrateImg} src={MigrateSmallCircle} alt="migrate"/>
                                 </div>
                             </a>
                             <a href="#automate">
                                 <div className={classes.automateImgDiv}>
                                    <img className={classes.automateImg} src={AutomateSmallCircle} alt="automate"/>
                                 </div>
                             </a>
                             <a href="#operate">
                                 <div className={classes.operateImgDiv}>
                                     <img className={classes.operateImg} src={OperateSmallCircle} alt="operate"/>
                                 </div>
                             </a>
                             <a href="#integrate">
                                 <div className={classes.integrateImgDiv}>
                                     <img className={classes.integrateImg} src={IntegrateSmallCircle} alt="integrate"/>
                                 </div>
                             </a>
                         </div>
                    </div>
                    <Migration/>
                </div>
            </div>
            <Integration/>
            <Create/>
            <Educate/>
            <Operate/>
            <Automate/>
            <Products/>
            <HomeInformation/>
            <InformationList/>
            <Partners/>
            <CustomerTest/>
            <Footer/>
        </>

    )
}

export default Home;

