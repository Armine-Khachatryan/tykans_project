import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import TeamTestFirstPart from "../../components/TeamTest/TeamTestFirstPart/TeamTestFirstPart";
import TeamTestMembers from "../../components/TeamTest/TeamTestMembers/TeamTestMembers";
import TeamTestLastPart from "../../components/TeamTest/TeamTestLastPart/TeamTestLastPart";



function TeamTestimonialsPage () {

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
            <TeamTestFirstPart/>
            <TeamTestMembers/>
            <TeamTestLastPart/>
            <Footer/>
        </>
    )
}

export default TeamTestimonialsPage;