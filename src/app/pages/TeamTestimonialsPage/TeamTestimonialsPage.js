import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import TeamTestFirstPart from "../../components/TeamTest/TeamTestFirstPart/TeamTestFirstPart";
import TeamTestMembers from "../../components/TeamTest/TeamTestMembers/TeamTestMembers";
import TeamTestLastPart from "../../components/TeamTest/TeamTestLastPart/TeamTestLastPart";



function TeamTestimonialsPage ()
{
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