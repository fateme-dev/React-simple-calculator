import React from 'react'
import Operator from './Operator/Operator'
import classes from './Operators.module.css'


const ops=[
    {ops:"+" , type:"+"},
    {ops:"-" , type:"-"},
    {ops:"✕" , type:"*"},
    {ops:"/" , type:"/"},
    
]

const Operators = (props) =>{

    return(
        <div className={classes.operators}>
            {ops.map((op)=>{
               return <Operator key={op.type} clicked={()=>props.operatorClick(op.type)} operator={op.ops} />
            })}
        </div>
    )
}

export default Operators