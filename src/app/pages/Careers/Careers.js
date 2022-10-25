import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import CareersFirstPage from "../../components/CareersComponents/CareersFirstPart/CareersFirstPart";
import CareersSecondPage from "../../components/CareersComponents/CareersSecondPart/CareersSecondPart";
import CareersThirdPage from "../../components/CareersComponents/CareersThirdPart/CareersThirdPart";
import CareersFourthPart from "../../components/CareersComponents/CareersFourthPart/CareersFourthPart";
import CareersFifthPart from "../../components/CareersComponents/CareersFifthPart/CareersFifthPart";
import CareersSixthPart from "../../components/CareersComponents/CareersSixthPart/CareersSixthPart";
import CareersSeventhPart from "../../components/CareersComponents/CareersSeventhPart/CareersSeventhPart";




function Careers (){
    return(
        <>
            <Header/>
            <CareersFirstPage/>
            <CareersSecondPage/>
            <CareersThirdPage/>
            <CareersFourthPart/>
            <CareersFifthPart/>
            <CareersSixthPart/>
            <CareersSeventhPart/>
            <Footer/>
        </>
    )
}


export default Careers;