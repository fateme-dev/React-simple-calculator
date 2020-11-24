import React from 'react'
import classes from './Operator.module.css'


const Operator = (props) =>{

    return(
        <div onClick={props.clicked} className={classes.operator} >
           {props.operator}
        </div>
    )
}

export default Operator