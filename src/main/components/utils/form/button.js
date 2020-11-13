import React from 'react'
import './input.css'

const Button = (props)=>{

    return(
        <div >
            <button className="button" {...props}> {props.value_name} </button>

        </div>
    )
}

export default Button;