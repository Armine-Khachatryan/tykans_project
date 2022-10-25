import React from "react";
import BlueFrame from '../../assets/images/BlueFrame.png';
import ProductFrame from '../../assets/images/ProductFrame.png';
import classes from './Products.module.css';




function Products() {


    return (
        <div className={classes.productsBackImg} style={{background: `url(${BlueFrame})`,height: "1222px"}}>
            <div className={classes.productFrameDiv} style={{background: `url(${ProductFrame})`}}>
                <div className={classes.titleProducts}>Products</div>
            </div>
        </div>
    )
}


export default Products;

