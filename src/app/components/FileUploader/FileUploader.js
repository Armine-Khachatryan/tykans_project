import React from 'react'
import classes from './FileUploader.module.css';


const FileUploader = props => {

    const hiddenFileInput = React.useRef(null);
    const handleClick = event => {
        event.preventDefault();
        hiddenFileInput.current.click();
    };

    const handleChange = event => {
        props.onHandleFile(event);
    };

    return (
        <>

        {/*// <label  className={classes.attachedButton}  onClick={handleClick} >*/}
            <button className={classes.attachedButton} onClick={handleClick}>
            <img src={props.img}/>
            {props.btnText}
            </button>
            <input
                accept={props.accept}
                type="file"
                name={props.name}
                style={{display:'none'}}
                ref={hiddenFileInput}
                onChange={handleChange}
            />


        {/*// </label>*/}
        </>
    );
}
export default FileUploader;
