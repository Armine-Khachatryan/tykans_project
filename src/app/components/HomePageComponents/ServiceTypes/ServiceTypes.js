import React from "react";
import classes from './ServiceTypes.module.css';
import IntegrateBigCircle from "../../../assets/images/bigCircles/Integrate_Big_Circle.png";
import BlueBook from "../../../assets/images/bookIcons/BlueBook.png";





function ServiceTypes(props) {

    const services = props.servicesInfo.slice(2);
    console.log(services, "cropped services")



        const renderServices=services.map((item, index)=>(
            <div className={classes.serviceTypesWhole} key={index} id={item.slug}>
                <div className={classes.leftPartServiceTypes}>
                    <img className="circleBig" src={IntegrateBigCircle}/>
                </div>
                <div className={classes.rightPartServiceTypes}>
                    <div className={classes.titleServiceTypes}>{item.title}</div>
                    <div className="subTitle">{item.subtitle}</div>
                    <div className="textStyle" dangerouslySetInnerHTML={{ __html: item.description }}></div>
                    <div className={classes.readMore}>
                        <img className="blueBookImg" src={BlueBook}/>Read More</div>
                </div>
            </div>
        ))
    return(
        <div className={classes.services}>
            <div className="container" >
                {renderServices}
            </div>
        </div>
    )
}


export default ServiceTypes;

