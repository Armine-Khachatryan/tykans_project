import React from "react";
import Button from "../../../UI/Button/Button";
import YellowVint from "../../../assets/images/YellowVint.png";
import GreenVint from "../../../assets/images/GreenVint.png";
import OrangeVint from "../../../assets/images/OrangeVint.png";

import classes from './CareersSecondPart.module.css';

function CareersSecondPage (props) {


    const resultCareersSecondPage = props?.careersInfo?.sections?.filter(item => (item.layout ==="Content"), 0)
    console.log(resultCareersSecondPage, "************************")
    // console.log(resultCareersSecondPage[0].attributes.title)



    return(
        <div className="container">
            <div className={classes.insideCareersdiv}>
                { resultCareersSecondPage &&
                    <div className={classes.insideCareersLeft}>
                        <div className={classes.insideCareersTitle}>{resultCareersSecondPage[0]?.attributes?.title}</div>
                        <div className={classes.insideCareersText}
                             dangerouslySetInnerHTML={{ __html: resultCareersSecondPage[0]?.attributes?.description }}>
                        </div>
                        <Button color='#92374D'>Explore open roles</Button>
                    </div>
                }
                <div className={classes.insideCareersRight}>
                    <div className={classes.careers2ImgDiv}>
                        <div>
                            <img className={classes.yellowVint} src={YellowVint}/>
                        </div>
                        <div>
                            <img  className={classes.greenVint} src={GreenVint}/>
                        </div>
                        <div>
                            <img  className={classes.orangeVint} src={OrangeVint}/>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}


export default CareersSecondPage;

