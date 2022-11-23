import React, {useEffect} from "react";
import classes from './NumbersData.module.css';
import {useLocation, useNavigate} from "react-router-dom";
import Button from "../../../UI/Button/Button";



function NumbersData(props) {

    const routePath = useLocation();
    const onTop = () => {
        window.scrollTo(0, 0);
    }

    useEffect(() => {
        onTop()
    }, [routePath]);



    const numberData=[
        {
            number:"27",
            description:"years in business"
        },
        {
            number:"40+",
            description:"team members"
        },
        {
            number:"50+",
            description:"client companies served"
        },
        {
            number:"75%",
            description:"team members who love spicy food"
        },
        {
            number:"45%",
            description:"team members have climbed a mountain"
        },
        {
            number:"80%",
            description:"team members love pizza"
        },
        {
            number:"32",
            description:"countries represented amongst our team"
        },

        {
            number:"25+",
            description:"food related events celebrated per yeer"
        },

        {
            number:"12",
            description:"team members who have dogs"
        },
    ]



    const numbersRender=numberData.map((item, index)=>(

            <div className={classes.numbersDiv} key={index}>
                <div className={classes.number}>{item.number}</div>
                <div className={classes.text}>{item.description}</div>
            </div>
    ))

    return(

        <div className="container">
            <div className={classes.numbersWhole}>
                <div className={classes.titleNumbers}>By the Numbers</div>
                <div className={classes.subTitleNumbers}>We have over 60 years of combined experience,
                    connecting, collaborating, and having fun doing it.</div>
                <div className={classes.numbersBlock}>
                    {numbersRender}
                </div>
                <div className={classes.btnsDivNumbers}>
                    <div className={classes.firstButton}>
                        <Button color="#EAB531" OnClick={props.moveToTeamTestimonialsPage}>Team Testimonials</Button>
                    </div>
                    <Button color="#EAB531">Explore Careers</Button>
                </div>
            </div>
        </div>

        )
}

export default NumbersData;



