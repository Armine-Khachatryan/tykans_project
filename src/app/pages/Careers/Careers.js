import React, {useState} from "react";
import {useEffect} from "react";
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
import axios from "axios";
import config from "../../config";


function Careers() {

    const [careersInfo, setCareersInfo] = useState([])
    console.log(careersInfo, "careersInfo")

    const navigate = useNavigate();
    const routePath = useLocation();
    const onTop = () => {
        window.scrollTo(0, 0);
    }

    useEffect(() => {
        getCareersData()
    }, []);

    useEffect(() => {
        onTop()
    }, [routePath]);

    const moveToTeamTestimonials = () => {
        navigate(`/team-testimonials`)
    }

    const moveToFAQ = () => {
        navigate(`/faq`)
    }


    //
    // let getCareersData = async () => {
    //     try {
    //         let response = await axios.get(`${config.baseUrl}api/pages/careers`)
    //         console.log(response.data, "careers response");
    //         setCareersInfo(response.data.content);
    //
    //     } catch (error) {
    //         console.log(error);
    //         console.log(error.response, 'getServicesInfoError');
    //     }
    // }

    let getCareersData = async () => {
        try {
            let response = await axios.get(`${config.baseUrl}api/pages/careers`)
            console.log(response)
            console.log(response.data, "careers response");
            setCareersInfo(response.data, "careers response data");

        } catch (error) {
            console.log(error);
            console.log(error.response, 'getServicesInfoError');
        }
    }


    return (
        <>
            <Header/>
            <CareersFirstPage/>
            <CareersSecondPage careersInfo={careersInfo}/>
            <CareersThirdPage/>
            <CareersFourthPart careersInfo={careersInfo}/>
            <CareersFifthPart/>
            <CareersSixthPart/>
            <CareersSeventhPart moveToTeamTestimonials={moveToTeamTestimonials} moveToFAQ={moveToFAQ}/>
            <Footer/>
        </>
    )
}


export default Careers;