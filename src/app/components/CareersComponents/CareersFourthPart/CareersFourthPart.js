import React from "react";
import CareerCircle1 from '../../../assets/images/careers/CareerCircle1.png';
import CareerCircle2 from '../../../assets/images/careers/CareerCircle2.png';
import CareerCircle3 from '../../../assets/images/careers/CareerCircle3.png';
import CareerCircle4 from '../../../assets/images/careers/CareerCircle4.png';
import CareerCircle5 from '../../../assets/images/careers/CareerCircle5.png';
import CareerCircle6 from '../../../assets/images/careers/CareerCircle6.png';
import classes from './CareersFourthPart.module.css';



function CareersFourthPart (props){

    const resultCareersFourthPage = props?.careersInfo?.sections?.filter(item => (item.layout ==="OfferItems"), 0)
    console.log(resultCareersFourthPage, "************************")

    // const offers=[
    //     {
    //       image:CareerCircle1,
    //       text: "Amazing benefits, including Flex Group Health Benefits, birthday day-off, and more."
    //     },
    //     {
    //         image:CareerCircle2,
    //         text: "Reasons to celebrate, get together, and be more active with ongoing events and social clubs"
    //     },
    //     {
    //         image:CareerCircle3,
    //         text: "A place where crazy and extraordinary ideas are made possible, in a culture that fosters learning" +
    //             " and development."
    //     },
    //     {
    //         image:CareerCircle4,
    //         text: "Wellness services for you to utilize, including massage therapy, counselling, and an equipped gym."
    //     },
    //     {
    //         image:CareerCircle5,
    //         text: "Meet incredible people from all over the world, together here in Canada—in our office or remotely " +
    //             "with our flexible hybrid work set-up. "
    //     },
    //     {
    //         image:CareerCircle6,
    //         text: "Have fun together, bonding over food and hobbies. We love to share!"
    //     },
    // ]

    const renderOffers=resultCareersFourthPage?.map((item, index)=>(
        <div className={classes.offersWhole} key={index}>
            {/*<div className={classes.offersImgDiv}><img className={classes.offersImg} src={item.attributes.image}/></div>*/}
            <div className={classes.offersText}
                 dangerouslySetInnerHTML={{ __html: item.attributes.description }}></div>
        </div>
    ))

    return(
        <div className={classes.fourthPartWhole}>
            <div className={classes.fourthPartTitle}>What we offer</div>
            <div className={classes.fourthPartSubtitle}>More than “just a job”</div>
            <div className={classes.offersDiv}>
                {renderOffers}
            </div>
        </div>
    )
}


export default CareersFourthPart;