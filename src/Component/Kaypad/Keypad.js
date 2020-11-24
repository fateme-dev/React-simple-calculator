import React from 'react'
import classes from './Keypad.module.css'
import Numbers from './Numbers/Numbers'
import Operators from './Operators/Operators'
import AuxComp from '../../HOC/AuxComp'

const Keypad = (props) =>{

  
    return(
        <AuxComp>
            <Operators operatorClick={props.operatorClick} />
            <Numbers numberClick={props.numberClick} resultHandler={props.resultHandler}/>
        </AuxComp>
    )
}

export default Keypad