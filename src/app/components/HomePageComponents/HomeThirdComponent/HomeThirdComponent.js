import React from "react";
import {useNavigate} from "react-router-dom";
import SuccessImage1 from '../../../assets/images/home/SuccessImage1.png';
import SuccessImage2 from '../../../assets/images/home/SuccessImage2.png';
import SuccessImage3 from '../../../assets/images/home/SuccessImage3.png';
import SuccessImage4 from '../../../assets/images/home/SuccessImage4.png';
import classes from './HomeThirdComponent.module.css';


function HomeThirdComponent(){

    const navigate =useNavigate()

const successStories=[
    {
        img:SuccessImage1,
        title:"Implement & support",
        description:"Tykans has the experience and expertise to implement and support a world class Contact Centre " +
            "that enables efficient, personalized customer experience and builds stronger relationships."
    },
    {
        img:SuccessImage2,
        title:"Critical Information",
        description:"We’ve helped health organizations communicate COVID test results to significantly reduce wait" +
            "times for critical information."
    },
    {
        img:SuccessImage3,
        title:"Communication",
        description:"Companies can respond to emergencies and pin the impacted areas on a map, ask if assistance is " +
            "needed, and communicate where to meet."
    },
    {
        img:SuccessImage4,
        title:"Optimize resources",
        description:"Automatically send billing and collection reminders to customers and provide them with a payment" +
            " method while optimizing staff resources and maximizing cash flow."
    }
    ]

const renderSuccessStories=successStories.map((item, index)=>
    <div className={classes.cardSuccess}>
        <div className={classes.imgSuccessDiv}>
            <img className={classes.imgSuccess} src={item.img}/>
        </div>
        <div className={classes.titleSuccess}>{item.title}</div>
       <div className={classes.descriptionSuccess}>{item.description}</div>
    </div>
)




    return(
        <div className="container">
            <div className={classes.successTitle}>Success Stories</div>
            <div className={classes.successSubTitle}>Supporting, solutions, and awesome customers.</div>
            <div className={classes.successStoriesWhole}>
                {renderSuccessStories}
            </div>
            <div className={classes.successBtn} onClick={()=>navigate(`/success-stories`)}>Read more success stories</div>
        </div>
    )
}


export default HomeThirdComponent;