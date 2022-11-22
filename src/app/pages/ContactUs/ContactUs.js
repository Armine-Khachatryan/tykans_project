import React, {useEffect} from "react";
import ContactForm from "../../components/ContactUsComponent/ContactForm/ContactForm";
import {useLocation} from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import LetsTalk from "../../components/ContactUsComponent/LetsTalk/LetsTalk";
import ContactUsBelowPart from "../../components/ContactUsComponent/ContactUsBelowPart/ContactUsBelowPart";
import classes from './ContactUs.module.css';



function ContactUs() {

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
            <LetsTalk/>
            <ContactForm/>
            <ContactUsBelowPart/>
            <Footer/>
            </>
    )
}


export default ContactUs;