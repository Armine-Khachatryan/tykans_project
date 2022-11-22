import React, {useEffect} from "react";
import {useLocation} from "react-router-dom";
import Leader1 from '../../../assets/images/aboutUs/Leader1.png';
import Leader2 from '../../../assets/images/aboutUs/Leader2.png';
import Leader3 from '../../../assets/images/aboutUs/Leader3.png';
import Leader4 from '../../../assets/images/aboutUs/Leader4.png';
import Leader5 from '../../../assets/images/aboutUs/Leader5.png';
import Leader6 from '../../../assets/images/aboutUs/Leader6.png';
import Leader7 from '../../../assets/images/aboutUs/Leader7.png';
import Leader8 from '../../../assets/images/aboutUs/Leader8.png';
import GreenVint from '../../../assets/images/aboutUs/GreenVint.png';
import YellowVint from '../../../assets/images/aboutUs/YellowVint.png';
import OrangeVint from '../../../assets/images/aboutUs/OrangeVint.png';
import classes from './Leaders.module.css';



function Leaders() {

    const leadersInfo=[
        {
            img:Leader1,
            name:"Anna Silverman",
            position:"Managing Partner & CEO",
            text:"As a Managing Partner & CEO of Tykans, Anna Silverman sets the strategicdirection for Tykans to " +
                "provide the best customer experience and steer the continuous growth of operations.Passionate about " +
                "people and customer experience. Anna belives that with the right people and care, anything can be" +
                " accomplished."
        },

        {
            img:Leader2,
            name:"Callum McNeil",
            position:"Manager of Business Development",
            text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the" +
                " industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type" +
                "and scrambled it to make a type specimen book. It has survived not only five centuries, but also the" +
                " leap into electronic typesetting, remaining essentially unchanged."
        },

        {
            img:Leader3,
            name:"Manna Ng",
            position:"Chief Information Security Officer",
            text:"Meticulous about delivering the best solution, Manna Is Director of Business\n" +
                "Development, She works hand-in-hand with team members across the organization to ensure no details is " +
                "overlooked. Manna helps bring customers ideas to life by offering intuituve insight, rational " +
                "analysis, and recommendations to any situation. "
        },

        {
            img:Leader4,
            name:"Rukshan Tennakoon",
            position:"Director of Service Delivery ",
            text:"Working with every team member of Tykans to attain success, Rukshan is Director of Service Delivery." +
                " An expert in the contact center and communication technologies, Rukshan’s experience in project " +
                "delivery of complex solutions, contact center implementation, and workforce management solutions" +
                " makes him an essential asset in all Tykans projects."
        },

        {
            img:Leader5,
            name:"Nick Canarejo",
            position:"Director of Quality Assurance & Support",
            text:"Meticulous about delivering the best solution, Manna is Director of Business Development. She works " +
                "hand-in-hand with team members across the organization to ensure no detail is overlooked. Manna helps" +
                " bring customers ideas to life by offering intuitive insight,rational analysis, and recommendations to" +
                " any situation."
        },

        {
            img:Leader6,
            name:"Jorge Wong",
            position:"Director of Operations",
            text:"An advocade for excellence, Jorge is Director of  Operations and Customer Relationship Management," +
                " He accomplishes quality through eggective operational performance and management. He is a vital " +
                "leader, mentor, and coach with proven collaborative skills that empower high-performance teams."
        },

        {
            img:Leader7,
            name:"Cher Chen",
            position:"Financial Controller",
            text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the " +
                "industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type " +
                "and scrambled it to make a type specimen book. It has survived not only five centuries, but also the " +
                "leap into electronic typesetting, remaining essentially unchanged."
        },

        {
            img:Leader8,
            name:"Michael Silverman",
            position:"VR Operations",
            text:"Overseeing the operational management of Tykans, Michael is VP of Operations. He is technically " +
                "involved and participates in projects, supports the internal network, and assits in sipporting the" +
                " telecommunications infrastructure of Tykans customers."
        }
    ]


    const routePath = useLocation();
    const onTop = () => {
        window.scrollTo(0, 0);
    }

    useEffect(() => {
        onTop()
    }, [routePath]);

    const renderLeaders=leadersInfo.map((item, index)=>(
        <div className={classes.leadersWhole} key={index}>
            <div className={classes.leftPartLeader}>
                <img className="circleBig" src={item.img}/>
            </div>
            <div className={classes.rightPartLeader}>
                <div className={classes.titleLeader}>{item.name}</div>
                <div className={classes.subTitleLeader}>{item.position}</div>
                <div className={classes.textLeader}>{item.text}</div>
            </div>
        </div>
    ))

    return(
        <div className={classes.leaderBackground}>
            <div className="container">
                <div className={classes.leadersUpPart}>
                    <div className={classes.leadersUpLeft}>
                        <div className={classes.yellowTitle}>Our Leadership</div>
                        <div className={classes.subTitleLeadersUpPart}>The real people, driving force,
                            and fab crew leading us.</div>
                    </div>
                    <div className={classes.leadersUpRight}>
                        <div className={classes.yellowVintDiv}>
                            <img src={YellowVint}/>
                        </div>
                        <div className={classes.greenVintDiv}>
                            <img src={GreenVint}/>
                        </div>
                        <div className={classes.orangeVintDiv}>
                            <img src={OrangeVint}/>
                        </div>
                    </div>
                </div>
                {renderLeaders}
            </div>
        </div>

    )
}


export default Leaders;