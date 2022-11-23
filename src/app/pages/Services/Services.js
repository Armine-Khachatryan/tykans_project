import React, {useState} from "react";
import axios from "axios";
import config from "../../config";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ServicesComponent from "../../components/ServicesComponents/ServicesComponent/ServicesComponent";
import classes from './Services.module.css';
import Frame2 from "../../assets/images/Frame2.png";
import CreateSmallCircle from '../../assets/images/smallCircles/Create-Small-Circle.png';
import EducateSmallCircle from '../../assets/images/smallCircles/Educate-Small-Circle.png';
import MigrateSmallCircle from '../../assets/images/smallCircles/Migrate-Small-Circle.png';
import OperateSmallCircle from '../../assets/images/smallCircles/Operate-Small-Circle.png';
import IntegrateSmallCircle from '../../assets/images/smallCircles/Integrate-Small-Circle.png';
import AutomateSmallCircle from '../../assets/images/smallCircles/Automate-Small-Circle.png';
import Migration from "../../components/ServicesComponents/Migration/Migration";
import Button from "../../UI/Button/Button";
import ServiceTypes from "../../components/ServicesComponents/ServiceTypes/ServiceTypes";
import Create from "../../components/ServicesComponents/Create/Create";
import Educate from "../../components/ServicesComponents/Educate/Educate";
import Operate from "../../components/ServicesComponents/Operate/Operate";
import Automate from "../../components/ServicesComponents/Automate/Automate";
import Products from "../../components/ServicesComponents/Products/Products";
import ServicesInformation from "../../components/ServicesComponents/ServicesInformation/ServicesInformation";
import InformationList from "../../components/ServicesComponents/InformationList/InformationList";
import Partners from "../../components/ServicesComponents/Partners/Partners";
import CustomerTest from "../../components/ServicesComponents/CustomerTest/CustomerTest";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";



function Services (){
    const [servicesInfo,setServicesInfo]=useState([])

    console.log(servicesInfo, "servicesInfo")

    const routePath = useLocation();
    const onTop = () => {
        window.scrollTo(0, 0);
    }

    useEffect(() => {
        onTop()
    }, [routePath]);



    useEffect(() => {
        getServicesData()
    },[]);



    let getServicesData = async () => {
        try {
            let response = await axios.get(`${config.baseUrl}api/pages/services`)
            console.log(response.data, "services response");
            setServicesInfo(response.data.content);

        } catch (error) {
            console.log(error);
            console.log(error.response, 'getServicesInfoError');
        }
    }




    return(
        <>
            <Header/>
            <ServicesComponent/>
            <div className={classes.backgroundBlue} style={{ 'background-image': `url(${Frame2})`}}>
                <div className="container">
                    <div className="containerInside">
                        <div className={classes.LeftPartInnovation}>
                            <div className={classes.titleInnovation}>{servicesInfo[0]?.title}
                                {/*Innovative communication*/}
                                {/*<div className={classes.titleInnovation}> that serves communities.</div>*/}
                            </div>
                            <div className={classes.textInnovation}>{servicesInfo[0]?.description}</div>
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
                    {/*<Migration servicesInfo={servicesInfo}/>*/}
                </div>
            </div>
            <ServiceTypes servicesInfo={servicesInfo}/>
            {/*<Create/>*/}
            {/*<Educate/>*/}
            {/*<Operate/>*/}
            {/*<Automate/>*/}
            <Products/>
            <ServicesInformation/>
            <InformationList/>
            <Partners/>
            <CustomerTest/>
            <Footer/>
        </>

    )
}

export default Services;











// return(
//         <>
//             <Header/>
//             <ServicesComponent/>
//             <div className={classes.backgroundBlue} style={{ 'background-image': `url(${Frame2})`}}>
//                 <div className="container">
//                     <div className="containerInside">
//                         <div className={classes.LeftPartInnovation}>
//                             <div className={classes.titleInnovation}>Innovative communication
//                                 <div className={classes.titleInnovation}> that serves communities.</div></div>
//                             <div className={classes.textInnovation}>Managing communication systems is rewarding,
//                                 challenging, and ongoing. We provide comprehensive software services and solutions,
//                                 from systems to applications. Reward your customers with faster service, through
//                                 streamlined communication channels and increased means of reach.</div>
//                             <div className="buttonsDiv">
//                                 <div className="firstBtn">
//                                     <Button color='#EAB531'>Jump to Products</Button>
//                                 </div>
//                                 <Button color='#EAB531'>Customer Testimonials </Button>
//                             </div>
//                         </div>
//                          <div className={classes.rightPartInnovation}>
//                              <a href="#create">
//                                  <div className={classes.createImgDiv}>
//                                      <img className={classes.createImg} src={CreateSmallCircle} alt="create"/>
//                                  </div>
//                              </a>
//                              <a href="#educate">
//                                  <div className={classes.educateImgDiv}>
//                                      <img className={classes.educateImg} src={EducateSmallCircle} alt="educate"/>
//                                  </div>
//                              </a>
//                              <a href="#migrate">
//                                  <div className={classes.migrateImgDiv}>
//                                      <img className={classes.migrateImg} src={MigrateSmallCircle} alt="migrate"/>
//                                  </div>
//                              </a>
//                              <a href="#automate">
//                                  <div className={classes.automateImgDiv}>
//                                     <img className={classes.automateImg} src={AutomateSmallCircle} alt="automate"/>
//                                  </div>
//                              </a>
//                              <a href="#operate">
//                                  <div className={classes.operateImgDiv}>
//                                      <img className={classes.operateImg} src={OperateSmallCircle} alt="operate"/>
//                                  </div>
//                              </a>
//                              <a href="#integrate">
//                                  <div className={classes.integrateImgDiv}>
//                                      <img className={classes.integrateImg} src={IntegrateSmallCircle} alt="integrate"/>
//                                  </div>
//                              </a>
//                          </div>
//                     </div>
//                     <Migration/>
//                 </div>
//             </div>
//             <ServiceTypes/>
//             <Create/>
//             <Educate/>
//             <Operate/>
//             <Automate/>
//             <Products/>
//             <ServicesInformation/>
//             <InformationList/>
//             <Partners/>
//             <CustomerTest/>
//             <Footer/>
//         </>
//
//     )
// }
//
// export default ServicesComponent;

