import React, {useEffect} from "react";
import {useLocation} from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import SuccessStories from "../../components/SuccessComponent/SuccessStories/SuccessStories";
import SuccessFirstComponent from "../../components/SuccessComponent/SuccessFirstComponent/SuccessFirstComponent";
import SuccessSecondComponent from "../../components/SuccessComponent/SuccessSecondComponent/SuccessSecondComponent";
import SuccessThirdComponent from "../../components/SuccessComponent/SuccessThirdComponent/SuccessThirdComponent";
import SuccessFourthPart from "../../components/SuccessComponent/SuccessFourthPart/SuccessFourthPart";
import SuccessFifthPart from "../../components/SuccessComponent/SuccessFifthPart/SuccessFifthPart";
import classes from './Success.module.css';



function Success (){

    const routePath = useLocation();
    const onTop = () => {
        window.scrollTo(0, 0);
    }

    useEffect(() => {
        onTop()
    }, [routePath]);


    return (
        <>
            <Header/>
            <SuccessStories/>
            <SuccessFirstComponent/>
            <SuccessSecondComponent/>
            <SuccessThirdComponent/>
            <SuccessFourthPart/>
            <div className={classes.fifthPart}>
                <SuccessFifthPart/>
            </div>
            <Footer/>
        </>
    )
}


export default Success;