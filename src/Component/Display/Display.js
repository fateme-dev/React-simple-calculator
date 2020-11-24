import React from 'react'
import classes from './Display.module.css'


const Display = (props) =>{


    return(
        <div className={classes.display}>
            <p className={classes.statement}>
               {props.statement}
            </p>

            <p className={classes.current}>
                {props.current}
            </p>

        </div>
    )

}

export default Display