import React from 'react'
import classes from './Result.module.css'
const Result = (props) =>{
     return(
         <div className={classes.resultBtn} onClick={props.resultHandler}>
             =
         </div>
     )
}

export default Result