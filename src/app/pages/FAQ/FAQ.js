import React, {useEffect} from "react";
import Header from "../../components/Header/Header";
import FAQFirstPage from "../../components/FAQ/FAQFirstPage/FAQFirstPage";
import FAQSecondPage from "../../components/FAQ/FAQSecondPage/FAQSecondPage";
import FAQThirdPart from "../../components/FAQ/FAQThirdPart/FAQThirdPart";
import Footer from "../../components/Footer/Footer";
import {useLocation} from "react-router-dom";



function FAQ (){

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
            <FAQFirstPage/>
            <FAQSecondPage/>
            <FAQThirdPart/>
            <Footer/>
        </>
    )
}


export default FAQ;