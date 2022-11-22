import React from "react";
import Teamwork from '../../../assets/images/aboutUs/Teamwork.png';
import Quality from '../../../assets/images/aboutUs/Quality.png';
import Innovation from '../../../assets/images/aboutUs/Innovation.png';
import People from '../../../assets/images/aboutUs/People.png';
import classes from './AboutUsInfo.module.css';



function AboutUsInfo(){


    const aboutUsInfo=[
        {
            img:Teamwork,
            title:"Teamwork",
            subTitle:"Sharing to achieve our  goals.",
            text:"We are colleagues working together,sharing knowledge,talents,\n" +
                "and skills to achive common goals.Collective interest allows us to\n" +
                "work our way up as a team. Multiple brains are better than one!"
        },

        {
            img:Quality,
            title:"Quality",
            subTitle:"A job done well, is a job well done.",
            text:"We continuously strive to achive excellence at all levels, to bring\n" +
                "about the best in everyone and in everything we do. Quality is priority,and combined with our" +
                "expertise, we aim to deliver a top notch experience from strat to finish."
        },
        {
            img:Innovation,
            title:"Innovation",
            subTitle:"We seek creative improvement.",
            text:"We innovate every process,problem-solving,finding places\n" +
                "to improve,and facing our challenges head on.We use our creativity and skills to evolve “from good " +
                "to great”, doing what we can to keep going forward and upward."
        },
        {
            img:People,
            title:"People",
            subTitle: "People as individuals, not numbers",
            text:"We place great importance in having good and lasing relationships\n" +
                "with individuals. An open and truly inviting culture helps our team members to feel seeen, valued, " +
                "and proud of their work passions.Together,anything is possible."
        }
    ]


    const aboutUsRender=aboutUsInfo.map((item, index)=>(
        <div className={classes.valuesWhole} key={index}>
            <div className={classes.leftPartValues}>
                <img className="circleBig" src={item.img}/>
            </div>
            <div className={classes.rightPartValues}>
                <div className={classes.titleValues}>{item.title}</div>
                <div className="subTitle">{item.subTitle}</div>
                <div className="textStyle">{item.text}</div>
            </div>
        </div>
    ))



    return(
        <div className="container">
            {aboutUsRender}
        </div>
    )
}


export default AboutUsInfo;