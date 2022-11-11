import React, {useEffect} from "react";
import AdministrativeImage from '../../assets/images/administrative/AdministrativeImage.png';
import classes from './AdministrativePage.module.css';
import {useLocation} from "react-router-dom";
import Administrative from "../../components/Administrative/Administrative";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";




function AdministrativePage () {

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
            <div className="part1BackImg" style={{ background: `url(${AdministrativeImage})`}}></div>
            <Administrative/>
            <Footer/>
        </>

    )
}


export default AdministrativePage;