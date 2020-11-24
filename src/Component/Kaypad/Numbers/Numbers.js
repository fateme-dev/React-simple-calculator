import React from 'react'
import classes from './Numbers.module.css'
import Number from './Number/Number'
import Result from '../Operators/Result/Result'

const nums= ["1","2","3","4","5","6","7","8","9","0"]

const Numbers = (props) =>{

    return (
        <div className={classes.numbers}>
            {
                    nums.map((num)=>{
                        return <Number clicked={()=>props.numberClick(num)} key={num}>{num}</Number>
                    })
            }
            <Result resultHandler={props.resultHandler}/>    
        </div>
    

    )

}

export default Numbers