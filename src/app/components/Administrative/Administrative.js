import React, {useState} from "react";
import classes from './Administrative.module.css';
import Button from "../../UI/Button/Button";
import AdministartiveForm from "../AdministrativeForm/AdministartiveForm";




function Administrative() {


    const[showForm, setShowForm]=useState(false)







    return(
        <div className="container">
            <div className={classes.administrativeWhole}>
                <div className={classes.administrativeLeft}>
                    <div className={classes.administrativeTitle}>Administrative</div>
                    <div className={classes.administrativeInfo}>Calgary, Canada
                        <span className={classes.spanAdmin}>/</span>
                        <span className={classes.spanAdmin}>Quality Assurance</span>
                        <span className={classes.spanAdmin}>/</span>
                        <span className={classes.spanAdmin}>Full Time</span>
                    </div>
                    <div className={classes.administrativeInfo}>[ ID 000312 ]</div>
                </div>
                {!showForm &&
                <div>
                    <Button color='#92374D' OnClick={()=>setShowForm(!showForm)}>Apply</Button>
                </div>}
            </div>
            {!showForm ?
                <>
                <div className={classes.adminTitle}>Role Overview</div>
                <div className={classes.adminText}>Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                    unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived
                    not only five centuries, but also the leap into electronic typesetting, remaining essentially
                    unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software like Aldus PageMaker including versions
                    of Lorem Ipsum.</div>
                <div className={classes.adminTitle}>What You Will Do</div>
                <ul>
                    <li className={classes.list}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                    <li className={classes.list}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                    <li className={classes.list}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                    <li className={classes.list}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                    <li className={classes.list}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                    <li className={classes.list}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                    <li className={classes.list}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                </ul>
                <div className={classes.adminTitle}>What You’ll Bring</div>
                <ul>
                    <li className={classes.list}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                    <li className={classes.list}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                    <li className={classes.list}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                    <li className={classes.list}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                    <li className={classes.list}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                    <li className={classes.list}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                    <li className={classes.list}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                </ul>
            </>: <AdministartiveForm/>}
                </div>
    )
}


export default Administrative;