import React, {useState} from "react";
import MigrateBigCircle from "../../assets/images/bigCircles/Migrate_Big_Circle.png";
import BlueBook from "../../assets/images/bookIcons/BlueBook.png";
import classes from './Migration.module.css';
import MigrateModal from "../MigrateModal/MigrateModal";



function Migration() {

    const [migrateModalIsOpen, setMigrateModalIsOpen] = useState(false);

    function openMigrateModal() {
        setMigrateModalIsOpen(true);
    }

    function closeMigrateModal(){
        setMigrateModalIsOpen(false)
    }

    return(
        <>
            <div className={classes.migrationWhole}>
                <div className={classes.leftPartMigration}>
                    <img className="circleBig" src={MigrateBigCircle}/>
                </div>
                <div className={classes.rightPartMigration}>
                    <div className={classes.titleMigrate}>Migrate</div>
                    <div className="subTitle">It’s just like moving homes</div>
                    <div className="textStyle">With the changing tides of technology, you may need to
                        trade legacy infrastructure and systems for soft solutions such as could services.
                        Migration allows for more flexible and efficient work methods.</div>
                    <div className="textStyle">Say hello to a new, modern management system that you can work with
                        from anywhere in the world.</div>
                    <div className="readMore" onClick={openMigrateModal}>
                        <img className="blueBookImg" src={BlueBook}/> Read More</div>
                </div>
            </div>
            <MigrateModal migrateModalIsOpen={migrateModalIsOpen} closeMigrateModal={closeMigrateModal}/>
        </>
    )
}


export default Migration;