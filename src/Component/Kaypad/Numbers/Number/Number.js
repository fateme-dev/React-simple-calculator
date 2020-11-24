import React from 'react'
import classes from './Number.module.css'


const Number = (props) =>{

    return(
        <div onClick={props.clicked} className={classes.number}>
            {props.children}
        </div>
    )
}

export default Number