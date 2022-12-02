import React, {useEffect} from "react";
import LandingPageVideo from '../../assets/videos/LandingPageVideo.mp4';
import classes from './Home.module.css';
import {useLocation, useNavigate} from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import HomeFirstComponent from "../../components/HomePageComponents/HomeFirstComponent/HomeFirstComponent";
import HomeSecondComponent from "../../components/HomePageComponents/HomeSecondComponent/HomeSecondComponent";
import HomeThirdComponent from "../../components/HomePageComponents/HomeThirdComponent/HomeThirdComponent";
import HomeFourthComponent from "../../components/HomePageComponents/HomeFourthPartComponent/HomeFourthPartComponent";
import HomeSixthPartComponent from "../../components/HomePageComponents/HomeSixthPart/HomeSixthPart";
import HomeSeventhPart from "../../components/HomePageComponents/HomeSeventhPart/HomeSeventhPart";
import HomeFifthPart from "../../components/HomePageComponents/HomeFifthPart/HomeFifthPart";


function Home() {


    const navigate=useNavigate();
    const routePath = useLocation();
    const onTop = () => {
        window.scrollTo(0, 0);
    }

    useEffect(() => {
        onTop();
    }, [routePath]);


    return(
        <>
            <Header/>
            <video className={classes.videoTag} autoPlay loop muted>
                <source src={LandingPageVideo} type='video/mp4' />
            </video>
            <HomeFirstComponent/>
            <HomeSecondComponent/>
            <HomeThirdComponent/>
            <HomeFourthComponent/>
            <HomeFifthPart/>
            <HomeSixthPartComponent/>
            <HomeSeventhPart/>
            <Footer/>
        </>
    )
}


export default Home;
