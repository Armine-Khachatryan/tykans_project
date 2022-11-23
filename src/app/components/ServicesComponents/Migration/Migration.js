// import React, {useState} from "react";
// import MigrateBigCircle from "../../../assets/images/bigCircles/Migrate_Big_Circle.png";
// import BlueBook from "../../../assets/images/bookIcons/BlueBook.png";
// import classes from './Migration.module.css';
// import MigrateModal from "../../MigrateModal/MigrateModal";
//
//
//
// function Migration() {
//
//     const [migrateModalIsOpen, setMigrateModalIsOpen] = useState(false);
//
//     function openMigrateModal() {
//         setMigrateModalIsOpen(true);
//     }
//
//     function closeMigrateModal(){
//         setMigrateModalIsOpen(false)
//     }
//
//     return(
//         <>
//             <div className={classes.migrationWhole}  id="migrate">
//                 <div className={classes.leftPartMigration}>
//                     <img className="circleBig" src={MigrateBigCircle}/>
//                 </div>
//                 <div className={classes.rightPartMigration}>
//                     <div className={classes.titleMigrate}>Migrate</div>
//                     <div className="subTitle">It’s just like moving homes</div>
//                     <div className="textStyle">With the changing tides of technology, you may need to
//                         trade legacy infrastructure and systems for soft solutions such as could services.
//                         Migration allows for more flexible and efficient work methods.</div>
//                     <div className="textStyle">Say hello to a new, modern management system that you can work with
//                         from anywhere in the world.</div>
//                     <div className="readMore" onClick={openMigrateModal}>
//                         <img className="blueBookImg" src={BlueBook}/> Read More</div>
//                 </div>
//             </div>
//             <MigrateModal migrateModalIsOpen={migrateModalIsOpen} closeMigrateModal={closeMigrateModal}/>
//         </>
//     )
// }
//
//
// export default Migration;
//

// import classes from "../ServiceTypes/ServiceTypes.module.css";
// import IntegrateBigCircle from "../../../assets/images/bigCircles/Integrate_Big_Circle.png";
// import BlueBook from "../../../assets/images/bookIcons/BlueBook.png";
// import React from "@types/react";
//
// function ServiceTypes(props) {
//
//     const services = props.servicesInfo.slice(2);
//     console.log(services, "cropped services")
//
//
//
//     const renderServices=services.map((item, index)=>(
//         <div className={classes.integrationWhole} key={index} id={item.slug}>
//             <div className={classes.leftPartIntegration}>
//                 <img className="circleBig" src={IntegrateBigCircle}/>
//             </div>
//             <div className={classes.rightPartIntegration}>
//                 <div className={classes.titleIntegrate}>{item.title}</div>
//                 <div className="subTitle">{item.subtitle}</div>
//                 <div className="textStyle" dangerouslySetInnerHTML={{ __html: item.description }}></div>
//                 {/*<div className="textStyle">Have the information you need on-hand to help make things more*/}
//                 {/*    convenient for customers and agents.</div>*/}
//                 <div className={classes.readMore}>
//                     <img className="blueBookImg" src={BlueBook}/>Read More</div>
//             </div>
//         </div>
//     ))
//     return(
//         <div className={classes.ddd}>
//             <div className="container" >
//                 {renderServices}
//             </div>
//         </div>
//     )
// }
//
//
// export default ServiceTypes;


//
// return(
//     <>
//         <div className="container" id="integrate">
//             <div className={classes.integrationWhole}>
//                 <div className={classes.leftPartIntegration}>
//                     <div className={classes.titleIntegrate}>Integrate</div>
//                     <div className="subTitle">Elevate convenience & efficiency.</div>
//                     <div className="textStyle">Accurate and simple navigation applications help handle processing and
//                         organizing sensitive data. Integrate your valuable existing systems with newer applications.
//                     </div>
//                     <div className="textStyle">Have the information you need on-hand to help make things more
//                         convenient for customers and agents.</div>
//                     <div className="readMore leftAlign">
//                         <img className="blueBookImg" src={BlueBook}/>Read More</div>
//                 </div>
//                 <div className={classes.rightPartIntegration}>
//                     <img className="circleBig" src={IntegrateBigCircle}/>
//                 </div>
//             </div>
//         </div>
//     </>
// )
// }
//
//
// export default ServiceTypes;