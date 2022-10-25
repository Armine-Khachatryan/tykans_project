import React from "react";
import Modal from 'react-modal';
import CloseModal from '../../assets/images/CloseModal.png';
import MigrateSmall from '../../assets/images/MigrateSmall.png';
import classes from './MigrateModal.module.css';



function MigrateModal (props){

    const customStyles = {
        content: {
            padding: '50px 100px 108px 100px',
            maxWidth: '878px',
            width: '100%',
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            background:'#FFFFFF',
            borderRadius:'120px'
        },
    };
    return (
        <>
            <Modal
                isOpen={props.migrateModalIsOpen}
                onRequestClose={props.closeMigrateModal}
                style={customStyles}
                ariaHideApp={false}
            >
                <div className={classes.modalInside}>
                    <div className={classes.closingModal}  onClick={props.closeMigrateModal}>
                        <img src={CloseModal}/>
                        <div className={classes.closeWord}>Close</div>
                    </div>
                    <div className={classes.modalTitleGroup}>
                        <img src={MigrateSmall}/>
                        <div className={classes.modalTitles}>
                            <div className={classes.modalTitle}>Migrate</div>
                            <div className={classes.modalSubTitle}>It’s just like moving homes.</div>
                        </div>
                    </div>
                        <ul>
                            <li className={classes.modalLi}>Dispose of hard to maintain legacy infrastructure</li>
                            <li className={classes.modalLi}>Move on-premise soft-phone solution to the Cloud for work location flexibility
                                i.e. work from home
                            </li>
                            <li className={classes.modalLi}>Provide required infrastructure and expertise for smooth-as-skill migration to modern
                                contract centre management systems</li>
                            <li className={classes.modalLi}>( X amount ) successful migrations</li>
                        </ul>
                    <div className={classes.modalBtn}>Let’s talk migration solutions</div>
                </div>
            </Modal>
        </>
    )
}



export default MigrateModal;
