import React, { Component } from 'react'
import Display from '../../Component/Display/Display'
import Keypad from '../../Component/Kaypad/Keypad'
import classes from './Layout.module.css'

class Layout extends Component {

    state = {
        current: "0",
        statement: [],
        lastFlag: null
    }


    numberClick = (num) => {

        this.setState((state) => {
            let n;
            this.state.lastFlag == null || this.state.lastFlag == "op" || this.state.lastFlag == "eq" || this.state.current == "0" ?
                n = num :
                n = state.current + num;
            let st = [...state.statement];
            this.state.lastFlag == "eq" ? st = [] : st = st
            return ({
                current: n,
                lastFlag: "num",
                statement: st
            })

        })

    }


    operatorClick = (op) => {

        let st = [... this.state.statement]
       
        if (this.state.lastFlag == "op") {
            st.pop();
            st.push(op)
        } else if (this.state.lastFlag == "eq") {
            st = []
            st.push(this.state.current, op)
        } else { //if num
            st.push(this.state.current, op)
        }

        this.setState(
            {
                statement: st,
                lastFlag: "op"
            })

    }


    resultHandler = () => {
        let st = [... this.state.statement]
        if (this.state.lastFlag == "num") {
            st.push(this.state.current)
        } else {
            st.pop();
        }

        let res = eval(st.join(''))
        st.push('=')
        this.setState(
            {
                statement: st,
                lastFlag: "eq",
                current: res
            })


    }


    render() {
        console.log(this.state)
        return (
            <main className={classes.main}>
                <div className={classes.calculator}>
                    <Display current={this.state.current} statement={this.state.statement} />
                    <Keypad numberClick={this.numberClick} operatorClick={this.operatorClick} resultHandler={this.resultHandler} />
                </div>
            </main>
        )
    }

}


export default Layout;