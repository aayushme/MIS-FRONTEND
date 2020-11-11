import React from 'react';
import classes from './input.css'

const input = (props)=>{
    let inputElement = null;

    switch(props.inputType){
        case ('input') :
            inputElement = <input {...props} />
            break;
        case ('textarea'):
            inputElement = <textarea {...props} />
            break;  
        default:
            inputElement = <input {...props}/>                  

    }

    return(
        <div props={classes.input}>
            
            <div>
                {inputElement}
            </div>
            <div>
    {(props.label == null)?<></>:<label className={props.labelclass}>{props.label}</label>}
            </div>



        </div>
    )
}

export default input;