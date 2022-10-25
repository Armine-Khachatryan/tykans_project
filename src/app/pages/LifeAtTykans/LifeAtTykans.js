import React from "react";
import Header from "../../components/Header/Header";
import LifeFirstPart from "../../components/LifeAtTykans/LifeFirstPart/LifeFirstPart";
import LifeSecondPart from "../../components/LifeAtTykans/LifeSecondPart/LifeSecondPart";
import LifeThirdPart from "../../components/LifeAtTykans/LifeThirdPart/LifeThirdPart";
import LifeAchieve from "../../components/LifeAtTykans/LifeAchieve/LifeAchieve";
import LifeFamily from "../../components/LifeAtTykans/LifeFamily/LifeFamily";
import LifeInclusive from "../../components/LifeAtTykans/LifeInclusive/LifeInclusive";
import LifeTeamMember from "../../components/LifeAtTykans/LifeTeamMember/LifeTeamMember";
import PhotoGalleryLife from "../../components/LifeAtTykans/PhotoGalleryLife/PhotoGalleryLife";
import Footer from "../../components/Footer/Footer";
import LifeFourthPart from "../../components/LifeAtTykans/LifeFourthPart/LifeFourthPart";


function LifeAtTykans (){


    return(
        <>
            <Header/>
            <LifeFirstPart/>
            <LifeSecondPart/>
            <LifeThirdPart/>
            <LifeAchieve/>
            <LifeInclusive/>
            <LifeFamily/>
            <LifeFourthPart/>
            <LifeTeamMember/>
            <PhotoGalleryLife/>
            <Footer/>
        </>
    )
}


export default LifeAtTykans;