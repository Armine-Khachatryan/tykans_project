import React from "react";
import { useEffect } from "react";
import {useLocation, useNavigate} from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import CareersFirstPage from "../../components/CareersComponents/CareersFirstPart/CareersFirstPart";
import CareersSecondPage from "../../components/CareersComponents/CareersSecondPart/CareersSecondPart";
import CareersThirdPage from "../../components/CareersComponents/CareersThirdPart/CareersThirdPart";
import CareersFourthPart from "../../components/CareersComponents/CareersFourthPart/CareersFourthPart";
import CareersFifthPart from "../../components/CareersComponents/CareersFifthPart/CareersFifthPart";
import CareersSixthPart from "../../components/CareersComponents/CareersSixthPart/CareersSixthPart";
import CareersSeventhPart from "../../components/CareersComponents/CareersSeventhPart/CareersSeventhPart";
// import Administrative from "../../components/Administrative/Administrative";




function Careers (){


    const navigate=useNavigate()
    const routePath = useLocation();
    const onTop = () => {
        window.scrollTo(0, 0);
    }

    useEffect(() => {
        onTop()
    }, [routePath]);

    const moveToTeamTestimonials =()=>{
       navigate(`/team-testimonials`)
    }

    const moveToFAQ =()=>{
        navigate(`/faq`)
    }


    return(
        <>
            <Header/>
            <CareersFirstPage/>
            <CareersSecondPage/>
            <CareersThirdPage/>
            <CareersFourthPart/>
            <CareersFifthPart/>
            <CareersSixthPart/>
            <CareersSeventhPart moveToTeamTestimonials={moveToTeamTestimonials} moveToFAQ={moveToFAQ}/>
            <Footer/>
        </>
    )
}


export default Careers;