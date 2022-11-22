import React from "react";
import BlueFrame from '../../../assets/images/BlueFrame.png';
import ProductFrame from '../../../assets/images/ProductFrame.png';
import classes from './Products.module.css';




function Products() {


    return (
        <div className={classes.productsBackImg} style={{'background-image': `url(${BlueFrame})`,height: "1222px"}}>
            <div className={classes.productFrameDiv} style={{'background-image': `url(${ProductFrame})`}}>
                <div className="container">
                    <div className={classes.titleProducts}>Products</div>
                </div>
            </div>
        </div>
    )
}


export default Products;

