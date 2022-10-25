import React from "react";
import ImgInfo1 from '../../assets/images/ImgInfo1.png';
import ImgInfo2 from '../../assets/images/ImgInfo2.png';
import ImgInfo3 from '../../assets/images/ImgInfo3.png';
import classes from './InformationList.module.css';
import BlueBook from "../../assets/images/bookIcons/BlueBook.png";





function InformationList() {


    const cardInfo=[
        {
            img:ImgInfo1,
            title:"Maverick",
            text1:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been " +
                "the industry's standard dummy text ever since the 1500s.",
            text2:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been " +
                "the industry's standard dummy text ever since the 1500s.",
            text3:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been " +
                "the industry's standard dummy text ever since the 1500s."
        },
        {
            img:ImgInfo2,
            title:"Tykans Observer",
            text1:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been " +
                "the industry's standard dummy text ever since the 1500s.",
            text2:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been " +
                "the industry's standard dummy text ever since the 1500s.",
            text3:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been " +
                "the industry's standard dummy text ever since the 1500s."
        },
        {
            img:ImgInfo3,
            title:"Evangelist",
            text1:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been " +
                "the industry's standard dummy text ever since the 1500s.",
            text2:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been " +
                "the industry's standard dummy text ever since the 1500s.",
            text3:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been " +
                "the industry's standard dummy text ever since the 1500s."
        }
    ]


    const renderCards = cardInfo.map((item, index)=>
                <div className={classes.cardInfo}>
                    <div className={classes.imgInfo}>
                        <img className="circleBig" src={item.img}/>
                    </div>
                    <div className={classes.titleInfo}>{item.title}</div>
                    <ul>
                        <li className={classes.textInfo}>{item.text1}</li>
                        <li  className={classes.textInfo}>{item.text2}</li>
                        <li className={classes.textInfo}>{item.text3}</li>
                    </ul>
                    <div className="readMore somePadding">
                        <img className="blueBookImg" src={BlueBook}/> Read More</div>
                </div>
            )

    return (
        <div className="container">
            <div className={classes.allInOne}>
                {renderCards}
            </div>
        </div>
    )
}
export default InformationList;